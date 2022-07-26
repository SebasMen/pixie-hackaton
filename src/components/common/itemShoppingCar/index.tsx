import useShoppingCar from '../../../hooks/useShoppingCar';

import AddRemoveItem from '../addRemoveItem/AddRemoveItem';

import { calculateGrs } from '../../../helpers/productHelper';
import { transformUrlGDrive } from '../../../helpers/imgHelper';
import { capitalize } from '../../../helpers/capitalize';
import { CartItem } from '../../../interfaces/basket';
import { notImage } from '../../../assets/vectors';

const ItemShoppingCar = ({ item, showMessageDelete, showOptions }: ItemShoppingCarProps) => {
  // Hooks
  const { deleteProduct, addRemoveProduct } = useShoppingCar();

  // Handle
  const handleDeleteProduct = () => {
    deleteProduct(item.product.id);
    if (showMessageDelete)
      showMessageDelete(item);
  };

  const handleChange = (value: number) =>
    addRemoveProduct(item.product, value);

  return (
    <div className='flex mb-2 py-3 px-2 bg-white rounded-[20px] lg:p-4 lg:mb-4 lg:gap-5 lg:px-4 lg:py-4'>
      <figure className='w-[26.33%] lg:w-auto'>
        {item.product.url_image
          ?
          <img src={transformUrlGDrive(item.product.url_image)} className='w-[77px] h-[90px] rounded-2xl object-cover lg:w-[10rem] lg:h-32' />
          :
          <img src={notImage} className='w-[77px] h-[90px] rounded-2xl lg:w-[10rem] lg:h-32' />
        }
      </figure>
      <div className='flex justify-between pt-[2px] w-[73.67%] pr-[2px] lg:w-full lg:pt-0'>
        <div className='flex flex-col text-xs justify-between'>
          <div className='flex flex-col lg:pt-1'>
            <span className='text-sm text-primary lg:text-lg'>{capitalize(item.product.name)}</span>
            <span className='font-sanzBold lg:text-sm'>
              {item.quantity === 1 ? `${item.quantity} unidad ` : `${item.quantity} unidades `}
              - {calculateGrs(item)}</span>
          </div>
          {showOptions && <span className='font-publicSans pb-3 text-[11px] underline cursor-pointer lg:text-xs lg:leading-5 lg:pb-0' onClick={handleDeleteProduct}>Quitar</span>}
        </div>
        <div className='flex flex-col items-end pb-3 justify-between lg:pt-3 lg:justify-start lg:gap-3 lg:pr-1 lg:pb-0'>
          <span className='text-sm font-bold lg:text-[22px] lg:leading-7'>${item.quantity * item.product.price}</span>
          {showOptions && (
            <div className='w-[65px] h-[23px] lg:w-[79px] lg:h-[29px]'>
              <AddRemoveItem handleChance={handleChange} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface ItemShoppingCarProps {
  item: CartItem,
  showMessageDelete?: (product: CartItem) => void
  showOptions: boolean
}

export default ItemShoppingCar;
