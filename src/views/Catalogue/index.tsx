import { useState } from 'react';

// Components
import Page from '../../components/layout/page';
import Footer from '../../components/layout/footer';
import IconButton from '../../components/common/iconButton';
import AnimalFilter from '../../components/common/animalFilter';
import ProductsSection from './productsSection';
import Spinner from '../../components/common/spinner';
import BannerSection from './bannerSection';

import { dog } from '../../assets/vectors';

import { ProductListResponse } from '../../interfaces/product';
import { filterShop } from '../../interfaces/filter';
import { useFetch } from '../../hooks';

const Catalogue = () => {
  const { loading, response } = useFetch<ProductListResponse>(`${process.env.REACT_APP_API_URL}/products?_limit=10`);
  const ageFilter = ['cachorros', 'adultos', 'senior'];
  const [filterSelected, setfilterSelected] = useState<filterShop>({
    agePet: 'none',
    typePet: 'none'
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
            {/* Banner */}
            <BannerSection />

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
