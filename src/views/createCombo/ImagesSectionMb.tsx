import Carrousel from '../../components/common/carrousel';
import Icon from '../../components/common/icon';

const ImagesSectionMb = () => {
  const arrayUrlImages: string[] = [
    'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQajALs5s0HofKr3nEvNZrivVVkAA0uKpv1wkU_DiSNtPsMRhxaLfXFBD4AJfTHq6odYwkRwa-rFcH4QPhLowxHCeH6KZEq5LPX9rk5qoW4&usqp=CAE',
  ];

  return (
    <div className='flex flex-col w-full overflow-hidden h-full px-7 md:w-2/3 md:px-0 lg:hidden'>
      <Carrousel bulletsDirection='vertical' className='flex-grow flex-shrink-0 max-w-xs' slidesPerView={1} centeredSlides={false} spaceBetween={0} >
        {arrayUrlImages[0] === '' ?
          <div className='flex w-full h-full items-center justify-center bg-gray-100'>
            <Icon name='landscape' className='text-gray-500' size='3xl' />
          </div>
          :
          arrayUrlImages.map(image =>
            <div key={image} className='flex w-full h-full items-center justify-center bg-gray-100'>
              <img src={image} className='w-[319px] h-[319px] object-contain'/>
            </div>
          )
        }
      </Carrousel >
    </div>
  );
};

export default ImagesSectionMb;
