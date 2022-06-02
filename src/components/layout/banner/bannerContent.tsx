import Button from '../../common/button';
import vegetables from '../../../assets/images/food.png';

export const BannerContent = ({ title, text, showBotton }: BannerContentProps) => (
  <div className='flex flex-col items-center justify-center w-full h-full overflow-hidden md:flex-row-reverse '>
    <div className='hidden w-2/3 md:block' />
    <img src={vegetables} className='flex-shrink-0 md:absolute md:bottom-0 md:right-0  md:w-2/3 md:h-full lg:right-4 lg:-bottom-7 -z-10' />

    <div className='flex-shrink-0 flex flex-col p-4 md:pb-8 md:ml-10 lg:pb-4 lg:ml-32 md:w-1/2 z-10'>
      <span className='text-2xl text-gray-600 font-bold w-full lg:text-5xl md:mb-8'>{title}</span>
      <p className='text-base text-gray-600 w-full lg:text-xl'>{text}</p>
      {showBotton && (<Button className='mt-5 text-orange-200 font-bold w-full md:w-44 md:h-14' color='#DF2F44'>
        Call to Action
      </Button>)}
    </div>
  </div>
);

interface BannerContentProps {
  title: string;
  text: string;
  showBotton: boolean;
}

export default BannerContent;
