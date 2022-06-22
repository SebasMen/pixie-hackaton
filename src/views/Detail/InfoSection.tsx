import Button from '../../components/common/button';
import Icon from '../../components/common/icon';
import Tag from '../../components/common/productCard/tag';
import ProductCounter from './productCounter';

import { basket } from '../../assets/vectors';

import { Product } from '../../interfaces/product';
import { transformAge } from '../../helpers/productHelper';
import useShoppingCar from '../../hooks/useShoppingCar';
import { capitalize } from '../../helpers/capitalize';

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
      <div className='flex-shrink-0 px-7 md:px-0 mb-[26px]'>
        <div className='flex gap-3 mb-4'>
          {ages.map(age => <Tag key={`${product.id}-age-${age}`} name={age} className='mb-1 mt-2 md:mt-0'/>)}
        </div>
        <div className='text-2xl font-bold mb-2 md:text-3xl text-primary'>
          {capitalize(product.name)}
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
      <div className='my-3 mx-2 pl-6 lg:mx-0 flex gap-4 opacity-60'>
        <div className='ring-1 ring-primary rounded-full w-[50px] h-[50px]'></div>
        <div className='ring-1 ring-primary rounded-full w-[50px] h-[50px]'></div>
        <div className='ring-1 ring-primary rounded-full w-[50px] h-[50px]'></div>
        <div className='ring-1 ring-primary rounded-full w-[50px] h-[50px]'></div>
      </div>

      {/* Cart Button */}
      <Button className='fixed bottom-0 md:flex bg-primary gap-4 rounded-t-2xl py-4 rounded-b-none w-full md:rounded-b-2xl z-20'
        onClick={handleAddProduct}
      >
        <img src={basket} />
        <span className='text-base text-amber-100'>Agregar a la bolsa</span>
      </Button>

      {/* Calculator */}
      <div className='hidden justify-between mt-5 md:flex'>
        <span className='font-subTitles text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
        <Button rounded className='ring-1 ring-primary text-primary h-10 font-paragraph text-sm'>Calculadora</Button>
      </div>
    </div>
  );
};

interface InfoSectionProps {
  product: Product,
  setproduct: React.Dispatch<React.SetStateAction<Product>>
}

export default InfoSection;

