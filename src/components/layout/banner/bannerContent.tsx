
export const BannerContent = ({ title, text, img, showBotton }: BannerContentProps) =>
  <div className='flex flex-col w-full h-auto lg:h-full overflow-hidden sm:flex-row-reverse tall:flex-col lg:mb-4'>
    {img &&
      <div className='animation-image flex flex-shrink-0 flex-grow w-full h-full overflow-hidden sm:flex-grow-0 sm:w-1/2 tall:w-full tall:flex-grow taller:flex-grow-0 taller:h-2/3 lg:mr-[4.5rem] lg:pl-[2.8rem] lg:pt-1'>
        <img src={img} className='w-full sm:object-contain h-[265px] lg:h-full' />
      </div>
    }

    <div className='flex flex-col flex-shrink-0 px-5 w-full mt-12 justify-end md:p-5 text-center text-grayText overflow-hidden sm:justify-center sm:w-1/2 sm:pr-1 sm:pl-10 sm:pb-10 lg:py-10 lg:pl-44 tall:w-full tall:justify-center tall:items-center tall:pb-20 taller:flex-grow'>
      <h2 className='animation-title text-[19px] mb-4 font-bold sm:text-left lg:text-3xl lg:mb-8 xl2:text-4xl tall:text-center'>{title}</h2>
      <p className='animation-text font-subTitles font-semibold md:font-bold text-base mb-2 sm:text-left lg:mb-4 lg:text-[17px] xl2:text-xl tall:text-center'>{text}</p>
    </div>
  </div>;

interface BannerContentProps {
  title: string;
  text: string;
  showBotton: boolean;
  img?: string;
}

export default BannerContent;
