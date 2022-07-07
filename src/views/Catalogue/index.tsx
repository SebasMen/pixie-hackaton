import { useEffect, useState } from 'react';

// Components
import Page from '../../components/layout/page';
import Footer from '../../components/layout/footer';
import IconButton from '../../components/common/iconButton';
import AnimalFilter from '../../components/common/animalFilter';
import ProductsSection from './productsSection';
import Spinner from '../../components/common/spinner';
import BannerSection from './bannerSection';

import { dog } from '../../assets/vectors';

import { ProductListResponse } from '../../interfaces/product';
import { filterShop } from '../../interfaces/filter';
import { useAppContext, useFetch } from '../../hooks';
import productService from '../../services/productService';

const Catalogue = () => {
  const { loading, response } = useFetch<ProductListResponse>(productService.getAllProducts);
  const [filterSelected, setfilterSelected] = useState<filterShop>({
    agePet: [],
    typePet: []
  });
  const { updateContext } = useAppContext();

  useEffect(() => {
    updateContext(old => ({ ...old, showNavbar: true }));
  }, [screen.width]);

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
              className='fixed bottom-5 z-50 p-1 pt-1.5 pl-1.5 text-white md:right-6 md:bottom-[53%]'
              color='#DF2F44'
              name='DogButton'
              img={dog}
              sizeContainer={'w-[75px] h-[75px]'}
              onClick={() => console.log('Hi')}
            />

            <AnimalFilter setFilter={setfilterSelected} filter={filterSelected} />

            {/* Products */}
            <ProductsSection data={response?.products} filter={filterSelected} />

            {/* Footer */}
            <Footer />
          </>)}
    </Page>
  );
};

export default Catalogue;
