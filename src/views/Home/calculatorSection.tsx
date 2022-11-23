import { useNavigate } from 'react-router-dom';
import { useState, useCallback } from 'react';

import Button from '../../components/common/button';

import useScrolled from '../../hooks/useScrolled';
import { bannerHomeFooter, catBannerHomeFooter } from '../../assets/images';
import { useTranslation } from 'react-i18next';

export const CalculatorSection = () => {
  // Hooks
  const { t } = useTranslation();
  const [initAnimate, setInitAnimate] = useState(false);

  const minimalNavbar = useCallback(() => {
    if (screen.width < 800) return 20;

    return 1500;
  }, [screen]);

  const {
    scrolledData: { isDown },
  } = useScrolled({
    gap: minimalNavbar(),
    callback: () => setInitAnimate(isDown),
  });

  const navigate = useNavigate();

  return (
    <div className='bg-[#eecc3c] w-full'>
      <div className='rounded-t-3xl flex flex-col relative pb-[80px] lg:rounded-t-none lg:min-h-[250px] lg:max-h-[250px] lg2:min-h-[317px] lg2:max-h-[317px] xl2:min-h-[355px] xl2:max-h-[355px]'>
        <img src={bannerHomeFooter} className='hidden lg:block absolute -bottom-2' />
        <img
          src={catBannerHomeFooter}
          className='absolute bottom-0 right-0 lg:w-[23.3rem] lg:bottom-0 lg2:-bottom-3 lg2:w-[29rem] lg2:-right-1 xl2:-bottom-6 xl2:right-0'
        />
        <div
          className={`z-10 flex flex-col justify-center items-center mb-44 mt-7 gap-3 sm:mb-56 md:mb-64 lg:gap-8 lg:mb-0 lg:mt-0 lg:pt-[5rem] lg:ml-10 lg2:pt-[5.8rem] xl2:ml-16 xl2:pt-[6.5rem]
        ${initAnimate ? 'animate__zoomIn' : 'animate__zoomOut'} animate__animated
        `}
        >
          <h2 className='flex flex-col text-center leading-[1.25] text-[25px] lg2:text-[30px] xl2:text-[35px]'>
            <span>{t('homeCalcFrag1')}</span>
            <span>
              {t('homeCalcFrag2')}
              <span className='hidden lg:block'>{t('homeCalcFrag3')}</span>
            </span>
            <span className='lg:hidden'>{t('homeCalcFrag3')}</span>
          </h2>
          <Button
            className='font-sanzBold bg-white text-primary lg:text-xs lg2:text-sm xl2:text-base'
            padding='py-3 px-11'
            onClick={() => navigate('/calculadora')}
          >
            {t('homeCalcButton')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CalculatorSection;
