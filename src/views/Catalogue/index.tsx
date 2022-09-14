import { useEffect, useState } from 'react';
import { useAppContext } from '../../hooks';

// Components
import Page from '../../components/layout/page';
import Footer from '../../components/layout/footer';
import AnimalFilter from '../../components/common/animalFilter';
import ProductsSection from './productsSection';
import Spinner from '../../components/common/spinner';
import BannerSection from './bannerSection';

import { ProductListResponse } from '../../interfaces/product';
import { filterShop } from '../../interfaces/filter';
import productService from '../../services/productService';

import '../../styles/catalogue.css';
import { useSearchParams } from 'react-router-dom';
import useScrolled from '../../hooks/useScrolled';
import ButtonWhatsap from '../../components/common/buttonWhatsapp';
import { useLoading } from '../../hooks/useLoading';

const Catalogue = () => {
  // Hooks
  const [products, setproducts] = useState<ProductListResponse>();
  const [loading, setLoading] = useState(true);
  const [filterSelected, setfilterSelected] = useState<filterShop>({
    agePet: [],
    typePet: []
  });
  const { updateContext } = useAppContext();
  const [searchParams] = useSearchParams();
  const { scrollTo } = useScrolled();
  const { loadingDeterminate } = useLoading();

  useEffect(() => {
    updateContext(old => ({ ...old, showNavbar: true }));
  }, [screen.width]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  // Show loading
  useEffect(() => {
    loadingDeterminate(loading);
  }, [loading]);

  // Methods
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
    <Page className='bg-pixieLightBlue md:bg-[#7bc6bf]' addPadding={false}>
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
            <ButtonWhatsap />

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
