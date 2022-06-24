import { useState, useRef } from 'react';

import ProductCard from '../../components/common/productCard';
import Carrousel from '../../components/common/carrousel';
import ResultRecommendation from './ResultRecommendation';

import { ProductListResponse } from '../../interfaces/product';
import { PetFeedData } from '../../helpers/calculator';
import { useFetch, useAppContext } from '../../hooks';

const ResultSection = ({ data }: ResultSectionProps) => {
  // Hooks
  const { api } = useAppContext();
  const [selected, setSelected] = useState(0);
  const { current: feedData } = useRef(data);

  // Fetch
  const { loading, response } = useFetch<ProductListResponse>(
    `${api}/products/filter-calculator?gramos=${feedData?.grams}&type=${feedData?.type}&age=${feedData?.range}`
  );

  // Component
  return (
    // Check loading & products array
    !loading && response?.products && feedData ? (
      <div className='w-full rounded-t-3xl bg-sixth -mt-5 z-10 animate__animated animate__fadeIn md:px-20 xl1:px-[12.8rem] xl2:px-[17.8rem]'>
        <div className='mb-8 mt-14 text-center px-9 md:px-0'>
          <span className='text-primary text-xl font-bold lg:text-[24px]'>{feedData.msg}</span>
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

            1536: {
              slidesPerView: 2.5,
              spaceBetween: 0,
              initialSlide: 1,
            },

            1800: {
              slidesPerView: 3,
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
                key={`calculatorCart-${product.id}`}
                product={product}
                showControls={false}
              />
            ))
          }
        </Carrousel>
        <div className='text-center mt-8 mb-5 font-subTitles font-bold'>
          <span>
            Dieta recomendada para 4 semanas = {Math.round((feedData.grams * 28) / feedData.grams)} rollitos,
            <span className='text-primary'> ¡combínalas como tu quieras!</span>
          </span>
        </div>
        <ResultRecommendation
          products={response.products}
          quantity={Math.round((feedData.grams * 28) / feedData.grams)}
        />
        {/* <img src={backgroundCalculator} className='absolute -z-10' /> */}
      </div>
    ) : (
      <div>loading</div>
    )
  );
};

interface ResultSectionProps {
  data?: PetFeedData;
}

export default ResultSection;
