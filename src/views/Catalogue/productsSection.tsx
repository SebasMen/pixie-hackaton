import ProductCard from '../../components/common/productCard';

export const ProductsSection = ({ data }: ProductsSectionProps) => <div>
  {
    data.map((category, i) =>
      <div key={category.name} className={`
          p-4 pb-24 lg:p-24 xl:p-32
          ${i % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}
        `}
      >
        <h2 className='text-left font-bold text-2xl mb-10 text-gray-700 xl:text-3xl'>{category.name}</h2>
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
