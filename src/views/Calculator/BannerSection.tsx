import { bannerCalculator, bannerCalculatorMobile, bannerCalculatorResult, bannerCalculatorResultMobile } from '../../assets/images';

const BannerSection = ({ view = 3 }: BannerSectionProps) => (
  <div className='bg-transparent banner-calculator relative w-full flex flex-col items-center max-w-[1440px] max-h-[390px] lg:min-h-[320px] lg:max-h-[320px] lg2:min-h-[368px] lg2:max-h-[368px] xl2:min-h-[417px] xl2:max-h-[417px]'>
    {view !== 2 && (
      <div>
        <img src={bannerCalculatorMobile} className='absolute -bottom-1 z-20 lg:hidden animate__animated animate__bounceInDown animate__slow'/>
        <img src={bannerCalculator} className='hidden absolute -bottom-4 z-20 lg:block lg:right-[4.8%] lg:scale-75 lg:-bottom-14 lg2:right-[10.2%] lg2:scale-90 lg2:-bottom-8 xl2:right-[13.5%] animate__animated animate__bounceInDown animate__slow'/>
        <p className='flex flex-col text-xl text-center mt-6 leading-tight lg:text-[27px] lg:text-left lg:absolute lg:left-[17.8%] lg:top-[22%] lg2:left-[17.5%] lg2:top-[23%] xl2:left-[17.5%] xl2:top-[26%] xl2:text-[35px] animation-title'>
          <span>Cambia la forma en que</span>
          <span>alimentas a tu mascota,</span>
          <span className='text-primary'>comienza aquí</span>
        </p>
      </div>
    )}
    {view === 2 && (
      <div>
        <img src={bannerCalculatorResultMobile} className='absolute w-full bottom-4 md:-bottom-24 md:scale-[0.80] lg:hidden animate__animated animate__fadeInUp'/>
        <img src={bannerCalculatorResult} className='hidden absolute bottom-5 lg:block lg:right-[0.5%] lg:scale-[0.75] lg:-bottom-7 lg2:right-[4.2%] lg2:scale-90 lg2:bottom-0 xl2:right-[7.6%] xl2:scale-100 animate__animated animate__fadeInUp'/>
        <p className='flex flex-col text-[25px] text-center px-9 mt-[0.85rem] leading-tight lg:items-start lg:absolute lg:text-[34px] lg:left-[8.2%] lg:top-[20%] lg2:text-[40px] lg2:left-[9.5%] lg2:top-[18%] xl2:text-[45px] xl2:left-[9.5%] xl2:top-[21.5%] animation-title'>
          <span>¡Tu amigo de cuatro <span className='lg:hidden'>patas es único!</span> </span>
          <span className='hidden lg:block'>patas es único!</span>
        </p>
        <p className='text-sm flex flex-col text-center font-sanzBold px-9 mt-3 lg:items-start lg:absolute lg:left-[8.2%] lg:top-[55%] lg:text-base lg2:left-[9.3%] lg2:top-[52%] lg2:text-lg xl2:text-xl xl2:left-[9.5%] xl2:top-[57%] animate__animated animate__backInLeft animate__delay-3s'>
          <span>
            Por eso en Pixie tenemos más de 12 opciones para satisfacer <span className='lg:hidden'>las distintas necesidades nutricionales de cada uno.</span>
          </span>
          <span className='hidden lg:block'>
            las distintas necesidades nutricionales de cada uno.
          </span>
        </p>
      </div>
    )}
  </div>
);

interface BannerSectionProps {
  view: number;
}

export default BannerSection;
