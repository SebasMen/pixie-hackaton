import Page from '../../components/layout/page';
import NavBar from '../../components/layout/navBar';
import ProductsSection from './productsSection';
import Banner from '../../components/layout/banner';
import IconButton from '../../components/common/iconButton';
import Footer from '../../components/layout/footer';
import CalculatorSection from './calculatorSection';
import backgroundWood from '../../assets/images/backgroundWood.png';

import { Product } from '../../interfaces/product';

import dog from '../../assets/vectors/dog.svg';

const dataBanner = [
  {
    title: 'Lorem ipsum dolor sit amet1',
    text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Lorem ipsum dolor sit amet2',
    text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Lorem ipsum dolor sit amet3',
    text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const products: Product[] = [
  {
    id: '1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    name: 'Lorem ipsum dolor sit amet',
    price: 1000,
    tag: 'sample',
  },
  {
    id: '2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    name: 'Lorem ipsum dolor sit amet',
    price: 1000,
    tag: 'sample',
  },
  {
    id: '3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    name: 'Lorem ipsum dolor sit amet',
    price: 1000,
    tag: 'sample',
  },
  {
    id: '4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    name: 'Lorem ipsum dolor sit amet',
    price: 1000,
    tag: 'sample',
  },
  {
    id: '5',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    name: 'Lorem ipsum dolor sit amet',
    price: 1000,
    tag: 'sample',
  },
];

const Home = () => (
  <Page className='relative'>
    {/* Background */}
    <img
      src={backgroundWood}
      alt='wood-bg'
      className='object-cover h-screen absolute top-0 -z-10'
      style={{ backgroundColor: '#FAD7B1' }}
    />

    {/* Navbar */}
    <NavBar />

    {/* Banner */}
    <Banner dataBanner={dataBanner} />

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

    {/* calculator */}
    <CalculatorSection />

    {/* footer */}
    <Footer />
  </Page>
);

export default Home;
