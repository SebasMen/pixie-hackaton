import { useState } from 'react';

import IconButton from '../../components/common/iconButton';

export const ProductCounter = ({ price = 0, onPriceChange, productQuantity }: ProductCounterProps) => {
  // Hooks
  const [count, setCount] = useState(1);

  // Methods
  const handleCount = (value: number) => {
    const newCount = count + value;

    if (newCount < 1 || newCount > productQuantity) return;

    setCount(newCount);
    onPriceChange(newCount, (newCount * price));
  };

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newCount = parseInt(e.target.value, 10);
    if (newCount > productQuantity)
      newCount = productQuantity;
    setCount(count => newCount);
    onPriceChange(newCount, (newCount * price));
  };

  // Constants
  const totalPrice = count * price;
  const showTotal = totalPrice > price;

  // Component
  return (
    <div className='w-full flex justify-between gap-1 px-8 my-2 md:px-0'>
      <div className='flex items-center gap-6 rounded-3xl h-14 bg-grayText bg-opacity-60 text-white w-2/5'>
        <IconButton.mini name='remove' onClick={() => handleCount(-1)} className='shadow-none pl-2 w-1/3' />
        <input
          value={count}
          type='number'
          className='w-1/3 bg-transparent text-center inputWithoutArrow'
          onChange={onChangeValue}
          onClick={e => {
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
          }}
        />
        <IconButton.mini name='add' onClick={() => handleCount(1)} className='shadow-none pr-2 w-1/3' />
      </div>
      <div className='flex flex-col flex-grow items-end h-full transform transition-all w-3/5'>
        <div className='flex gap-2 items-end text-pixieLightBlue font-paragraph'>
          <h2 className={`animate__animated animate__faster ${showTotal ? 'text-base text-gray-500 animate__fadeIn' : 'text-3xl font-bold animate__bounceIn'}`}>${price}</h2>
          {showTotal && <h2 className='text-3xl font-bold animate__animated animate__bounceIn'>${totalPrice}</h2>}
        </div>
        <p className='text-pixieLightBlue font-paragraph text-sm'>{(count * 500) + ' gr'}</p>
      </div>
    </div>
  );
};

interface ProductCounterProps {
  price?: number;
  onPriceChange: (quantity: number, price: number) => void;
  productQuantity: number;
}

export default ProductCounter;
