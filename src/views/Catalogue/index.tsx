/// components
import Page from '../../components/layout/page';
import Footer from '../../components/layout/footer';
import Banner from '../../components/layout/banner';
import IconButton from '../../components/common/iconButton';
import AnimalFilter from '../../components/common/animalFilter';
import ProductsSection from './productsSection';

import { backgroundWood } from '../../assets/images';
import { dog } from '../../assets/vectors';

import { dataBanner } from '../../@fake/bannerFake';
import { useFetch } from '../../hooks';
import { ProductListResponse } from '../../interfaces/product';
import Spinner from '../../components/common/spinner';
import { useState } from 'react';
import { filterShop } from '../../interfaces/filter';

const Catalogue = () => {
  const { loading, response } = useFetch<ProductListResponse>(`${process.env.REACT_APP_API_URL}/products?_limit=10`);
  const ageFilter = ['cachorros', 'adultos', 'senior'];
  const [filterSelected, setfilterSelected] = useState<filterShop>({
    agePet: ageFilter[0],
    typePet: 'DOG'
  });
  return (
    <Page color='#7AC5BE'>
      {loading
        ?
        <div className='w-full h-screen flex items-center justify-center'>
          <Spinner />
        </div>
        : (
          <>
            {/* Background */}
            <img
              src={backgroundWood}
              alt='wood-bg'
              className='object-cover h-screen absolute top-0 -z-10 md:w-screen'
              style={{ backgroundColor: '#FAD7B1' }}
            />

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

            <AnimalFilter setFilter={setfilterSelected} filter={filterSelected} />

            {/* Products */}
            <ProductsSection data={response?.products} filter={filterSelected} />

            {/* Footer */}
            <Footer />
          </>)}
    </Page>
  );
};

export default Catalogue;
