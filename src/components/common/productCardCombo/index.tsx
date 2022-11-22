import IconButton from '../iconButton';
import Tag from './tag';

import { tagDogGray, notImage } from '../../../assets/vectors/index';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ProductCardCombo = () => {
  const [showHoverComingSoon, setShowHoverComingSoon] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className={`
          relative flex flex-col flex-shrink-0 justify-between items-center
          h-[15.5rem] smaller:w-48 w-40 md:w-[16.815rem] md:h-[380px]
          2xl1:w-[19.815rem] 2xl1:h-[414px]
        `}
      onClick={() => navigate('/producto/crear/combo')}
    >
      <div
        className={`
          relative flex flex-col flex-shrink-0 justify-between items-center 
          cursor-pointer p-3 pb-8 rounded-2xl bg-white
          ring-0 ring-pixieLightBlue transform transition-all 
          w-full h-full lg:pb-11 hover:ring-1 
        `}
        onMouseOver={() => setShowHoverComingSoon(true)}
        onMouseLeave={() => setShowHoverComingSoon(false)}
      >
        <div className='flex justify-between w-full mb-2 relative z-30'>
          <div className='flex items-start justify-center gap-1 absolute left-1 pr-9'>
            <Tag name='adultos' className='w-full' sizeTags={1} />
          </div>
          <IconButton.mini
            img={tagDogGray}
            name={'combo-tag-combo'}
            className='text-pixieLightBlue p-1 shadow-none md:mr-1 absolute right-0 md:right-1 w-full h-full bg-[#F7EBA8]'
            imgClassName='brightness-[0.30] opacity-80'
            onClick={() => {}}
          />
        </div>
        <div className='flex-grow overflow-hidden rounded-md'>
          <img src={notImage} className='w-24 h-24 md:w-36 md:h-36' />
        </div>
        <div className={'text-center text-xs md:text-lg w-full'}>
          <h4 className='text-pixieLightBlue mb-1'>
            Caja x20 rollos diferentes sabores
          </h4>
        </div>
      </div>
      <div
        className={`
          absolute -bottom-[1rem] text-[#FAD7B1] z-40 rounded-[10px] bg-primary shadow-md
          text-[10px] md:text-xs px-3 py-2 md:px-5 md:md:py-4 
          ${showHoverComingSoon ? 'ring-1 ring-pixieLightBlue' : 'ring-0'}
        `}
      >
        <span>Armar</span>
      </div>
    </div>
  );
};

export default ProductCardCombo;
