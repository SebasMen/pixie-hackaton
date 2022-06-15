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
        flex flex-col justify-between rounded-lg items-start 
        gap-4 bg-primary px-5 py-10 transform transition-all
        duration-150 animate__animated animate__fadeIn
        md:items-center md:gap-0 md:flex-row lg:px-14
        ${checked ? 'bg-opacity-[0.2]' : 'bg-opacity-[0.1]'} 
      `}
    >
      {/* Check */}
      <div className='flex items-center md:gap-10'>
        <div>
          <CheckField onChange={setChecked} />
        </div>
        <div className='font-extrabold text-primary text-xl'>
          {name}
        </div>
      </div>

      {/* Quantity */}
      <div className='flex items-center gap-4'>
        <TextField value={quantity} handler={() => console.log('quantity')} name={'quantity'} type='number' fieldClassName='font-subTitles font-semibold w-14' />
        <div className='flex flex-col'>
          <span className='font-extrabold'>porciones por</span>
          <span className='text-sm font-subTitles'>(500gms porción)</span>
        </div>
      </div>

      {/* Price */}
      <div className='w-full bg-white p-4 rounded-xl font-subTitles font-semibold md:w-auto md:px-8'>
        ${price}
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
