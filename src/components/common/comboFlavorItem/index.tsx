import { Product } from '../../../interfaces/product';
import IconButton from '../iconButton';
import Tooltiped from '../tooltiped';

const ComboFlavoritem = ({ product, handleDeleteProduct }: ComboFlavoritemProps) => (
  <div className='font-sanzBold bg-fourth text-white text-xs px-3 py-1 rounded-full border border-pixieLightBlue w-24 flex justify-between items-center'>
    <Tooltiped label={product.name}>
      <div className='truncate'>
        <span>{ product.name }</span>
      </div>
    </Tooltiped>
    <IconButton name='close' onClick={handleDeleteProduct} className='text-white' size='2xl' shadow={false} sizeContainer='w-12 h-4'/>
  </div>
);

interface ComboFlavoritemProps {
  product: Product,
  handleDeleteProduct: () => void
}

export default ComboFlavoritem;
