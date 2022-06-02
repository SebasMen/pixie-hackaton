import React from 'react';

import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';
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
  onSlideChange = () => { },
}: CarrouselProps) => (
  <Swiper
    className={'w-full rounded-lg relative ' + className}
    centeredSlides={centeredSlides}
    draggable
    spaceBetween={spaceBetween}
    slidesPerView={slidesPerView}
    onSlideChange={onSlideChange ? swiper => onSlideChange(swiper.activeIndex) : undefined}
    modules={[Pagination]}
    breakpoints={breakpoints}
    pagination={{
      clickable: true,
      modifierClass: `swiper-pagination-${bulletsDirection} `,
      bulletClass: 'bg-gray-500 transition-all transform scale-50 swiper-pagination-bullet',
    }}
  >
    {React.Children.map(children, item => (
      <SwiperSlide>{item}</SwiperSlide>
    ))}
  </Swiper>
);

interface CarrouselProps {
  children: React.ReactNode;
  className?: string;
  slidesPerView?: number;
  spaceBetween?: number;
  bulletsDirection?: 'vertical' | 'horizontal';
  breakpoints?: SwiperProps['breakpoints'];
  centeredSlides?: boolean;
  onSlideChange?: (slide: number) => void;
}

export default Carrousel;
