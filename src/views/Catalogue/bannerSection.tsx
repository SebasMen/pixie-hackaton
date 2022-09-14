import {bannerCatalogue, bannerCatalogueMobile } from '../../assets/images';
import { pointCatalogue } from '../../assets/vectors';

export const BannerSection = () => (
  <div className='banner relative w-full flex transform transition-all overflow-hidden pb-10 md:pb-0 md:pt-2 max-w-[1440px] max-h-[623px] lg:max-h-[488px] lg:min-h-[488px] xl1:max-h-[570px] xl1:min-h-[570px] xl2:min-h-[640px] lg2:max-h[640px]'>
    <img src={bannerCatalogueMobile} className='absolute -bottom-5 w-full md:hidden'/>
    <img src={bannerCatalogue} className='hidden md:block absolute bottom-0 xl2:-bottom-14 w-full'/>
    <div className='flex flex-col mt-3 ml-6 gap-4 text-white z-10 text-sm md:absolute md:left-[25%] md:top-[20%] lg:static lg:w-full lg:h-full lg:gap-8 xl2:text-base xl2:w-1/2'>
      <div className='flex gap-4 items-center lg:absolute lg:right-[18.3%] lg:top-[46.5%] lg:gap-4 xl1:gap-4 xl2:gap-5'>
        <img src={pointCatalogue} className='md:w-[35px]'/>
        <span>Condición de piel y pelaje más suaves.</span>
      </div>
      <div className='flex gap-4 items-center lg:absolute lg:right-[16.3%] lg:top-[61.5%] lg:gap-4 xl1:gap-4 xl2:gap-5'>
        <img src={pointCatalogue} className='md:w-[35px]'/>
        <p className='flex flex-col'>
          <span>Ayuda a la digestión y tránsito</span>
          <span>gastrointestinal.</span>
        </p>
      </div>
      <div className='flex gap-4 items-center lg:absolute lg:right-[6.8%] lg:top-[79.5%] lg:gap-4 xl1:gap-4 xl2:gap-5'>
        <img src={pointCatalogue} className='md:w-[35px]'/>
        <span>Fortalecimiento del sistema inmune.</span>
      </div>
    </div>
  </div>
);

export default BannerSection;
