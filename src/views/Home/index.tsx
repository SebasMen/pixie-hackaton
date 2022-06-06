import Page from '../../components/layout/page';
import NavBar from '../../components/layout/navBar';
import ProductsSection from './productsSection';
import Banner from '../../components/layout/banner';
import IconButton from '../../components/common/iconButton';
import Footer from '../../components/layout/footer';
import CalculatorSection from './calculatorSection';

import { backgroundWood } from '../../assets/images';
import { dog } from '../../assets/vectors';

import { products } from '../../@fake/productsFake';
import { dataBanner } from '../../@fake/bannerFake';

const Home = () => (
  <Page color='#efd1b0'>
    {/* Background */}
    <img
      src={backgroundWood}
      alt='wood-bg'
      className='object-cover h-screen absolute top-0 -z-10 md:w-screen'
      style={{ backgroundColor: '#FAD7B1' }}
    />

    {/* Navbar */}
    <NavBar />

    {/* Banner */}
    <Banner dataBanner={dataBanner} showBotton={true} />

    {/* Carrousel & Products */}
    <ProductsSection products={products} />

    {/* FAB */}
    <IconButton
      className='fixed bottom-5 z-50 p-1 pt-1.5 pl-1.5 text-white md:right-12 md:bottom-1/2'
      color='#DF2F44'
      name='DogButton'
      img={dog}
      onClick={() => console.log('Hi')}
    />

    {/* Calculator */}
    <CalculatorSection />

    {/* Footer */}
    <Footer />
  </Page>
);

export default Home;
