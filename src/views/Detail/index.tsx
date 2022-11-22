import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

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
import { infoSelectSPandEn, Product } from '../../interfaces/product';
import { useLoading } from '../../hooks/useLoading';
import { useTranslation } from 'react-i18next';

const Detail = () => {
  // Hooks
  const { t } = useTranslation();
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product>();
  const [allIngredients, setallIngredients] = useState<infoSelectSPandEn[]>();
  const { loadingDeterminate } = useLoading();
  const { product } = params;
  const [showFooter, setShowFooter] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (screen.width < 800) setShowFooter(false);
  }, [screen.width]);

  // Show loading
  useEffect(() => {
    loadingDeterminate(loading);
  }, [loading]);

  useEffect(() => {
    productService.getIngredients().then(res => {
      setallIngredients(res);
    }).catch(err => {
      console.log(err);
    });

    return () => {};
  }, []);

  useEffect(() => {
    productService.getOneProductByKey(product, false).then(res => {
      setProducts(res);
      setLoading(false);
    }).catch(error => {
      console.log(error);
    });
    return () => {};
  }, [location]);

  // Component
  return (
    <Page className={`${!showFooter && 'mb-14'}`}>
      {(products && allIngredients) && (
        <div>
          <div className='lg:px-[123px] max-w-[1440px] mt-6'>
            <div className='md:hidden px-7 mt-7 mb'>
              <img src={backArrow} onClick={() => navigate(-1)} />
            </div>
            <div className='flex flex-col w-full flex-shrink-0 overflow-hidden'>
              <p className='hidden md:mt-3 md:mb-1 md:block text-fourth font-sanzBold text-sm lg:mb-9'>
                <span onClick={() => navigate('/catalogo')} className='cursor-pointer'>
                  Catálogo &gt;{' '}
                </span>
                {capitalize(products.name)}
              </p>
              <div className='w-full flex-grow flex flex-col flex-shrink-0 md:flex-row md:pb-10 md:gap-1'>
                {/* Banner Detail to mobile */}
                <BannerDetail product={products} />
                {/* Banner Detail to desktop */}
                <BannerDetailDT product={products} />
                <InfoSection product={products} attributes={organizeAttributes(products.atributos)} />
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
            <NutritionSection ingredients={organizeIngredients(products.ingredients, allIngredients)} />

            <ExtraInfoContainer product={products} />

            {/* FAB */}
            {showFooter && <ButtonWhatsap />}
          </div>
          {/* Other Info */}
          <InfoAccordion product={products} />
          {/* Footer */}
          {showFooter && <Footer className='md:mt-16' />}
        </div>
      )}
    </Page>
  );
};

export default Detail;
