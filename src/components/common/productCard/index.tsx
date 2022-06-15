import { useNavigate } from 'react-router-dom';

import AddRemoveItem from '../../addRemoveItem/AddRemoveItem';
import IconButton from '../iconButton';
import Tag from './tag';

import { Product } from '../../../interfaces/product';

import { transformAge } from '../../../helpers/productHelper';
import { capitalize } from '../../../helpers/capitalize';
import { useAppContext } from '../../../hooks';

import { basket, CatIcon, DogIcon } from '../../../assets/vectors/index';

export const ProductCard = ({ product, showControls = true, className }: ProductCardProps) => {
  // Hooks
  const navigate = useNavigate();
  const ages = transformAge(product);
  const { updateContext } = useAppContext();

  const handleSubmit = () => {
    updateContext(old => ({ ...old, productView: product }));
    navigate('/product/detail/' + product.id);
  };

  const handleChange = (type: number) => {

  };

  // Component
  return (
    <div className={`
        relative flex flex-col flex-shrink-0 justify-between items-center
        h-72 w-40 p-3 pb-8 rounded-2xl bg-white ${className}
        md:w-[269px] md:h-[357px]
    `}>
      <div className='flex justify-between items-center gap-1 w-full mb-2'>
        <div>
          {ages.map(age => <Tag key={`${product.id}-age-${age}`} name={age} className='mb-1' />)}
        </div>
        <IconButton.mini img={product.kind_pet === 'CAT' ? CatIcon : DogIcon} name={product.name + '-tag-' + product.kind_pet} className='text-red-400 border-2 border-red-400 p-1 shadow-none' onClick={() => console.log(product.kind_pet)} />
      </div>
      <div className='flex-grow overflow-hidden rounded-md'>
        <img src={product.url_image} className='w-36 h-36 object-cover' />
      </div>
      <div className='text-center text-lg w-full'>
        <h4 className='text-red-600 mb-1'>{capitalize(product.name)}</h4>
        <div className='flex items-center justify-around'>
          <p className='text-gray-800 font-subTitles font-black'>$ {product.price} <span className='text-xs'>{product.presentation}</span></p>
          {showControls &&
            <div className='w-20 h-8'>
              <AddRemoveItem handleChance={handleChange} />
            </div>
          }
        </div>
      </div>
      {showControls &&
        <IconButton.mini
          className='absolute -bottom-7 bg-red-500 text-white md:-bottom-5'
          imgClassName='w-7 h-7'
          sizeContainer='w-10 h-10'
          img={basket}
          name='basket'
          type='outlined'
          size='xs'
          onClick={() => handleSubmit()}
        />
      }

    </div>
  );
};

interface ProductCardProps {
  product: Product;
  showControls?: boolean;
  className?: string;
}

export default ProductCard;
