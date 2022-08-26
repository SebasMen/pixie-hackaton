import Button from '../../components/common/button';

const BannerSection = ({ view }: BannerSectionProps) => (
  <div className='bg-transparent banner-calculator w-full flex justify-center items-center lg:items-start max-w-[1440px] max-h-[755px]'>
    <div
      className={`
        flex flex-col justify-end pb-[3.75rem] text-center w-full h-full 
        md:pb-5 md:text-left md:ml-10 md:justify-center 
        lg:pb-0 lg:ml-36 
        xl:ml-32
        xl2:w-2/3 
        2xl:w-1/2
      `}
    >
      {view === 0 && (
        <div className='flex flex-col w-full px-10 text-xl font-extrabold md:truncate md:pl-0 md:text-3xl lg:text-[35px] lg:mb-[5.8rem]'>
          <span className='leading-6 md:leading-10'>Cambiar la forma en que</span>
          <span className='leading-6 md:leading-10'>alimentas a tu mascota</span>
          <span className='leading-6 md:leading-10'>comienza aquí</span>
        </div>
      )}
      {view === 1 && (
        <div className='px-10 flex flex-col w-full'>
          <span className='text-[45px] font-extrabold mb-4 md:truncate '>Calcula tu ración</span>
          <span className='text-xl font-bold font-subTitles mb-8'>Cada metabolismo es diferente por eso queremos conocerte para recomendarte el Pixie ideal.</span>
        </div>
      )
      }
      {view === 2 && (
        <div className='px-10 h-full w-full flex flex-col justify-end md:justify-center'>
          <span className='text-4xl font-extrabold mb-4 md:mb-2 lg:mb-4 lg:text-[45px]'>¡Tu amigo de cuatro patas es único!</span>
          <span className='w-full text-xl font-bold font-subTitles lg:mb-8 lg:pr-24'>Por eso en Pixie tenemos más de 12 opciones para satisfacer las distintas necesidades nutricionales de cada uno.</span>
          <div className='flex justify-center gap-2 pb-5 pt-2 lg:pt-0 lg:pb-0 md:justify-start lg:gap-6 font-subTitles'>
            <Button padding='px-2 md:py-3 md:px-10' className='bg-transparent border text-sm border-grayText text-grayText font-bold truncate h-8 md:h-auto lg:text-base'>Tabla peso ideal perro</Button>
            <Button padding='px-2 md:py-3 md:px-10' className='bg-transparent border text-sm border-grayText text-grayText font-bold truncate h-8 md:h-auto lg:text-base'>Tabla peso ideal gato</Button>
          </div>
        </div>
      )}
    </div>
    <div className='hidden md:block md:w-1/2'></div>
  </div>
);

interface BannerSectionProps {
  view: number;
}

export default BannerSection;
