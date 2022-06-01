import { useState } from 'react';

import Carrousel from '../../components/common/carrousel';
import Card from '../../components/common/card';
import ProductCard from '../../components/common/productCard';
import Button from '../../components/common/button';

import { Product } from '../../interfaces/product';

import vegetables from '../../assets/images/vegetables.png';

export const ProductsSection = ({ products }: ProductsSectionProps) => {
  const [selected, setSelected] = useState(0);

  return (
    <div className='flex flex-col items-center bg-gray-100 w-full rounded-t-3xl transform -mt-4 pb-20 relative overflow-hidden'>
      {/* Background */}
      <img className='absolute w-full h-full object-cover object-right -z-10' src={vegetables} />

      {/* Carrousel */}
      <Carrousel onSlideChange={setSelected} className='pt-20 pb-10 px-5'>
        <Card title='Lorem ipsum 1' description='Lorem ipsum 1' selected={selected === 0} />
        <Card title='Lorem ipsum 2' description='Lorem ipsum 2' selected={selected === 1} />
        <Card title='Lorem ipsum 3' description='Lorem ipsum 3' selected={selected === 2} />
      </Carrousel>

      {/* Products */}
      <div className='flex flex-wrap justify-center gap-4 gap-y-20 mt-20 p-4'>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Button className='mt-10 text-red-500 font-bold w-4/5 border-2 border-red-500'>Ver catálogo</Button>
    </div>
  );
};

interface ProductsSectionProps {
  products: Product[];
}

export default ProductsSection;
