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
    <div className='grid grid-flow-col mb-6 items-center font-paragraph pb-7 border-b border-primary'>
      <figure>
        <img src={transformUrlGDrive(item.product.url_image)} className='w-[70px] h-[70px] rounded-2xl object-cover' />
      </figure>
      <div className='flex flex-col text-xs gap-5'>
        <div className='flex flex-col'>
          <span className='text-sm font-bold'>{capitalize(item.product.name)}</span>
          <span className='font-medium'>{calculateGrs(item)}</span>
        </div>
        <span className='underline cursor-pointer' onClick={handleDeleteProduct}>{showOptions && <p>Quitar</p>}</span>
      </div>
      <div className='flex flex-col gap-5 justify-end items-end'>
        <span className='text-sm font-bold'>${item.quantity * item.product.price}</span>
        {showOptions && (
          <div className='w-[71px] h-[30px] '>
            <AddRemoveItem handleChance={handleChange} />
          </div>
        )}
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
