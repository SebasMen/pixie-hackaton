import { useState } from 'react';

import Footer from '../../components/layout/footer';
import Page from '../../components/layout/page';
import BannerSection from './BannerSection';
import CalculatorSection from './calculatorSection';

import ButtonWhatsap from '../../components/common/buttonWhatsapp';

const Calculator = () => {
  // Hooks
  const [view, setView] = useState(0);

  return (
    <Page className='bg-secondary bg-opacity-80'>
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

export default Calculator;
