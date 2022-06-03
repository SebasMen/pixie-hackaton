import { useParams } from 'react-router-dom';

import Page from '../../components/layout/page';
import NavBar from '../../components/layout/navBar';
import Button from '../../components/common/button';
import Footer from '../../components/layout/footer';

import BannerDetail from './bannerDetail';
import NutritionSection from './NutritionSection';
import InfoAccordion from './InfoAccordion';
import InfoSection from './InfoSection';

import '../../styles/banner.css';
import ExtraInfoContainer from './ExtraInfoContainer';

const ingredients = [
  'Corazón de res', 'Pulmón de res', 'Arroz integral', 'Papa', 'Zanahoria', 'Habichuela', 'Quinua', 'Linaza', 'Aceite vegetal', 'Huevo', 'Vitaminas', 'Minerales'
];

const Detail = () => {
  // Hooks
  const { id } = useParams();

  // Component
  return (
    <Page>
      <div className='flex flex-col w-full h-screen flex-shrink-0 overflow-hidden productBanner'>
        {/* NavBar */}
        <NavBar isProduct />
        <p className='hidden text-gray-500 md:pt-10 md:mb-1 md:pl-24 md:block'>{'Catálogo > Pixie carne al horno'}</p>
        <div className='w-full flex-grow flex flex-col flex-shrink-0 md:flex-row md:px-24 md:pb-10 md:gap-16'>
          {/* Banner Detail */}
          <BannerDetail />
          <InfoSection id={id} />
        </div>
      </div>

      {/* Calculator */}
      <div className='flex mx-3 mt-5 md:hidden md:px-24'>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
        <Button className='ring-2 ring-red-600 text-red-500'>Calculadora</Button>
      </div>

      {/* Nutrition */}
      <NutritionSection ingredients={ingredients} />

      {/* Other Info */}
      <InfoAccordion />

      <ExtraInfoContainer />

      {/* Footer */}
      <Footer className='md:mt-16' />
    </Page >
  );
};

export default Detail;
