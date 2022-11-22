import useShoppingCar from '../../../hooks/useShoppingCar';

import AddRemoveItem from '../addRemoveItem/AddRemoveItem';

import { calculateGrs, roundToXDigits } from '../../../helpers/productHelper';
import { transformUrlGDrive } from '../../../helpers/imgHelper';
import { capitalize } from '../../../helpers/capitalize';
import { CartItem } from '../../../interfaces/basket';
import { notImage, trashIcon } from '../../../assets/vectors';
import { useEffect, useState } from 'react';

const ItemShoppingCar = ({ item, showMessageDelete, showOptions }: ItemShoppingCarProps) => {
  // Hooks
  const { deleteProduct, addRemoveProduct } = useShoppingCar();
  const [counter, setCounter] = useState(item.quantity);

  useEffect(() => {
    setCounter(item.quantity);
    return () => {};
  }, [item.quantity]);

  // Handle
  const handleDeleteProduct = () => {
    deleteProduct(item.product.id);
    if (showMessageDelete)
      showMessageDelete(item);
  };

  const handleChange = (value: number) => {
    const newValue = value + counter;
    if (newValue > item.product.quantity)
      return;
    setCounter(counter => value + counter);
    addRemoveProduct(item.product, value);
  };

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
            <span className='text-sm text-pixieLightBlue lg:text-lg'>{capitalize(item.product.name)}</span>
            {item.product.productsInside
              ?
              <div className='flex flex-col '>
                {item.product.productsInside.map(prod =>
                  <span key={prod.id} className='font-sanzBold lg:text-sm'>
                    {prod.name_en} (x{prod.quantity}),
                  </span>)}
              </div>
              :
              <span className='font-sanzBold lg:text-sm'>
                {item.quantity === 1 ? `${item.quantity} unidad ` : `${item.quantity} unidades `}
              - {calculateGrs(item)}
              </span>
            }
          </div>
          {showOptions &&
            <img
              src={trashIcon}
              onClick={handleDeleteProduct}
              className=' pb-3 w-[12px] h-[25px] cursor-pointer text-pixieLightBlue '
            />
          }
        </div>
        <div className='flex flex-col items-end pb-3 justify-between lg:pt-3 lg:justify-start lg:gap-3 lg:pr-1 lg:pb-0'>
          <span className='text-sm font-bold lg:text-[22px] lg:leading-7'>${roundToXDigits(item.quantity * item.product.price, 2)}</span>
          {showOptions && (
            <div className='w-[65px] h-[23px] lg:w-[79px] lg:h-[29px]'>
              <AddRemoveItem handleChance={handleChange} counter={counter} />
              {item.product.productsInside &&
                <span className='text-pixieLightBlue text-[8px]'>(Caja x20 unidades)</span>
              }
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
