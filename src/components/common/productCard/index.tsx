import Icon from '../icon';
import Tag from './tag';

import { Product } from '../../../interfaces/product';
import IconButton from '../iconButton';

export const ProductCard = ({ product }: ProductCardProps) => (
  <div className='relative flex flex-col flex-shrink-0 justify-between items-center h-72 w-40 p-3 pb-8 rounded-2xl bg-white'>
    <div className='flex justify-between items-center gap-1 w-full'>
      <Tag name={product.tag} />
      <Icon name='landscape' className='text-red-400 border-2 border-red-400 p-px' />
    </div>
    <Icon name='landscape' className='text-gray-300' />
    <div className='text-center font-bold'>
      <h4 className='text-red-600 mb-1'>{product.name}</h4>
      <p className='text-gray-800'>${product.price}</p>
    </div>
    <IconButton
      className='absolute -bottom-7 bg-red-500 text-white'
      name='shopping_basket'
      type='outlined'
      onClick={() => console.log(product.name)}
    />
  </div>
);

interface ProductCardProps {
  product: Product;
}

export default ProductCard;
