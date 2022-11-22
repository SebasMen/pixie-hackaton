import { useState } from 'react';
import { notImage } from '../../assets/vectors/index';
import MiniImageDT from '../../components/common/miniImagenDT/MiniImageDT';

const ImageSection = () => {
  // Hooks
  const [image, setImage] = useState(0);
  const arrayUrlImages = [
    'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQajALs5s0HofKr3nEvNZrivVVkAA0uKpv1wkU_DiSNtPsMRhxaLfXFBD4AJfTHq6odYwkRwa-rFcH4QPhLowxHCeH6KZEq5LPX9rk5qoW4&usqp=CAE',
    'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRxW5xqKfHbd5xAcj24DfE3GX_uu2pL8ey0FcQ0QhPvHE4FXiE4syDuO7Y4QcmYQL6Pnz9s0Vcr_F1lqJFGrTX4CqpH2xyT1ACtVy6uAZyx_xcjJxMzzjOw&usqp=CAE'
  ];

  return (
    <div className='hidden lg:flex w-full overflow-hidden lg:h-full md:w-[63%] '>
      <div className='flex flex-col w-1/5 items-start'>
        {arrayUrlImages.map((url, index) => index < 3 ? (
          <MiniImageDT key={url} src={url} handleChangeImage={setImage} index={index}/>
        )
          : '')}
      </div>
      {arrayUrlImages[0] === ''
        ?
        <div className='flex w-3/5 justify-center'>
          <div>
            <img src={notImage} className='w-[529px] h-[446px]'/>
          </div>
        </div>
        :
        <div className='flex w-3/4 justify-center'>
          <div>
            <img src={arrayUrlImages[image]} className='w-[529px] h-[446px] object-contain'/>
          </div>
        </div>
      }
    </div>
  );
};

export default ImageSection;
