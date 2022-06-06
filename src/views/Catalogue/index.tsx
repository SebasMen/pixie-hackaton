/// components
import Page from '../../components/layout/page';
import NavBar from '../../components/layout/navBar';
import Footer from '../../components/layout/footer';
import Banner from '../../components/layout/banner';
import IconButton from '../../components/common/iconButton';
import AnimalFilter from '../../components/common/animalFilter';
import ProductsSection from './productsSection';

import { backgroundWood } from '../../assets/images';
import { dog } from '../../assets/vectors';

import { productsCatalogue } from '../../@fake/productsFake';
import { dataBanner } from '../../@fake/bannerFake';

const Catalogue = () => (
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
    <Banner dataBanner={dataBanner} showBotton={false} />

    {/* FAB */}
    <IconButton
      className='fixed bottom-5 z-50 p-1 pt-1.5 pl-1.5 text-white md:right-12 md:bottom-1/2'
      color='#DF2F44'
      name='DogButton'
      img={dog}
      onClick={() => console.log('Hi')}
    />

    <AnimalFilter />

    {/* Products */}
    <ProductsSection data={productsCatalogue} />

    {/* Footer */}
    <Footer />
  </Page>
);

export default Catalogue;
