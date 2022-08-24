import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../../hooks';
import { useShoppingCar } from '../../../hooks/useShoppingCar';

import AddRemoveItem from '../addRemoveItem/AddRemoveItem';
import IconButton from '../iconButton';
import Tag from './tag';

import { Product } from '../../../interfaces/product';
import { transformAge } from '../../../helpers/productHelper';
import { capitalize } from '../../../helpers/capitalize';

import { basket, iconButtonCat, iconButtonDog, notImage } from '../../../assets/vectors/index';
import { transformUrlGDrive } from '../../../helpers/imgHelper';
import Tooltiped from '../tooltiped';
import { useEffect, useState } from 'react';

export const ProductCard = ({ product, showControls = true, className, isCarrousel, selected }: ProductCardProps) => {
  // Hooks
  const navigate = useNavigate();
  const ages = transformAge(product);
  const { updateContext } = useAppContext();
  const { addRemoveProduct } = useShoppingCar();
  const [isMobile, setIsMobile] = useState(false);
  const [counter, setCounter] = useState<number>(1);

  useEffect(() => {
    if (screen.width < 800)
      setIsMobile(true);
  }, [screen.width]);

  // Handle
  const handleSubmit = () => {
    updateContext(old => ({ ...old, productView: product, showPopup: false }));
    navigate('/product/detail/' + product.id);
  };

  const handleChange = () => {
    addRemoveProduct(product, counter);
    updateContext(old => ({ ...old, showPopup: true }));
  };

  const addCounter = (value: number) => {
    if (!(value === -1 && counter === 1))
      setCounter(old => (old + value));
  };

  // Component
  return (
    <div
      className={`
          relative flex flex-col flex-shrink-0 justify-between items-center
          h-[15.5rem] w-40 md:w-[16.815rem] md:h-[365px]
          ${className}
        `}
    >
      <div
        className={`
          relative flex flex-col flex-shrink-0 justify-between items-center 
          cursor-pointer p-3 pb-8 rounded-2xl bg-white 
          ring-0 ring-pixieLightBlue transform transition-all 
          ${isCarrousel && (selected ? 'scale-150 lg:scale-100' : 'scale-125 lg:scale-90')}
          w-full h-full lg:pb-11
          hover:ring-1 ${className}
        `}
        onClick={handleSubmit}
      >
        <div className='flex justify-between w-full mb-2'>
          <div className='flex flex-col items-start justify-center gap-1'>
            {ages.map(age => (
              <Tag key={`${product.id}-age-${age}`} name={age} className='w-full' />
            ))}
          </div>
          <IconButton.mini
            img={product.kind_pet === 'CAT' ? iconButtonCat : iconButtonDog}
            name={product.name + '-tag-' + product.kind_pet}
            className='text-pixieLightBlue border-[1px] border-pixieLightBlue p-1 shadow-none mr-1'
            onClick={() => console.log(product.kind_pet)}
          />
        </div>
        <div className='flex-grow overflow-hidden rounded-md'>
          {product.url_image === '' ? (
            <img src={notImage} className='w-24 h-24 md:w-36 md:h-36' />
          ) : (
            <img src={transformUrlGDrive(product.url_image)} className='w-24 h-24 md:w-36 md:h-36 object-contain hover:scale-[1.75]' />
          )}
        </div>
        <div className={'text-center text-xs md:text-lg w-full'}>
          {product.name.length > 18 && !isMobile
            ?
            <Tooltiped label={product.name}>
              <h4 className='text-pixieLightBlue mb-1'>{capitalize(product.name.slice(0, 18) + '...')}</h4>
            </Tooltiped>
            :
            <h4 className={`${product.name.length > 18 && 'leading-none'} text-pixieLightBlue mb-1`}>{capitalize(product.name)}</h4>
          }
          <div className='flex items-center justify-around'>
            <p className='font-sanzBold text-base md:text-xl'>
              $ {product.price}{' '}
              <span className='text-xs font-semibold hidden lg:inline-flex '>{product.presentation.toLocaleLowerCase()}</span>
            </p>
            {showControls && (
              <div className='w-16 h-6 md:w-20 md:h-8'>
                <AddRemoveItem handleChance={addCounter} counter={counter}/>
              </div>
            )}
          </div>
        </div>
      </div>
      {showControls && (
        <IconButton.mini
          className='absolute -bottom-[1rem] bg-pixieLightBlue text-white md:-bottom-4 z-40 shadow-[0_2px_10px_0_rgba(65,65,65,0.4)]'
          imgClassName='w-6 h-6 md:w-7 md:h-7'
          sizeContainer='w-[35px] h-[35px] md:w-[43px] md:h-[43px]'
          img={basket}
          name='basket'
          type='outlined'
          size='xs'
          onClick={() => handleChange()}
        />
      )}
    </div>
  );
};

interface ProductCardProps {
  product: Product;
  showControls?: boolean;
  className?: string;
  isCarrousel? : boolean;
  selected?: boolean;
}

export default ProductCard;
