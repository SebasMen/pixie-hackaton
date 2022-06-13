import Button from '../../common/button';
import vegetables from '../../../assets/images/food.png';

export const BannerContent = ({ title, text, showBotton }: BannerContentProps) =>
  <div className='flex flex-col w-full h-full overflow-hidden sm:flex-row-reverse tall:flex-col'>
    <div className='flex flex-shrink-0 flex-grow w-full overflow-hidden sm:flex-grow-0 sm:w-1/2 lg:w-2/3 tall:w-full tall:flex-grow taller:flex-grow-0 taller:h-2/3'>
      <img src={vegetables} className='w-full h-full object-cover sm:object-contain sm:object-right-bottom' />
    </div>

    <div className='flex flex-col flex-shrink-0 w-full justify-end p-5 text-center text-gray-600 overflow-hidden sm:justify-center sm:w-1/2 sm:pr-1 sm:pl-10 sm:pb-10 lg:py-10 lg:pl-24 lg:w-1/3 tall:w-full tall:justify-center tall:items-center tall:pb-20 taller:flex-grow'>
      <h2 className='text-2xl font-bold sm:text-left lg:text-5xl lg:mb-8 tall:text-center'>{title}</h2>
      <p className='text-base sm:text-left lg:mb-4 lg:text-xl tall:text-center font-subTitles'>{text}</p>
      {showBotton && <Button className='mt-5 text-orange-200 font-bold w-full sm:w-44 sm:h-14' color='#DF2F44'>Call to Action</Button>}
    </div>
  </div>;

interface BannerContentProps {
  title: string;
  text: string;
  showBotton: boolean;
}

export default BannerContent;
