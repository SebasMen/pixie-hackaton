import { catalogCat } from '../../assets/images';
import { cataloguePoints, cataloguePointsM } from '../../assets/vectors';

export const BannerSection = () =>
  <div className='banner relative w-full flex transform transition-all overflow-hidden pb-10 md:px-20 md:pb-0'>
    <img
      src={catalogCat}
      className={`
        absolute w-full -bottom-6 scale-150 z-0 
        sm:scale-75 sm:-bottom-32
        md:w-auto md:right-5 md:-bottom-44 md:scale-75 
        tall:scale-100 tall:-bottom-10
        lg:-bottom-24 lg:-right-14 lg:scale-[0.7]
        lg2:-right-10 lg2:-bottom-28
        2xl:scale-110 2xl:-bottom-16 2xl:right-32 
        3xl:right-44 3xl:-bottom-10 3xl:scale-100
      `}
    />
    <img
      src={cataloguePoints}
      className={`
        hidden absolute right-12 bottom-20 scale-90 z-10 
        lg:block lg:-right-3 lg:bottom-12
        lg2:-right-5 lg2:bottom-10
        3xl:scale-100 2xl:right-[20rem]
        3xl:right-32 3xl:bottom-24
      `}
    />

    <div
      className={`
          flex flex-col items-center z-20 w-full px-8 gap-4
          sm:-mt-0 sm:flex-row sm:gap-10 
          tall:flex-col tall:gap-10 tall:mt-20
          taller:gap-32
          lg:-mt-56 lg:pr-20 lg:w-1/2  
          2xl:pr-32 
          3xl:pr-40
      `}
    >
      <h1
        className={`
          text-center text-xl text-[#D9EEEF] font-bold tracking-wider
          lg:text-left lg:text-4xl
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
