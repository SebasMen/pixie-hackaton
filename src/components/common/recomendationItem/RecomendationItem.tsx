import { useState } from 'react';

import CheckField from '../../form/checkField';
import TextField from '../../form/textField';

const RecomendationItem = ({ name, quantity, price }: RecomendationItemProps) => {
  // Hooks
  const [checked, setChecked] = useState(false);

  // Component
  return (
    <div
      className={`
        flex flex-col justify-between rounded-2xl items-start 
        gap-4 bg-primary px-5 py-8 transform transition-all
        duration-150 animate__animated animate__fadeIn
        md:items-center md:gap-0 md:flex-row lg:px-10
        mb-[10px]
        ${checked ? 'bg-opacity-[0.2]' : 'bg-opacity-[0.1]'} 
      `}
    >
      {/* Check */}
      <div className='flex'>
        <div className='flex items-center md:gap-10 lg:mr-3'>
          <div>
            <CheckField onChange={setChecked} />
          </div>
        </div>
        {/* name */}
        <div className='font-extrabold text-primary text-xl lg:mr-10'>
          {name}
        </div>
      </div>

      <div className='flex items-center'>
        {/* Quantity */}
        <div className='flex items-center gap-4 text-sm lg:text-xl lg:mr-5'>
          <TextField value={quantity} handler={() => console.log('quantity')} name={'quantity'} type='number' className='flex-grow-0 w-min min-w-[3.5rem] max-w-[5rem]' fieldClassName='font-subTitles font-semibold' />
          <div className='flex-shrink-0 flex flex-col lg:ml-10'>
            <span className='font-extrabold'>rollitos por</span>
            <span className='text-sm font-subTitles'>(500gms porción)</span>
          </div>
        </div>

        {/* Price */}
        <div className='w-full h-10 bg-white py-2 px-5 rounded-3xl font-subTitles font-semibold md:h-full md:text-xl md:w-auto md:mr-12'>
          ${price}
        </div>
      </div>
    </div>
  );
};

interface RecomendationItemProps {
  name: string,
  quantity: number,
  price: number
}

export default RecomendationItem;
