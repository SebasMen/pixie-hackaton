import ProductCard from '../../components/common/productCard';
import { useAppContext } from '../../hooks';

const RecomendationSection = () => {
  const { productsToShowRecomendation } = useAppContext();

  return (
    <div className='border-t border-grayText border-opacity-20 mt-[4.5rem] mb-24'>
      <h4 className='text-lg text-center font-paragraph font-bold mt-11 mb-9 lg:text-[25px] lg:text-left'>A tu peludo también le puede encantar</h4>
      <div className='w-full grid grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-4'>
        {productsToShowRecomendation.map(product =>
          <ProductCard product={product} key={product.id}/>
        )}
      </div>
    </div>
  );
};

export default RecomendationSection;
