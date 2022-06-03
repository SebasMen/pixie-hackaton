import { useState } from 'react';

import IconButton from '../../components/common/iconButton';

export const ProductCounter = ({ price = 0, onPriceChange }: ProductCounterProps) => {
  // Hooks
  const [count, setCount] = useState(1);

  // Methods
  const handleCount = (value: number) => {
    const newCount = count + value;

    if (!(newCount > 0)) return;

    setCount(newCount);
    onPriceChange(newCount * price);
  };

  // Constants
  const totalPrice = count * price;
  const showTotal = totalPrice > price;

  // Component
  return (
    <div className='w-full flex gap-1 px-7 my-2 md:px-0'>
      <div className='w-max flex items-center p-4 rounded-3xl bg-gray-100'>
        <IconButton.mini name='add' onClick={() => handleCount(1)} className='shadow-none p-2' />
        <span className='px-4 text-xl'>
          {count}
        </span>
        <IconButton.mini name='remove' onClick={() => handleCount(-1)} className='shadow-none p-2' />
      </div>
      <div className='flex flex-col flex-grow items-end h-full transform transition-all'>
        <div className='flex gap-2 items-end'>
          <h2 className={`animate__animated animate__faster ${showTotal ? 'text-base text-gray-500 animate__fadeIn' : 'text-3xl font-bold animate__bounceIn'}`}>${price}</h2>
          {showTotal && <h2 className='text-3xl font-bold animate__animated animate__bounceIn'>${totalPrice}</h2>}
        </div>
        <p>500 grs</p>
      </div>
    </div>
  );
};

interface ProductCounterProps {
  price?: number;
  onPriceChange: (prize: number) => void;
}

export default ProductCounter;
