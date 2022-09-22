import { useNavigate } from 'react-router-dom';
import { useState, useCallback } from 'react';

import Button from '../../components/common/button';

import useScrolled from '../../hooks/useScrolled';
import { bannerHomeFooter, catBannerHomeFooter } from '../../assets/images';

export const CalculatorSection = () => {
  // Hooks
  const [initAnimate, setInitAnimate] = useState(false);

  const minimalNavbar = useCallback(
    () => {
      if (screen.width < 800)
        return 20;

      return 1500;
    },
    [screen],
  );

  const {
    scrolledData: { isDown },
  } = useScrolled({
    gap: minimalNavbar(),
    callback: () => setInitAnimate(isDown)
  });

  const navigate = useNavigate();
  return (
    <div className='relative bg-[#E8C433] bg-opacity-80 flex rounded-t-3xl flex-col w-full max-w-[1440px] pb-[80px] lg:bg-opacity-0 lg:rounded-t-none lg:min-h-[250px] lg:max-h-[250px] lg2:min-h-[317px] lg2:max-h-[317px] xl2:min-h-[355px] xl2:max-h-[355px]'>
      <img src={bannerHomeFooter} className='hidden lg:block absolute -bottom-2'/>
      <img src={catBannerHomeFooter} className='absolute bottom-0 right-0 lg:w-[23.3rem] lg:bottom-0 lg2:-bottom-3 lg2:w-[29rem] lg2:-right-1 xl2:-bottom-6 xl2:right-0'/>
      <div className={`z-10 flex flex-col justify-center items-center mb-44 mt-7 gap-3 sm:mb-56 md:mb-64 lg:gap-8 lg:mb-0 lg:mt-0 lg:pt-[5rem] lg:ml-10 lg2:pt-[5.8rem] xl2:ml-16 xl2:pt-[6.5rem]
       ${initAnimate ? 'animate__zoomIn' : 'animate__zoomOut'} animate__animated
      `}>
        <p className='flex flex-col text-center leading-[1.25] text-[25px] lg2:text-[30px] xl2:text-[35px]'>
          <span>¿Cuál es el Pixie ideal</span>
          <span>
            para mi perrito o<span className='hidden lg:block'>michi?</span>
          </span>
          <span className='lg:hidden'>michi?</span>
        </p>
        <Button className='font-sanzBold bg-white text-primary lg:text-xs lg2:text-sm xl2:text-base'
          padding='py-3 px-11'
          onClick={() => navigate('/calculator')}
        >
          Calcúlalo aquí
        </Button>
      </div>
    </div>
  );
};

export default CalculatorSection;
