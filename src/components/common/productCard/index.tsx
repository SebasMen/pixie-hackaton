import { useNavigate } from 'react-router-dom';
import { basket } from '../../../assets/vectors/index';

import Tag from './tag';
import IconButton from '../iconButton';

import { Product } from '../../../interfaces/product';

import cat from '../../../assets/vectors/CatIcon.svg';
import dog from '../../../assets/vectors/DogIcon.svg';
import { transformAge } from '../../../helpers/productHelper';
import { useAppContext } from '../../../hooks';
import AddRemoveItem from '../../addRemoveItem/AddRemoveItem';

export const ProductCard = ({ product }: ProductCardProps) => {
  // Hooks
  const navigate = useNavigate();
  const ages = transformAge(product);
  const { updateContext } = useAppContext();

  const handleSubmit = () => {
    updateContext(old => ({ ...old, productView: product }));
    navigate('/product/detail/' + product.id);
  };

  // Component
  return (
    <div className='relative flex flex-col flex-shrink-0 justify-between items-center h-72 w-40 p-3 pb-8 rounded-2xl bg-white md:w-64 md:h-116'>
      <div className='flex justify-between items-center gap-1 w-full mb-2'>
        <div>
          {ages.map(age => <Tag key={`${product.id}-age-${age}`} name={age} className='mb-1'/>)}
        </div>
        <IconButton.mini img={product.kind_pet === 'CAT' ? cat : dog} name={product.name + '-tag-' + product.kind_pet} className='text-red-400 border-2 border-red-400 p-1 shadow-none' onClick={() => console.log(product.kind_pet)} />
      </div>
      <div className='flex-grow overflow-hidden rounded-md'>
        <img src={product.url_image} className='w-full object-cover' />
      </div>
      <div className='text-center font-bold w-full'>
        <h4 className='text-red-600 mb-1'>{product.name}</h4>
        <div className='flex items-center justify-between'>
          <p className='text-gray-800 font-subTitles font-extrabold'>${product.price} <span className='text-xs'>{product.presentation}</span></p>
          <div>
            <AddRemoveItem />
          </div>
        </div>
      </div>
      <IconButton
        className='absolute -bottom-7 bg-red-500 text-white md:-bottom-8 '
        imgClassName='w-8 h-8'
        img={basket}
        name='basket'
        type='outlined'
        size='xs'
        onClick={() => handleSubmit()}
      />
    </div>
  );
};

interface ProductCardProps {
  product: Product;
}

export default ProductCard;
