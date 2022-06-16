import Button from '../../components/common/button';
import Icon from '../../components/common/icon';
import Tag from '../../components/common/productCard/tag';
import ProductCounter from './productCounter';

import { Product } from '../../interfaces/product';
import { transformAge } from '../../helpers/productHelper';
import useShoppingCar from '../../hooks/useShoppingCar';

const InfoSection = ({ product, setproduct }: InfoSectionProps) => {
  // Hooks
  const { addProduct } = useShoppingCar();

  // Methods
  const handlePriceChange = (quantity: number, totalPrice: number) => {
    setproduct({ ...product, totalPrice, quantitySold: quantity });
  };

  const ages = transformAge(product);

  const handleAddProduct = () => {
    addProduct(product);
  };

  return (
    <div className='flex flex-col w-full md:h-full md:w-1/3'>
      <div className='flex-shrink-0 px-7 md:px-0 md:flex-grow'>
        <div className='flex gap-3'>
          {ages.map(age => <Tag key={`${product.id}-age-${age}`} name={age} className='mb-1 mt-2 md:mt-0'/>)}
        </div>
        <div className='text-2xl font-bold mb-2 md:text-3xl text-primary'>
          {product.name}
        </div>
        <div className='mb-2 font-subTitles text-lg'>
          {product.description}
        </div>
        <div className='text-sm text-fourth	font-paragraph'>
          Licencia de venta {product.license}
        </div>
      </div>

      {/* Product Counter */}
      <ProductCounter price={product.price} onPriceChange={handlePriceChange} />

      {/* typeProduct */}
      <div className='hidden my-3 lg:flex gap-2 opacity-60'>
        <div className='ring-1 ring-primary rounded-full w-9 h-9'></div>
        <div className='ring-1 ring-primary rounded-full w-9 h-9'></div>
        <div className='ring-1 ring-primary rounded-full w-9 h-9'></div>
        <div className='ring-1 ring-primary rounded-full w-9 h-9'></div>
      </div>

      {/* Cart Button */}
      <Button className='flex bg-red-600 gap-4 rounded-t-2xl py-4 rounded-b-none w-full md:rounded-b-2xl'
        onClick={handleAddProduct}
      >
        <Icon name='shopping_bag' className='text-amber-100' size='3xl' type='outlined' />
        <span className='text-xl text-amber-100'>Agregar a la bolsa</span>
      </Button>

      {/* Calculator */}
      <div className='hidden justify-between mt-5 md:flex gap-5'>
        <span className='font-subTitles'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
        <Button rounded className='px-8 ring-2 ring-red-600 text-red-500 h-12 font-paragraph'>Calculadora</Button>
      </div>
    </div>
  );
};

interface InfoSectionProps {
  product: Product,
  setproduct: React.Dispatch<React.SetStateAction<Product>>
}

export default InfoSection;

