import Page from '../../components/layout/page';
import ProductsSection from './productsSection';
import Banner from '../../components/layout/banner';
import IconButton from '../../components/common/iconButton';
import Footer from '../../components/layout/footer';
import CalculatorSection from './calculatorSection';

import { backgroundWood } from '../../assets/images';
import { dog } from '../../assets/vectors';

import { dataBanner } from '../../@fake/bannerFake';
import { useAppContext, useFetch } from '../../hooks';
import Spinner from '../../components/common/spinner';
import { ProductListResponse } from '../../interfaces/product';
import { useEffect } from 'react';
import productService from '../../services/productService';

const Home = () => {
  const { loading, response } = useFetch<ProductListResponse>(productService.getAllProducts);

  const { updateContext } = useAppContext();

  useEffect(() => {
    updateContext(old => ({ ...old, showNavbar: true }));
  }, [screen.width]);

  return (
    <Page color='#efd1b0'>
      {loading ? (
        <div className='w-full h-screen flex items-center justify-center'>
          <Spinner />
        </div>
      ) : (
        <>
          {/* Background */}
          <img
            src={backgroundWood}
            alt='wood-bg'
            className='object-cover h-screen absolute top-0 -z-10 md:w-screen'
            style={{ backgroundColor: '#FAD7B1' }}
          />

          {/* Banner */}
          <Banner dataBanner={dataBanner} showBotton={true} />

          {/* Carrousel & Products */}
          <ProductsSection products={response?.products} />

          {/* FAB */}
          <IconButton
            className='fixed bottom-5 z-50 p-1 pt-1.5 pl-1.5 text-white md:right-6 md:bottom-1/2'
            color='#DF2F44'
            name='DogButton'
            img={dog}
            sizeContainer={'w-[67px] h-[67px] md:w-[75px] md:h-[75px]'}
            onClick={() => console.log('Hi')}
          />

          {/* Calculator */}
          <CalculatorSection />
          {/* Footer */}
          <Footer />
        </>
      )}
    </Page>
  );
};

export default Home;
