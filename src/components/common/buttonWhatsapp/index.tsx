import { useState } from 'react';
import { hoverButtonWhatsapp } from '../../../assets/gifts';
import { dog } from '../../../assets/vectors';
import { useAppContext } from '../../../hooks';
import IconButton from '../iconButton';

const ButtonWhatsap = () => {
  const [hover, setHover] = useState(false);
  const { marginWhatsApp } = useAppContext();

  return (
    <>
      {hover
        ?
        <a href='https://wa.me/573112356014' target='_blank' rel='noopener noreferrer'>
          <IconButton
            className={`${marginWhatsApp ? ' md:right-[25rem]' : 'md:right-[1.10rem] '} fixed bottom-5 z-50 p-1 pt-1.5 pl-1.5 text-white md:bottom-[51%]`}
            name='DogButtonHover'
            img={hoverButtonWhatsapp}
            sizeContainer={'w-[67px] h-[67px] md:w-[90px] md:h-[110px]'}
            onClick={() => {}}
            onMouseLeave={() => setHover(!hover)}
            shadow={false}
          />
        </a>
        :
        <IconButton
          className={`${marginWhatsApp ? 'animation-buttonWhatsapp md:right-[25rem]' : 'md:right-6 animate__animated animate__bounceInRight'} fixed bottom-5 z-50 p-1 pt-1.5 pl-1.5 text-white md:bottom-[53%]`}
          color='#DF2F44'
          name='DogButton'
          img={dog}
          sizeContainer={'w-[67px] h-[67px] md:w-[75px] md:h-[75px]'}
          onClick={() => {}}
          onMouseOver={() => setHover(!hover)}
        />
      }
    </>
  );
};

export default ButtonWhatsap;
