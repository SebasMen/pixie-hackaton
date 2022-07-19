import { useNavigate } from 'react-router-dom';

import AddRemoveItem from '../../addRemoveItem/AddRemoveItem';
import IconButton from '../iconButton';
import Tag from './tag';

import { Product } from '../../../interfaces/product';

import { transformAge } from '../../../helpers/productHelper';
import { capitalize } from '../../../helpers/capitalize';
import { useAppContext } from '../../../hooks';
import { useShoppingCar } from '../../../hooks/useShoppingCar';

import { basket, CatIcon, DogIcon, notImage } from '../../../assets/vectors/index';
import { transformUrlGDrive } from '../../../helpers/imgHelper';

export const ProductCard = ({ product, showControls = true, className, isCarrousel, selected }: ProductCardProps) => {
  // Hooks
  const navigate = useNavigate();
  const ages = transformAge(product);
  const { updateContext } = useAppContext();
  const { addRemoveProduct } = useShoppingCar();

  const handleSubmit = () => {
    updateContext(old => ({ ...old, productView: product, showPopup: false }));
    navigate('/product/detail/' + product.id);
  };

  const handleChange = (value: number) => {
    addRemoveProduct(product, value);
    if (value === 1)
      updateContext(old => ({ ...old, showPopup: true }));
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
          ring-0 ring-primary transform transition-all 
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
            img={product.kind_pet === 'CAT' ? CatIcon : DogIcon}
            name={product.name + '-tag-' + product.kind_pet}
            className='text-primary border-[1px] border-primary p-1 shadow-none mr-1'
            onClick={() => console.log(product.kind_pet)}
          />
        </div>
        <div className='flex-grow overflow-hidden rounded-md'>
          {product.url_image === '' ? (
            <img src={notImage} className='w-24 h-24 md:w-36 md:h-36' />
          ) : (
            <img src={transformUrlGDrive(product.url_image)} className='w-24 h-24 md:w-36 md:h-36 object-contain' />
          )}
        </div>
        <div className='text-center text-xs md:text-lg  w-full'>
          <h4 className='text-primary mb-1'>{capitalize(product.name)}</h4>
          <div className='flex items-center justify-around'>
            <p className='font-sanzBold text-base md:text-xl'>
              $ {product.price}{' '}
              <span className='text-xs font-semibold hidden lg:inline-flex '>{product.presentation.toLocaleLowerCase()}</span>
            </p>
            {showControls && (
              <div className='w-16 h-6 md:w-20 md:h-8'>
                <AddRemoveItem handleChance={handleChange} />
              </div>
            )}
          </div>
        </div>
      </div>
      {showControls && (
        <IconButton.mini
          className='absolute -bottom-[1rem] bg-primary text-white md:-bottom-4 z-40 shadow-[0_2px_10px_0_rgba(65,65,65,0.4)]'
          imgClassName='w-6 h-6 md:w-7 md:h-7'
          sizeContainer='w-[35px] h-[35px] md:w-[43px] md:h-[43px]'
          img={basket}
          name='basket'
          type='outlined'
          size='xs'
          onClick={() => handleChange(+1)}
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
