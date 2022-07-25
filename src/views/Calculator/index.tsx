import IconButton from '../../components/common/iconButton';
import Footer from '../../components/layout/footer';
import Page from '../../components/layout/page';
import BannerSection from './BannerSection';
import CalculatorSection from './calculatorSection';

import { dog } from '../../assets/vectors';
import { useState } from 'react';
import { useAppContext } from '../../hooks';

const Calculator = () => {
  const [view, setView] = useState(0);
  const { marginWhatsApp } = useAppContext();
  return (
    <Page color='#F9D864' className='bg-secondary'>
      {/* Banner */}
      <BannerSection view={view}/>

      {/* Calculator */}
      <CalculatorSection setView={setView}/>

      {/* result */}

      {/* FAB */}
      <IconButton
        className={`${marginWhatsApp ? 'animation-buttonWhatsapp md:right-[25rem]' : 'md:right-6 animate__animated animate__bounceInRight'} hidden md:block fixed bottom-5 z-50 p-1 pt-1.5 pl-1.5 text-white md:right-6 md:bottom-[53%]`}
        color='#DF2F44'
        name='DogButton'
        img={dog}
        sizeContainer={'w-[75px] h-[75px]'}
        onClick={() => console.log('Hi')}
      />
      <Footer />
    </Page>
  );
};

export default Calculator;
