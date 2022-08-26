import { calculateGrs } from '../../../helpers/productHelper';
import { transformUrlGDrive } from '../../../helpers/imgHelper';
import { capitalize } from '../../../helpers/capitalize';
import { CartItem } from '../../../interfaces/basket';
import { notImage } from '../../../assets/vectors';

const ItemShoppingCarMini = ({ item }: ItemShoppingCarMiniProps) => (
  <div className='flex pt-[0.8rem] pb-[1rem] lg:py-4'>
    <figure className='w-[22.33%] lg:w-[24%]'>
      {item.product.url_image
        ?
        <img src={transformUrlGDrive(item.product.url_image)} className='w-[60px] h-[70px] rounded-2xl object-cover lg:w-20 lg:h-[82px]' />
        :
        <img src={notImage} className='w-[60px] h-[70px] rounded-2xl lg:w-20 lg:h-[82px]' />
      }
    </figure>
    <div className='flex justify-between w-[78.67%] lg:w-[76%] lg:pt-3'>
      <div className='flex flex-col text-xs justify-between'>
        <div className='flex flex-col'>
          <span className='text-sm text-pixieLightBlue lg:font-sanzBold lg:text-base'>{capitalize(item.product.name)}</span>
          <span className='font-sanzSemiBold lg:text-xs'>{calculateGrs(item)}</span>
        </div>
      </div>
      <div className='flex flex-col items-end lg:gap-[1px] lg:pr-1'>
        <span className='text-sm lg:font-sanzBold lg:text-base lg:leading-7'>${item.quantity * item.product.price}</span>
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
