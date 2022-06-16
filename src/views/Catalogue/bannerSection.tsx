import { catalogCat } from '../../assets/images';
import { cataloguePoints, cataloguePointsM } from '../../assets/vectors';

export const BannerSection = () =>
  <div className='banner relative w-full flex transform transition-all overflow-hidden pb-10 md:px-20 md:pb-0'>
    {/* Cat */}
    <img
      src={catalogCat}
      /// className={`
      //   absolute w-full scale-150
      //   m-auto right-0 left-0 -bottom-5
      //   sm:scale-75 sm:-bottom-20
      //   md:-bottom-[9.5rem]
      //   lg:scale-[0.8] lg:-bottom-20 lg:w-auto
      //   xl:scale-90 xl:left-32 xl:-bottom-10
      //   xl2:left-24 xl2:-bottom-5 xl2:scale-100
      //   3xl:right-0 3xl:left-32

      //   tall:scale-125 tall:-bottom-20
      //   taller:-bottom-10
      // `}
      className={`
        absolute w-full -bottom-6 scale-150 z-0
        sm:scale-75 sm:-bottom-32
        md:w-auto md:right-5 md:-bottom-44 md:scale-75
        tall:scale-100 tall:-bottom-10
        lg:-bottom-24 lg:-right-14 lg:scale-[0.7]
        lg2:-right-5 lg2:-bottom-28 lg2:scale-75
        xl1:scale-95 xl1:-bottom-10 xl1:right-12
        xl2:right-24
        2xl:scale-100 2xl:-bottom-16 2xl1:right-0 2xl1:left-0 2xl1:m-auto
        3xl:right-80 3xl:-bottom-10 3xl:scale-100
      `}
    />

    {/* Points */}
    <img
      src={cataloguePoints}
      className={`
        hidden absolute right-12 bottom-20 scale-90 z-10 
        lg:block lg:-right-3 lg:bottom-12
        lg2:-right-5 lg2:bottom-10
        xl1:bottom-20 xl1:right-9 xl1:scale-90
        xl2:right-20
        2xl:scale-100 2xl:right-[20rem]
        3xl:right-[18.5rem] 3xl:bottom-22 3xl:scale-100
      `}
    />

    {/* Text */}
    <div
      className={`
          flex flex-col items-center z-20 w-full px-8 gap-4
          sm:-mt-0 sm:flex-row sm:gap-10 
          lg:-mt-56 lg:pr-20 lg:w-1/2  
          xl:pl-0 xl:-mt-96
          2xl:pr-32 
          3xl:pr-40

          tall:flex-col tall:gap-10 tall:mt-20
          taller:gap-32
      `}
    >
      <h1
        className={`
          text-center text-xl text-[#D9EEEF] font-bold tracking-wider
          lg:text-left 
          xl:text-3xl 
          xl2:text-3xl
          tall:text-3xl
        `}
      >
        ¿QUIÉN NO QUISIERA QUE NUESTRAS MASCOTAS DUREN MÁS?
      </h1>
      <img
        src={cataloguePointsM}
        className={`
          block
          lg:hidden
          tall:w-4/5
        `}
      />
    </div>
  </div>;

export default BannerSection;
