import Carrousel from '../../components/common/carrousel';
import Icon from '../../components/common/icon';
import { Product } from '../../interfaces/product';

const BannerDetail = ({ product } : BannerDetailProps) => (
  <div className='flex flex-col w-full overflow-hidden h-full px-7 md:w-2/3 md:px-0 lg:hidden'>
    <Carrousel bulletsDirection='vertical' className='flex-grow flex-shrink-0' slidesPerView={1} centeredSlides={false} spaceBetween={0} >
      <div className='flex w-full h-full items-center justify-center bg-gray-100'>
        <img src={product?.url_image} className='w-96 h-96'/>
      </div>
      <div className='flex w-full h-full items-center justify-center bg-gray-100'>
        <Icon name='landscape' className='text-gray-500' size='3xl' />
      </div>
    </Carrousel >
  </div>
);

interface BannerDetailProps{
  product: Product
}

export default BannerDetail;
