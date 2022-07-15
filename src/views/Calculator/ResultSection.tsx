import { useState, useRef, useCallback } from 'react';

import ProductCard from '../../components/common/productCard';
import Carrousel from '../../components/common/carrousel';
import ResultRecommendation from './ResultRecommendation';
import Button from '../../components/common/button';

import { ProductListResponse } from '../../interfaces/product';
import { PetFeedData } from '../../helpers/calculator';
import { useFetch } from '../../hooks';
import calculatorService from '../../services/calculatorService';

const ResultSection = ({ data, reset }: ResultSectionProps) => {
  // Hooks
  const [selected, setSelected] = useState(0);
  const { current: feedData } = useRef(data);

  const getCalculateProduct = useCallback(
    () => calculatorService.getCalculateProduct(feedData),
    [feedData],
  );

  // Fetch
  const { loading, response } = useFetch<ProductListResponse>(getCalculateProduct);

  // Component
  return (
    // Check loading & products array
    !loading && response?.products && feedData ? (
      <div className='w-full rounded-t-3xl bg-sixth -mt-5 z-10 animate__animated animate__fadeIn flex flex-col justify-center xl1:items-center'>
        <div className='max-w-[1440px] md:px-20 xl1:px-[16.8rem]'>
          <div className='mb-10 mt-20 text-center px-9 md:px-0'>
            <span className='text-primary text-xl font-bold lg:text-[25px]'>{feedData.msg}</span>
          </div>
          <span className='ml-3 px-3 md:px-0 md:text-lg'>Recomendados:</span>

          {/* Carrousel */}
          <Carrousel
            className='pt-3 pb-10 lg:px-[9rem]'
            onSlideChange={setSelected}
            navigation
            breakpoints={{
              100: {
                slidesPerView: 1,
                spaceBetween: 0,
                initialSlide: 1,
              },
              300: {
                slidesPerView: 2,
                spaceBetween: 0,
                initialSlide: 1,
              },
              500: {
                slidesPerView: 2,
                spaceBetween: 0,
                initialSlide: 1,
              },
            }}
          >
            {
              // Map products
              response.products.map((product, i) => (
                <ProductCard
                  selected={selected === i}
                  isCarrousel={true}
                  key={`calculatorCart-${product.id}`}
                  product={product}
                  showControls={false}
                />
              ))
            }
          </Carrousel>
          <div className='text-center mt-10 mb-5 font-sanzBold md:text-lg md:leading-normal'>
            <span>
              Dieta recomendada para 4 semanas = {Math.round((feedData.grams * 28) / 500)} rollitos,
              <span className='text-primary'> ¡combínalas como tu quieras!</span>
            </span>
          </div>
          <ResultRecommendation
            products={response.products}
            quantity={Math.round((feedData.grams * 28) / 500)}
            grams={feedData.grams}
          />
          <div className='w-full flex items-center justify-center mb-16 '>
            <Button
              onClick={reset}
              padding='p-3 md:px-10'
              className='bg-transparent text-sm ring-1 ring-primary font-bold truncate transform transition-all lg:text-base hover:ring-2'>
              Calcular de nuevo
            </Button>
          </div>
          {/* <img src={backgroundCalculator} className='absolute -z-10' /> */}
        </div>
      </div>
    ) : (
      <div>loading</div>
    )
  );
};

interface ResultSectionProps {
  data?: PetFeedData;
  reset: VoidFunction;
}

export default ResultSection;
