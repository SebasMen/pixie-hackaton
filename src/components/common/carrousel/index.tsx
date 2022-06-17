import React, { useState } from 'react';

import { Swiper, SwiperSlide, SwiperProps, useSwiper } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

import IconButton from '../iconButton';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../../styles/carrousel.css';

export const Carrousel = ({
  children,
  className,
  slidesPerView = 1.25,
  spaceBetween = 25,
  bulletsDirection = 'horizontal',
  breakpoints,
  centeredSlides = true,
  bulletClassName,
  navigation = false,
  onSlideChange = () => { },
}: CarrouselProps) => {
  // Hooks
  const swiperType = useSwiper();
  const [swiper, setSwiper] = useState<typeof swiperType>();

  // Handlers
  const swipeTo = (index: number) => {
    if (!swiper) return;

    if (index < 0) index = 0;
    else if (index > swiper.slides.length - 1) index = swiper.slides.length - 1;

    swiper.slideTo(index);
  };

  // Component
  return (
    <div className='w-full relative rounded-lg'>
      {/* Slider */}
      <Swiper
        className={'w-full rounded-lg relative ' + className}
        centeredSlides={centeredSlides}
        draggable
        onSwiper={setSwiper}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        onSlideChange={onSlideChange ? swiper => onSlideChange(swiper.activeIndex) : undefined}
        modules={[Pagination, Navigation]}
        breakpoints={breakpoints}
        pagination={{
          clickable: true,
          modifierClass: `swiper-pagination-${bulletsDirection} `,
          bulletClass: `${bulletClassName} bg-gray-500 transition-all transform swiper-pagination-bullet`,
        }}
      >
        {React.Children.map(children, (item, i) => (
          <SwiperSlide onClick={() => swipeTo(i)} className='flex items-center justify-center' >{item}</SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation */}
      {
        navigation &&
        <div className='absolute w-full h-full top-0 left-0 hidden md:block'>
          <IconButton name='arrow_back_ios' onClick={() => swipeTo((swiper?.realIndex || 0) - 1)} shadow={false} className='absolute top-1/2  -left-20' />
          <IconButton name='arrow_forward_ios' onClick={() => swipeTo((swiper?.realIndex || 0) + 1)} shadow={false} className='absolute top-1/2 -right-20' />
        </div>
      }
    </div>
  );
};

interface CarrouselProps {
  children: React.ReactNode;
  className?: string;
  slidesPerView?: number;
  spaceBetween?: number;
  bulletClassName?: string;
  bulletsDirection?: 'vertical' | 'horizontal';
  breakpoints?: SwiperProps['breakpoints'];
  centeredSlides?: boolean;
  navigation?: boolean;
  onSlideChange?: (slide: number) => void;
}

export default Carrousel;
