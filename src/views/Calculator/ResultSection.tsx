import ProductCard from '../../components/common/productCard';
import Carrousel from '../../components/common/carrousel';
import ResultRecommendation from './ResultRecommendation';

import { products } from '../../@fake/productsFake';
import { useState } from 'react';
import { PetFeedData } from '../../helpers/calculator';

const ResultSection = ({ data }: ResultSectionProps) => {
  const [selected, setSelected] = useState(0);
  return (
    <div className='w-full rounded-t-3xl bg-sixth -mt-5 z-10 animate__animated animate__fadeIn md:px-20 xl1:px-[12.8rem] xl2:px-[17.8rem]'>
      <div className='mb-8 mt-14 text-center px-9 md:px-0'>
        <span className='text-primary text-xl font-bold lg:text-[24px]'>{data?.msg}</span>
      </div>
      <span className='ml-3 px-3 md:px-0'>Recomendados:</span>

      {/* Carrousel */}
      <Carrousel
        className='pt-10 pb-10 lg:px-[9rem]'
        onSlideChange={setSelected}
        navigation
        breakpoints={{
          100: {
            slidesPerView: 1,
            spaceBetween: 0,
            initialSlide: 2,
          },
          300: {
            slidesPerView: 2,
            spaceBetween: 0,
            initialSlide: 2,
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 0,
            initialSlide: 2,
          },

          1536: {
            slidesPerView: 2.5,
            spaceBetween: 0,
            initialSlide: 2,
          },

          1800: {
            slidesPerView: 3,
            spaceBetween: 0,
            initialSlide: 2,
          },
        }}
      >
        {products.map((card, i) => (
          <ProductCard
            selected={selected === i}
            key={`calculatorCart-${card.id}`}
            product={card}
            showControls={false}
          />
        ))}
      </Carrousel>
      <div className='text-center mt-8 mb-5 font-subTitles font-bold'>
        <span>
          Dieta recomendada para 4 semanas = 30 rollitos,{' '}
          <span className='text-primary'>¡combínalas como tu quieras!</span>
        </span>
      </div>
      <ResultRecommendation />
      {/* <img src={backgroundCalculator} className='absolute -z-10' /> */}
    </div>
  );
};

interface ResultSectionProps {
  data?: PetFeedData;
}

export default ResultSection;
