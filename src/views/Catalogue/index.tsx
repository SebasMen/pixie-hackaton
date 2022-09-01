import { useEffect, useState } from 'react';
import { useAppContext, useFetch } from '../../hooks';

// Components
import Page from '../../components/layout/page';
import Footer from '../../components/layout/footer';
import IconButton from '../../components/common/iconButton';
import AnimalFilter from '../../components/common/animalFilter';
import ProductsSection from './productsSection';
import Spinner from '../../components/common/spinner';
import BannerSection from './bannerSection';

import { ProductListResponse } from '../../interfaces/product';
import { filterShop } from '../../interfaces/filter';
import productService from '../../services/productService';

import '../../styles/catalogue.css';
import { dog } from '../../assets/vectors';
import { useSearchParams } from 'react-router-dom';
import useScrolled from '../../hooks/useScrolled';

const Catalogue = () => {
  // Hooks
  const [products, setproducts] = useState<ProductListResponse>();
  const [loading, setLoading] = useState(true);
  const [filterSelected, setfilterSelected] = useState<filterShop>({
    agePet: [],
    typePet: []
  });
  const { updateContext, marginWhatsApp } = useAppContext();
  const [searchParams] = useSearchParams();
  const { scrollTo } = useScrolled();

  useEffect(() => {
    updateContext(old => ({ ...old, showNavbar: true }));
  }, [screen.width]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  const getProducts = async () => {
    if (searchParams.get('query'))
      await productService.getQueryProducts(searchParams.get('query') ? searchParams.get('query') : '')
        .then(data => {
          setproducts(data);
          setLoading(false);
          scrollTo(800);
        });
    else
      await productService.getAllProducts().then(data => {
        setproducts(data);
        setLoading(false);
      });
  };

  return (
    <Page color='#7AC5BE'>
      {loading
        ?
        <div className='w-full h-screen flex items-center justify-center'>
          <Spinner />
        </div>
        : (
          <>
            {/* Banner */}
            <BannerSection />

            {/* FAB */}
            <IconButton
              className={`${marginWhatsApp ? 'animation-buttonWhatsapp md:right-[25rem]' : 'md:right-6 animate__animated animate__bounceInRight'} fixed bottom-5 z-50 p-1 pt-1.5 pl-1.5 text-white md:bottom-[53%]`}
              color='#DF2F44'
              name='DogButton'
              img={dog}
              sizeContainer={'w-[75px] h-[75px]'}
              onClick={() => console.log('Hi')}
            />

            <AnimalFilter setFilter={setfilterSelected} filter={filterSelected} />

            {/* Products */}
            <ProductsSection data={products?.products} filter={filterSelected} />

            {/* Footer */}
            <Footer />
          </>)}
    </Page>
  );
};

export default Catalogue;
