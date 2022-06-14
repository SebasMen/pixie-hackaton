import React, { useState } from 'react';

import { Swiper, SwiperSlide, SwiperProps, useSwiper } from 'swiper/react';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

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
  onSlideChange = () => { },
}: CarrouselProps) => {
  // Hooks
  const [swiper, setSwiper] = useState<any>();

  // Handlers
  const swipeTo = (index: number) => {
    if (!swiper) return;

    swiper.slideTo(index);
  };

  // Component
  return (
    <Swiper
      className={'w-full rounded-lg relative ' + className}
      centeredSlides={centeredSlides}
      draggable
      onSwiper={setSwiper}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      onSlideChange={onSlideChange ? swiper => onSlideChange(swiper.activeIndex) : undefined}
      modules={[Pagination]}
      breakpoints={breakpoints}
      pagination={{
        clickable: true,
        modifierClass: `swiper-pagination-${bulletsDirection} `,
        bulletClass: `${bulletClassName} bg-gray-500 transition-all transform scale-50 swiper-pagination-bullet`,
      }}
    >
      {React.Children.map(children, (item, i) => (
        <SwiperSlide onClick={() => swipeTo(i)} className='flex items-center justify-center' >{item}</SwiperSlide>
      ))}
    </Swiper>
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
  onSlideChange?: (slide: number) => void;
}

export default Carrousel;
