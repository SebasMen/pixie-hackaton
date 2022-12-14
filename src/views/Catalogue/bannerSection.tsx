import { pointCatalogue } from '../../assets/vectors';
import { bannerCatalogue, bannerCatalogueMobile } from '../../assets/webP';
import { useTranslation } from 'react-i18next';

export const BannerSection = () => {
  // Hooks
  const { t } = useTranslation();

  // Component
  return (
    <div className='banner relative w-full flex transform transition-all overflow-hidden pb-10 md:pb-0 md:pt-2 max-w-[1440px] max-h-[623px] lg:max-h-[488px] lg:min-h-[488px] xl1:max-h-[570px] xl1:min-h-[570px] xl2:min-h-[640px] lg2:max-h[640px]'>
      <img
        src={bannerCatalogueMobile}
        className='absolute -bottom-5 w-full md:hidden animate__bounceInDown animate__bounceInUp animate__animated animate__slow'
      />
      <img
        src={bannerCatalogue}
        className='hidden md:block absolute bottom-0 xl2:-bottom-14 w-full animate__bounceInUp animate__animated animate__slow'
      />
      <div className='flex flex-col mt-3 ml-6 gap-4 text-white z-10 text-sm md:absolute md:left-[25%] md:top-[20%] lg:static lg:w-full lg:h-full lg:gap-8 xl2:text-base xl2:w-1/2'>
        <div className='flex gap-4 items-center lg:absolute lg:right-[18.3%] lg:top-[46.5%] lg:gap-4 xl1:gap-4 xl2:gap-5 animate__animated animate__backInLeft animate__delay-2s'>
          <img src={pointCatalogue} className='md:w-[35px]' />
          <h2>{t('catBannerItem1')}</h2>
        </div>
        <div className='flex gap-4 items-center lg:absolute lg:right-[16.3%] lg:top-[61.5%] lg:gap-4 xl1:gap-4 xl2:gap-5 animate__animated animate__backInLeft animate__delay-3s'>
          <img src={pointCatalogue} className='md:w-[35px]' />
          <div className='flex flex-col'>
            <h2>{t('catBannerItem2')}</h2>
            <h2>{t('catBannerItem2_2')}</h2>
          </div>
        </div>
        <div className='flex gap-4 items-center lg:absolute lg:right-[6.8%] lg:top-[79.5%] lg:gap-4 xl1:gap-4 xl2:gap-5 animate__animated animate__backInLeft animate__delay-4s'>
          <img src={pointCatalogue} className='md:w-[35px]' />
          <h2>{t('catBannerItem3')}</h2>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
