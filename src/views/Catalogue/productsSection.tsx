import ProductCard from '../../components/common/productCard';

export const ProductsSection = ({ data }: ProductsSectionProps) => <div>
  {
    data.map((category, i) =>
      <div key={category.name} className={`
          p-4 pb-24 lg:p-24 xl:p-32 rounded-t-3xl overflow-hidden transform -mt-4
          ${i % 2 === 0 ? 'bg-secondary' : 'bg-third'}
        `}
      >
        <h2 className='text-center font-bold text-2xl mb-10 text-gray-700 stroke-zinc-50 text_withoutbg opacity-50 md:text-7xl'>{category.name}</h2>
        <div
          className={`
            flex flex-wrap justify-center gap-4 gap-y-20 
            xl:justify-start items-start
          `}
        >
          {category.products.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>)
  }
</div>;

interface ProductsSectionProps {
  data: {
    name: string;
    products: {
      id: string;
      description: string;
      name: string;
      price: number;
      tag: {
        name: string;
        key: string;
      };
    }[];
  }[];
}

export default ProductsSection;
