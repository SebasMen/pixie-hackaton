import { catalogCat } from '../../assets/images';
import { cataloguePoints, cataloguePointsM } from '../../assets/vectors';

export const BannerSection = () => (
  <div className='banner relative w-full flex transform transition-all overflow-hidden pb-10 md:px-20 md:pb-0 max-w-[1440px] max-h-[755px]'>
    {/* Cat */}
    <img
      src={catalogCat}
      className={`
        absolute w-full scale-150
        m-auto right-0 left-0 -bottom-5
        sm:scale-75 sm:-bottom-20
        md:-bottom-[9.5rem]
        lg:scale-[0.8] lg:-bottom-24 lg:w-auto
        lg2:scale-[0.90] lg2:-bottom-10
        xl:scale-90 xl:left-32 xl:-bottom-10
        xl2:left-24 xl2:-bottom-5 xl2:scale-100
        3xl:right-0 3xl:left-32

        tall:scale-125 tall:-bottom-20
        taller:-bottom-10
      `}
    />

    {/* Points */}
    <img
      src={cataloguePoints}
      className={`
        absolute hidden
        m-auto right-0 -left-24 bottom-8
        
        lg:block lg:scale-90
        xl:bottom-20 xl:left-0
        xl2:-left-16 xl2:bottom-24 xl2:scale-100
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
          text-center text-xl text-[#D9EEEF] font-bold tracking-wider
          lg:text-left 
          xl:text-3xl 
          xl2:text-3xl
          tall:text-3xl
        `}
      >
        <p>¿QUIÉN NO QUISIERA QUE</p>
        <p>NUESTRAS MASCOTAS</p>
        <p>DUREN MÁS?</p>
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
