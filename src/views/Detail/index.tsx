import Page from '../../components/layout/page';
import Button from '../../components/common/button';
import Footer from '../../components/layout/footer';

import BannerDetail from './bannerDetail';
import NutritionSection from './NutritionSection';
import InfoAccordion from './InfoAccordion';
import InfoSection from './InfoSection';

import '../../styles/banner.css';
import ExtraInfoContainer from './ExtraInfoContainer';

// DBFake
import { ingredients } from '../../@fake/detailFake';
import BannerDetailDT from './BannerDetailDT';
import { useState } from 'react';
import { Product } from '../../interfaces/product';
import { useAppContext } from '../../hooks';

const Detail = () => {
  // Hooks
  /// const { id } = useParams();
  // Hooks
  const { productView } = useAppContext();
  const [product, setproduct] = useState<Product>({ ...productView, quantitySold: 1, totalPrice: productView.price });

  // Component
  return (
    <Page>
      <div className='flex flex-col w-full xl:h-screen flex-shrink-0 overflow-hidden productBanner'>
        <p className='hidden md:pt-10 md:mb-1 md:pl-24 md:block text-fourth font-paragraph text-sm'>{'Catálogo > '} {product.name}</p>
        <div className='w-full flex-grow flex flex-col flex-shrink-0 md:flex-row md:px-24 md:pb-10 md:gap-16'>
          {/* Banner Detail to mobile */}
          <BannerDetail product={product} />
          {/* Banner Detail to desktop */}
          <BannerDetailDT />
          <InfoSection product={product} setproduct={setproduct}/>
        </div>
      </div>

      {/* Calculator */}
      <div className='flex mx-3 mt-5 md:hidden md:px-24 gap-5'>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
        <Button className='ring-2 ring-red-600 text-red-500 rounded-full'>Calculadora</Button>
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
