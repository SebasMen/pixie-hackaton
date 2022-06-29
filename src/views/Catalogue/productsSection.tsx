import ProductCard from '../../components/common/productCard';
import { filterDefault } from '../../helpers/filterHelpers';
import { filterShop } from '../../interfaces/filter';
import { Product } from '../../interfaces/product';

export const ProductsSection = ({ data, filter }: ProductsSectionProps) => {
  // Products
  const filtered = filterDefault(data, filter);

  // Component
  return <div className='w-full'>
    {
      filtered.map((category, i) =>
        <div className='w-full' key={`catalogue-${category.name}-${i}`}>
          {category.products.length > 0 &&
            <div
              className={`
                p-4 pb-24 lg:p-24 xl:p-16 rounded-t-3xl overflow-hidden transform -mt-4 flex flex-col items-center
                ${i % 2 === 0 ? 'bg-thirdOpacity' : 'bg-third'}
              `}
            >
              <div className='max-w-[1440px] xl2:px-2 2xl1:px-36'>
                <h2 className='text-center text-[40px] lg:text-5xl mb-6 lg:mb-10 text-gray-700 stroke-zinc-50 text_withoutbg opacity-50 md:text-7xl'>{category.name}</h2>
                <div
                  className={`
                    flex flex-wrap justify-center gap-1 gap-y-20 
                    items-start
                  `}
                >
                  {category.products.map(product => <ProductCard key={product.id} product={product} />)}
                </div>
              </div>
            </div>
          }
        </div>
      )
    }
  </div>;
};

interface ProductsSectionProps {
  data: Array<Product> | undefined
  filter: filterShop
}

export default ProductsSection;
