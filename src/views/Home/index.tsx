import { useEffect } from 'react';
import { useAppContext, useFetch } from '../../hooks';

import Page from '../../components/layout/page';
import ProductsSection from './productsSection';
import Banner from '../../components/layout/banner';
import Footer from '../../components/layout/footer';
import CalculatorSection from './calculatorSection';

import { dataBanner } from '../../@fake/bannerFake';
import { ProductListResponse } from '../../interfaces/product';
import productService from '../../services/productService';

import '../../styles/home.css';
import ButtonWhatsap from '../../components/common/buttonWhatsapp';
import { useLoading } from '../../hooks/useLoading';
import PopupChancePage from '../../components/layout/popupChancePage';
import { Helmet } from 'react-helmet';

const Home = () => {
  const { loading, response } = useFetch<ProductListResponse>(productService.getAllProducts);

  const { updateContext, showPopupGotoSite } = useAppContext();
  const { loadingDeterminate } = useLoading();

  useEffect(() => {
    updateContext(old => ({ ...old, showNavbar: true }));
  }, [screen.width]);

  useEffect(() => {
    if (localStorage.getItem('mexicoSeleced'))
      updateContext(old => ({ ...old, showPopupGotoSite: false }));
    return () => {};
  }, []);

  // Show loading
  useEffect(() => {
    loadingDeterminate(loading);
  }, [loading]);

  return (
    <Page color='#F7EBA8'>
      <>
        <Helmet>
          <title>pixie - Alimento para perros y gatos - comida húmeda</title>
          <meta name='description' content='Pixie es alimento húmedo para mascotas 100% natural, con gran variedad de opciones, una dieta completa para tus mascotas.' />
        </Helmet>
        {/* Banner */}
        <Banner dataBanner={dataBanner} showBotton={true} />

        {/* Carrousel & Products */}
        <ProductsSection products={response?.products} />

        {/* FAB */}
        <ButtonWhatsap />

        {/* Calculator */}
        <CalculatorSection />
        {/* Footer */}
        <Footer />
        {showPopupGotoSite && <PopupChancePage />}
      </>
    </Page>
  );
};

export default Home;
