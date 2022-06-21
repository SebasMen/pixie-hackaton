import ProductCard from '../../components/common/productCard';
import Carrousel from '../../components/common/carrousel';
import ResultRecommendation from './ResultRecommendation';

import { products } from '../../@fake/productsFake';

const ResultSection = () => (
  <div className='w-full rounded-t-3xl bg-sixth -mt-5 z-10 animate__animated animate__fadeIn md:px-20 lg:px-[11.9rem]'>
    <div className='mb-8 mt-14 text-center'>
      <span className='text-primary text-2xl xl2:text-[29px] font-bold'>¡PIXEL debe consumir un total de 670 gramos al día en 2 porciones!</span>
    </div>
    <span className='pl-5'>Recomendados:</span>

    {/* Carrousel */}
    <Carrousel className='pt-20 pb-10 lg:px-[9.8rem]' navigation breakpoints={{
      100: {
        slidesPerView: 1,
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

    }}>
      {
        products.map((card, i) =>
          <ProductCard key={`calculatorCart-${card.id}`} product={card} showControls={false} />
        )
      }
    </Carrousel>
    <div className='text-center mt-8 mb-5 font-subTitles font-bold'>
      <span>Dieta recomendada para 4 semanas = 30 porciones, <span className='text-primary'>¡combínalas como tu quieras!</span></span>
    </div>
    <ResultRecommendation />
    {/* <img src={backgroundCalculator} className='absolute -z-10' /> */}
  </div>
);

export default ResultSection;

