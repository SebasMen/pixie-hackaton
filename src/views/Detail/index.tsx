import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFetch } from '../../hooks';

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
import productService from '../../services/productService';
import { Product } from '../../interfaces/product';
import { useLoading } from '../../hooks/useLoading';
import { useTranslation } from 'react-i18next';

const Detail = () => {
  // Hooks
  const { t } = useTranslation();
  const params = useParams();
  const { loadingDeterminate } = useLoading();
  const { product } = params;
  const getOneProduct = useCallback(
    () => productService.getOneProductByKey(product),
    [product],
  );
  const { loading, response } = useFetch<Product>(getOneProduct);
  const [showFooter, setShowFooter] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (screen.width < 800) setShowFooter(false);
  }, [screen.width]);

  // Show loading
  useEffect(() => {
    loadingDeterminate(loading);
  }, [loading]);

  // Component
  return (
    <Page className={`${!showFooter && 'mb-14'}`}>
      {response && (
        <div>
          <div className='lg:px-[123px] max-w-[1440px]'>
            <div className='md:hidden px-7 mt-7 mb'>
              <img src={backArrow} onClick={() => navigate(-1)} />
            </div>
            <div className='flex flex-col w-full flex-shrink-0 overflow-hidden'>
              <p className='hidden md:mt-3 md:mb-1 md:block text-fourth font-sanzBold text-sm lg:mb-9'>
                <span onClick={() => navigate('/catalogo')} className='cursor-pointer'>
                  Catálogo &gt;{' '}
                </span>
                {capitalize(response.name)}
              </p>
              <div className='w-full flex-grow flex flex-col flex-shrink-0 md:flex-row md:pb-10 md:gap-1'>
                {/* Banner Detail to mobile */}
                <BannerDetail product={response} />
                {/* Banner Detail to desktop */}
                <BannerDetailDT product={response} />
                <InfoSection product={response} attributes={organizeAttributes(response.atributos)} />
              </div>
            </div>
            {/* Calculator */}
            <div className='flex mx-7 mt-5 md:hidden gap-5 text-sm font-subTitles'>
              <span>{t('productsCalcText')}</span>
              <Button
                className='ring-1 ring-primary text-primary rounded-full font-bold'
                onClick={() => navigate('/calculadora')}
              >
                {t('productsCalcButton')}
              </Button>
            </div>

            {/* Nutrition */}
            <NutritionSection ingredients={organizeIngredients(response.ingredients)} />

            <ExtraInfoContainer product={response} />

            {/* FAB */}
            {showFooter && <ButtonWhatsap />}
          </div>
          {/* Other Info */}
          <InfoAccordion product={response} />
          {/* Footer */}
          {showFooter && <Footer className='md:mt-16' />}
        </div>
      )}
    </Page>
  );
};

export default Detail;
