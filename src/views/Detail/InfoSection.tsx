import { useState } from 'react';
import useShoppingCar from '../../hooks/useShoppingCar';

import Button from '../../components/common/button';
import Tag from '../../components/common/productCard/tag';
import ProductCounter from './productCounter';

import { attributesType, Product } from '../../interfaces/product';
import { transformAge } from '../../helpers/productHelper';
import { capitalize } from '../../helpers/capitalize';

import { basket } from '../../assets/vectors';
import AttributesItem from '../../components/common/attributesItem';
import { useNavigate } from 'react-router-dom';

const InfoSection = ({ product, attributes, showControls = true }: InfoSectionProps) => {
  // Hooks
  const [quantity, setQuantity] = useState(1);
  const { addRemoveProduct } = useShoppingCar();
  const navigate = useNavigate();

  // Methods
  const handlePriceChange = (quantity: number, totalPrice: number) => {
    setQuantity(quantity);
  };

  const ages = transformAge(product);

  const handleAddProduct = () => {
    addRemoveProduct(product, quantity);
  };

  return (
    <div className='flex flex-col w-full mt-4 md:mt-0 md:h-full md:w-[37%] md:pr-9'>
      <div className='flex-shrink-0 px-7 mb-2 md:px-0 md:mb-4'>
        <div className='hidden gap-3 mb-3 md:flex'>
          {ages.map(age => <Tag key={`${product.id}-age-${age}`} name={age} className='mb-1 mt-2 md:mt-0' sizeTags={ages.length}/>)}
        </div>
        <div className='text-2xl font-bold mb-3 md:mb-2 md:text-3xl text-pixieLightBlue'>
          {capitalize(product.name)}
        </div>
        <div className='mb-2 font-subTitles md:text-lg'>
          {product.description}
        </div>
        <div className='text-sm text-fourth	font-paragraph'>
          Licencia de venta {product.license}
        </div>
      </div>

      {/* Product Counter */}
      <ProductCounter price={product.price} onPriceChange={handlePriceChange} productQuantity={product.quantity}/>

      {/* attributesProduct */}
      <div className='my-4 mx-2 pl-6 flex gap-4 opacity-60 lg:mx-0 lg:pl-0'>
        {attributes.map(att =>
          <AttributesItem img={att.img} key={att.name}/>
        )}
      </div>
      {showControls &&
        <div>
          {/* Cart Button */}
          <Button className='fixed bottom-0 bg-primary gap-4 rounded-t-2xl py-4 rounded-b-none w-full z-20 md:rounded-b-2xl md:relative md:py-3 hover:bg-grayText focus:outline-none focus:ring focus:ring-fourth '
            onClick={handleAddProduct}
          >
            <img src={basket} />
            <span className='text-base text-[#fad7b1]'>Agregar a la bolsa</span>
          </Button>

          {/* Calculator */}
          <div className='hidden justify-between mt-5 md:flex md:px-1'>
            <span className='font-subTitles text-sm'>Haz click aquí para conocer la ración indicada</span>
            <Button rounded className='ring-1 ring-primary text-primary h-10 font-paragraph text-sm' onClick={() => navigate('/calculator')}>Calculadora</Button>
          </div>
        </div>
      }
    </div>
  );
};

interface InfoSectionProps {
  product: Product,
  attributes: attributesType[],
  showControls? : boolean
}

export default InfoSection;

