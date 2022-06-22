
export const BannerContent = ({ title, text, img, showBotton }: BannerContentProps) =>
  <div className='flex flex-col w-full h-auto lg:h-full overflow-hidden sm:flex-row-reverse tall:flex-col'>
    {img &&
      <div className='flex flex-shrink-0 flex-grow w-full h-full overflow-hidden sm:flex-grow-0 sm:w-1/2 tall:w-full tall:flex-grow taller:flex-grow-0 taller:h-2/3 lg:mt-5 lg:mr-8'>
        <img src={img} className='w-full sm:object-contain sm:object-right-bottom h-[265px] lg:h-full' />
      </div>
    }

    <div className='flex flex-col flex-shrink-0 px-5 w-full mt-12 justify-end md:p-5 text-center text-grayText overflow-hidden sm:justify-center sm:w-1/2 sm:pr-1 sm:pl-10 sm:pb-10 lg:py-10 lg:pl-44 tall:w-full tall:justify-center tall:items-center tall:pb-20 taller:flex-grow'>
      <h2 className='text-[19px] mb-4 font-bold sm:text-left lg:text-3xl lg:mb-8 xl2:text-4xl tall:text-center'>{title}</h2>
      <p className='font-subTitles font-semibold md:font-bold text-base mb-2 sm:text-left lg:mb-4 lg:text-[17px] xl2:text-xl tall:text-center'>{text}</p>
      {/* {showBotton && <Button className='mt-5 text-orange-200 font-bold w-full sm:w-44 sm:h-14' color='#DF2F44'>Call to Action</Button>} */}
    </div>
  </div>;

interface BannerContentProps {
  title: string;
  text: string;
  showBotton: boolean;
  img?: string;
}

export default BannerContent;
