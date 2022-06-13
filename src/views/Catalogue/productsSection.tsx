import ProductCard from '../../components/common/productCard';
import { filterShop } from '../../interfaces/filter';
import { Product } from '../../interfaces/product';

export const ProductsSection = ({ data, filter }: ProductsSectionProps) => {
  const categoryFilter = ['Alimentos', 'Snack', 'Accesorios'];
  return (
    <div className='w-full'>
      {
        categoryFilter.map((category, i) =>
          <div key={i} className={`
              p-4 pb-24 lg:p-24 xl:p-32 rounded-t-3xl overflow-hidden transform -mt-4
              ${i % 2 === 0 ? 'bg-thirdOpacity' : 'bg-third'}
            `}
          >
            <h2 className='text-center text-5xl mb-10 text-gray-700 stroke-zinc-50 text_withoutbg opacity-50 md:text-7xl'>{category}</h2>
            <div
              className={`
                flex flex-wrap justify-center gap-4 gap-y-20 
                items-start
              `}
            >
              {data?.map(product => (product.category.trim() === category.toLocaleLowerCase() && product.age.includes(filter.agePet) && product.kind_pet === filter.typePet) && <ProductCard key={product.id} product={product} />)}
            </div>
          </div>)
      }
    </div>);
};

interface ProductsSectionProps {
  data: Array<Product> | undefined
  filter: filterShop
}

export default ProductsSection;
