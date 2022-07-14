import AddRemoveItem from '../../addRemoveItem/AddRemoveItem';

import useShoppingCar from '../../../hooks/useShoppingCar';
import { calculateGrs } from '../../../helpers/productHelper';
import { transformUrlGDrive } from '../../../helpers/imgHelper';
import { capitalize } from '../../../helpers/capitalize';
import { CartItem } from '../../../interfaces/basket';

const ItemShoppingCar = ({ item, showMessageDelete, showOptions }: ItemShoppingCarProps) => {
  const { deleteProduct, addRemoveProduct } = useShoppingCar();

  const handleDeleteProduct = () => {
    deleteProduct(item.product.id);
    if (showMessageDelete)
      showMessageDelete(item);
  };

  const handleChange = (value: number) =>
    addRemoveProduct(item.product, value);

  return (
    <div className='grid grid-flow-col mb-3 py-2 px-4 bg-white rounded-[20px] lg:p-4 lg:mb-4 lg:flex lg:gap-5'>
      <figure>
        <img src={transformUrlGDrive(item.product.url_image)} className='w-[77px] h-[90px] rounded-2xl object-cover lg:w-[10rem] lg:h-32' />
      </figure>
      <div className='grid grid-flow-col lg:flex lg:justify-between lg:w-full'>
        <div className='flex flex-col text-xs justify-between'>
          <div className='flex flex-col lg:pt-1'>
            <span className='text-sm text-primary lg:text-lg'>{capitalize(item.product.name)}</span>
            <span className='font-sanzBold lg:text-sm'>{calculateGrs(item)}</span>
          </div>
          {showOptions && <span className='font-publicSans underline cursor-pointer lg:text-xs lg:leading-5' onClick={handleDeleteProduct}>Quitar</span>}
        </div>
        <div className='flex flex-col items-end justify-between lg:pt-3 lg:justify-start lg:gap-3 lg:pr-1'>
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
