import { useState } from 'react';

import Footer from '../../components/layout/footer';
import Page from '../../components/layout/page';
import BannerSection from '../Calculator/BannerSection';
import CalculatorSection from '../Calculator/calculatorSection';

import ButtonWhatsap from '../../components/common/buttonWhatsapp';
import { Helmet } from 'react-helmet';

const Fundation = () => {
  // Hooks
  const [view, setView] = useState(0);

  return (
    <Page className='bg-secondary bg-opacity-80'>
      <Helmet>
        <title>pixie - Fundaciones</title>
        <meta name='description' content='Cambia la forma en que alimentas a tu mascota, comienza aquí' />
        <meta name='keywords' content='calculadora, alimentos, perros, gatos'/>
      </Helmet>

      {/* Banner */}
      <BannerSection view={view}/>

      {/* Calculator */}
      <CalculatorSection setView={setView}/>

      {/* FAB */}
      <ButtonWhatsap />
      <Footer />
    </Page>
  );
};

export default Fundation;
