import { calculateGrs } from '../../../helpers/productHelper';
import { transformUrlGDrive } from '../../../helpers/imgHelper';
import { capitalize } from '../../../helpers/capitalize';
import { CartItem } from '../../../interfaces/basket';

const ItemShoppingCarMini = ({ item }: ItemShoppingCarMiniProps) => (
  <div className='grid grid-flow-col py-3 lg:flex lg:gap-5'>
    <figure>
      <img src={transformUrlGDrive(item.product.url_image)} className='w-[130px] h-[130px] rounded-2xl object-cover lg:w-20 lg:h-20' />
    </figure>
    <div className='grid grid-flow-col lg:flex lg:justify-between lg:w-full'>
      <div className='flex flex-col text-xs justify-between'>
        <div className='flex flex-col lg:pt-1'>
          <span className='text-sm text-primary font-sanzBold lg:text-base'>{capitalize(item.product.name)}</span>
          <span className='font-sanzSemiBold lg:text-xs'>{calculateGrs(item)}</span>
        </div>
      </div>
      <div className='flex flex-col lg:pt-3 lg:items-end lg:gap-1 lg:pr-1'>
        <span className='text-sm font-sanzBold lg:text-base lg:leading-7'>${item.quantity * item.product.price}</span>
        <span className='font-sanzSemiBold text-xs'>
          {item.quantity === 1 ? `${item.quantity} unidad` : `${item.quantity} unidades`}
        </span>
      </div>
    </div>
  </div>
);

interface ItemShoppingCarMiniProps {
  item: CartItem
}

export default ItemShoppingCarMini;
