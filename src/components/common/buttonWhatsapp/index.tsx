import { useState } from 'react';
import { hoverButtonWhatsapp } from '../../../assets/json';
import { dog } from '../../../assets/vectors';
import { useAppContext } from '../../../hooks';
import IconButton from '../iconButton';
import Lottie from 'lottie-react';

const ButtonWhatsap = () => {
  const [hover, setHover] = useState(false);
  const { marginWhatsApp } = useAppContext();

  return (
    <>
      {hover
        ?
        <a href='https://wa.me/5215513070792' target='_blank' rel='noopener noreferrer'>
          <Lottie animationData={hoverButtonWhatsapp} loop={true}
            className={`${marginWhatsApp ? ' md:right-[25rem]' : 'md:right-[1.10rem] '} fixed bottom-5 z-50 p-1 pt-1.5 pl-1.5 text-white md:bottom-[51%]`}
            onMouseLeave={() => setHover(!hover)}
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
