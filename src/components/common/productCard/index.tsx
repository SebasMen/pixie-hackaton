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

export const ProductCard = ({ product, showControls = true, className, selected }: ProductCardProps) => {
  // Hooks
  const navigate = useNavigate();
  const ages = transformAge(product);
  const { updateContext } = useAppContext();
  const { addRemoveProduct } = useShoppingCar();

  const handleSubmit = () => {
    updateContext(old => ({ ...old, productView: product }));
    navigate('/product/detail/' + product.id);
  };

  const handleChange = (type: number) => {
    if (type === 1) handleAddProduct();
    else handleRemoveProduct();
  };

  const handleAddProduct = () => {
    product.quantitySold = 1;
    addRemoveProduct(product);
  };

  const handleRemoveProduct = () => {
    product.quantitySold = -1;
    addRemoveProduct(product);
  };

  // Component
  return (
    <div
      className={`
          relative flex flex-col flex-shrink-0 justify-between items-center
          ${className}
        `}
    >
      <div
        className={`
          relative flex flex-col flex-shrink-0 justify-between items-center 
          cursor-pointer h-64 w-40 p-3 pb-8 rounded-2xl bg-white 
          ring-0 ring-primary transform transition-all 
          ${selected ? 'scale-110 lg:scale-100' : 'scale-90'}
          md:w-[16.815rem] md:h-[357px]
          hover:ring-1 ${className}
        `}
        onClick={handleSubmit}
      >
        <div className='flex justify-between gap-1 w-full mb-2'>
          <div className='flex flex-col items-start justify-center gap-1'>
            {ages.map(age => (
              <Tag key={`${product.id}-age-${age}`} name={age} className='w-full' />
            ))}
          </div>
          <IconButton.mini
            img={product.kind_pet === 'CAT' ? CatIcon : DogIcon}
            name={product.name + '-tag-' + product.kind_pet}
            className='text-primary border-[1px] border-primary p-1 shadow-none'
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
          <h4 className='text-red-600 mb-1'>{capitalize(product.name)}</h4>
          <div className='flex items-center justify-around'>
            <p className='text-gray-800 font-subTitles font-black text-base'>
              ${product.price}{' '}
              <span className='text-xs hidden lg:inline-flex'>{product.presentation.toLocaleLowerCase()}</span>
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
          className='absolute -bottom-[0.65rem] bg-primary text-white md:-bottom-1 z-40 shadow-[0_2px_10px_0_rgba(65,65,65,0.4)]'
          imgClassName='w-7 h-7'
          sizeContainer='w-10 h-10'
          img={basket}
          name='basket'
          type='outlined'
          size='xs'
          onClick={handleAddProduct}
        />
      )}
    </div>
  );
};

interface ProductCardProps {
  product: Product;
  showControls?: boolean;
  className?: string;
  selected?: boolean;
}

export default ProductCard;
