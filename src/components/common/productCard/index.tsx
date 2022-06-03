import { useNavigate } from 'react-router-dom';

import Icon from '../icon';
import Tag from './tag';
import IconButton from '../iconButton';

import { Product } from '../../../interfaces/product';

import cat from '../../../assets/vectors/CatIcon.svg';
import dog from '../../../assets/vectors/DogIcon.svg';

export const ProductCard = ({ product }: ProductCardProps) => {
  // Hooks
  const navigate = useNavigate();

  // Component
  return (
    <div className='relative flex flex-col flex-shrink-0 justify-between items-center h-72 w-40 p-3 pb-8 rounded-2xl bg-white md:w-72 md:h-116'>
      <div className='flex justify-between items-center gap-1 w-full'>
        <Tag name={product.tag.name} />
        <IconButton.mini img={product.tag.key === 'dogs' ? dog : cat} name={product.name + '-tag-' + product.tag.key} className='text-red-400 border-2 border-red-400 p-1 shadow-none' onClick={() => console.log(product.tag.key)} />
      </div>
      <Icon name='landscape' className='text-gray-300' />
      <div className='text-center font-bold'>
        <h4 className='text-red-600 mb-1'>{product.name}</h4>
        <p className='text-gray-800'>${product.price}</p>
      </div>
      <IconButton
        className='absolute -bottom-7 bg-red-500 text-white md:-bottom-8'
        name='shopping_basket'
        type='outlined'
        size='3xl'
        onClick={() => navigate('/product/detail/' + product.id)}
      />
    </div>
  );
};

interface ProductCardProps {
  product: Product;
}

export default ProductCard;
