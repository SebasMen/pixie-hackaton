import Button from '../../common/button';
import vegetables from '../../../assets/images/food.png';

export const BannerContent = ({ title, text }: BannerContentProps) => (
  <div className='flex flex-col items-center justify-center w-full h-full'>
    <img src={vegetables} className='w-full object-cover' />

    <div className='flex flex-col p-4'>
      <span className='text-2xl text-gray-600 font-bold w-full'>{title}</span>
      <p className='text-base text-gray-600 w-full'>{text}</p>

      <Button className='mt-5 text-orange-200 font-bold w-full' color='#DF2F44'>
        Call to Action
      </Button>
    </div>
  </div>
);

interface BannerContentProps {
  title: string;
  text: string;
}

export default BannerContent;
