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
        flex justify-between rounded-lg items-center 
        bg-primary px-5 py-10 transform transition-all
        duration-150 animate__animated animate__fadeIn
        lg:px-14
        ${checked ? 'bg-opacity-[0.2]' : 'bg-opacity-[0.1]'} 
      `}
    >
      <div>
        <CheckField onChange={setChecked} />
      </div>
      <div className='font-extrabold text-primary text-xl'>
        {name}
      </div>
      <div className='rounded-xl w-20'>
        <TextField value={quantity} handler={() => console.log('quantity')} name={'quantity'} type='number' fieldClassName='font-subTitles font-semibold' />
      </div>
      <div className='flex flex-col'>
        <span className='font-extrabold'>porciones por</span>
        <span className='text-sm font-subTitles'>(500gms porción)</span>
      </div>
      <div className='bg-white p-4 rounded-xl font-subTitles font-semibold'>
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
