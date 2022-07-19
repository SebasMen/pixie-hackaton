import { catalogCat, catalogCatMobile } from '../../assets/images';
import { cataloguePoints, cataloguePointsM } from '../../assets/vectors';

export const BannerSection = () => (
  <div className='banner relative w-full flex transform transition-all overflow-hidden pb-10 md:px-[3.2rem] md:pb-0 md:pt-2 max-w-[1440px]  max-h-[755px]'>
    {/* Cat */}
    <img
      src={catalogCat}
      className={`
      animation-image-cat
        hidden
        absolute w-full scale-150
        m-auto right-0 left-0 -bottom-5
        sm:scale-75 sm:-bottom-20 sm:block
        md:-bottom-[9.5rem] 
        lg:scale-[0.8] lg:-bottom-24 lg:w-auto
        lg2:scale-[0.90] lg2:-bottom-10
        xl:scale-90 xl:left-32 xl:-bottom-10
        xl2:left-56 xl2:-bottom-[1.8rem] xl2:scale-100
        3xl:right-0 3xl:left-32

        tall:scale-125 tall:-bottom-20
        taller:-bottom-10
      `}
    />
    <img
      src={catalogCatMobile}
      className={`
      animation-image-cat
      absolute w-full scale-90
      m-auto right-0 left-0 -bottom-36
      md:hidden
      `}
    />

    {/* Points */}
    <img
      src={cataloguePoints}
      className={`
      animation-image-point
        absolute hidden
        m-auto right-0 -left-24 bottom-8
        lg:block lg:scale-90
        xl:bottom-20 xl:left-0
        xl2:left-[3.4rem] xl2:bottom-[6.2rem] xl2:scale-100
        3xl:-left-6
      `}
    />

    {/* Text */}
    <div
      className={`
          flex flex-col items-center z-20 w-full px-8 gap-4
          sm:-mt-0 sm:flex-row sm:gap-10 md:px-0
          lg:-mt-56 lg:w-1/2  
          xl:pl-0 xl:-mt-96

          tall:flex-col tall:gap-10 tall:mt-20
          taller:gap-32
      `}
    >
      <div
        className={`
          text-center text-xl text-[#D9EEEF] font-bold tracking-normal pt-2
          lg:text-left lg:pt-0
          xl:text-3xl  xl:pt-0
          xl2:text-[35px]  xl2:pt-0
          tall:text-3xl  tall:pt-0
        `}
      >
        <p className='animation-text lg:leading-[2.6rem]'>¿QUIÉN NO QUISIERA QUE</p>
        <p className='animation-text lg:leading-[2.6rem]'>NUESTRAS MASCOTAS</p>
        <p className='animation-text lg:leading-[2.6rem]'>DUREN MÁS?</p>
      </div>
      <img
        src={cataloguePointsM}
        className={`
          block
          lg:hidden
          tall:w-4/5
        `}
      />
    </div>
  </div>
);

export default BannerSection;
