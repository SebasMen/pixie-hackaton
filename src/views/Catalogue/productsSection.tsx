import ProductCard from '../../components/common/productCard';
import { filterDefault } from '../../helpers/filterHelpers';
import { filterShop } from '../../interfaces/filter';
import { Product } from '../../interfaces/product';

export const ProductsSection = ({ data, filter }: ProductsSectionProps) =>
  <div className='w-full'>
    {
      filterDefault(data, filter).map((category, i) =>
        <div className='w-full' key={`catalogue-${category.name}-${i}`}>
          <div className={`
            p-4 pb-24 lg:p-24 xl:p-32 rounded-t-3xl overflow-hidden transform -mt-4
            ${i % 2 === 0 ? 'bg-thirdOpacity' : 'bg-third'}
          `}
          >
            <h2 className='text-center text-5xl mb-10 text-gray-700 stroke-zinc-50 text_withoutbg opacity-50 md:text-7xl'>{category.name}</h2>
            <div
              className={`
              flex flex-wrap justify-center gap-4 gap-y-20 
              items-start
            `}
            >
              { category.products.map(product => <ProductCard key={product.id} product={product} />)
              }
            </div>
          </div>
        </div>
      )
    }
  </div>;

interface ProductsSectionProps {
  data: Array<Product> | undefined
  filter: filterShop
}

export default ProductsSection;
