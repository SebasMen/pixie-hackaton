import Carrousel from '../../components/common/carrousel';
import Icon from '../../components/common/icon';

const BannerDetail = () => (
  <div className='flex flex-col w-full overflow-hidden h-full px-7 md:w-2/3 md:px-0'>
    <Carrousel bulletsDirection='vertical' className='flex-grow flex-shrink-0' slidesPerView={1} centeredSlides={false} spaceBetween={0} >
      <div className='flex w-full h-full items-center justify-center bg-gray-100'>
        <Icon name='landscape' className='text-gray-500' size='3xl' />
      </div>
      <div className='flex w-full h-full items-center justify-center bg-gray-100'>
        <Icon name='landscape' className='text-gray-500' size='3xl' />
      </div>
    </Carrousel >
  </div>
);

export default BannerDetail;
