import Button from '../../components/common/button';

const BannerSection = () => (
  <div className='bg-transparent banner w-full flex justify-center items-center'>
    <div className='flex flex-col text-center md:text-left md:w-1/2 md:ml-32 '>
      <span className='text-5xl font-extrabold mb-4'>Lorem Ipsum</span>
      <span className='text-xl font-bold font-subTitles mb-8 lg:pr-24'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
      <div className='flex justify-center gap-2 lg:justify-start lg:gap-6 font-subTitles'>
        <Button className='bg-transparent border text-sm border-grayText text-grayText font-bold truncate lg:py-3 lg:px-10 lg:text-base'>Tabla peso ideal perro</Button>
        <Button className='bg-transparent border text-sm border-grayText text-grayText font-bold truncate lg:py-3 lg:px-10 lg:text-base'>Tablas peso ideal gato</Button>
      </div>
    </div>
    <div className='hidden md:block md:w-1/2'></div>
  </div>
);

export default BannerSection;
