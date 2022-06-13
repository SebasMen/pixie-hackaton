import IconButton from '../../components/common/iconButton';
import Footer from '../../components/layout/footer';
import Page from '../../components/layout/page';
import BannerSection from './BannerSection';
import CalculatorSection from './calculatorSection';

import { dog } from '../../assets/vectors';

const Calculator = () => (
  <Page color='#efd1b0' className='bg-secondary'>
    {/* Banner */}
    <BannerSection />

    {/* Calculator */}
    <CalculatorSection />

    {/* result */}

    {/* FAB */}
    <IconButton
      className='fixed bottom-5 z-50 p-1 pt-1.5 pl-1.5 text-white md:right-12 md:bottom-1/2'
      color='#DF2F44'
      name='DogButton'
      img={dog}
      onClick={() => console.log('Hi')}
    />
    <Footer />
  </Page>
);

export default Calculator;
