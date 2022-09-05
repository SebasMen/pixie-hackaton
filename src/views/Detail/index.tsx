import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../hooks';

import Page from '../../components/layout/page';
import Button from '../../components/common/button';
import Footer from '../../components/layout/footer';

import BannerDetail from './bannerDetail';
import NutritionSection from './NutritionSection';
import InfoAccordion from './InfoAccordion';
import InfoSection from './InfoSection';
import BannerDetailDT from './BannerDetailDT';
import ExtraInfoContainer from './ExtraInfoContainer';

import { capitalize } from '../../helpers/capitalize';
import { organizeAttributes, organizeIngredients } from '../../helpers/detailHelper';

import { backArrow } from '../../assets/vectors';
import '../../styles/banner.css';
import ButtonWhatsap from '../../components/common/buttonWhatsapp';

const Detail = () => {
  // Hooks
  const { productView, updateContext } = useAppContext();
  const [showFooter, setShowFooter] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (screen.width < 800) {
      updateContext(old => ({ ...old, showNavbar: false }));
      setShowFooter(false);
    } else
      updateContext(old => ({ ...old, showNavbar: true }));
  }, [screen.width]);

  // Component
  return (
    <Page className={`${!showFooter && 'mb-14'}`}>
      <div className='lg:px-[123px] max-w-[1440px]'>
        <div className='md:hidden px-7 mt-7 mb'>
          <img src={backArrow} onClick={() => navigate(-1)} />
        </div>
        <div className='flex flex-col w-full flex-shrink-0 overflow-hidden'>
          <p className='hidden md:mt-3 md:mb-1 md:block text-fourth font-sanzBold text-sm lg:mb-9'>
            <span onClick={() => navigate('/catalogue')} className='cursor-pointer'>Catálogo &gt; </span>
            {capitalize(productView.name)}
          </p>
          <div className='w-full flex-grow flex flex-col flex-shrink-0 md:flex-row md:pb-10 md:gap-1'>
            {/* Banner Detail to mobile */}
            <BannerDetail product={productView} />
            {/* Banner Detail to desktop */}
            <BannerDetailDT />
            <InfoSection product={productView} attributes={organizeAttributes(productView.atributos)} />
          </div>
        </div>

        {/* Calculator */}
        <div className='flex mx-7 mt-5 md:hidden gap-5 text-sm font-subTitles'>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
          <Button className='ring-1 ring-primary text-primary rounded-full font-bold' onClick={() => navigate('/calculator')}>Calculadora</Button>
        </div>

        {/* Nutrition */}
        <NutritionSection ingredients={organizeIngredients(productView.ingredients)} />

        <ExtraInfoContainer product={productView} />

        {/* FAB */}
        <ButtonWhatsap />
      </div>
      {/* Other Info */}
      <InfoAccordion product={productView} />
      {/* Footer */}
      {showFooter &&
        <Footer className='md:mt-16' />
      }
    </Page >
  );
};

export default Detail;
