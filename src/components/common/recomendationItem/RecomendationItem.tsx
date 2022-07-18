import { useEffect, useRef, useState } from 'react';
import CheckField from '../../form/checkField';
import TextField from '../../form/textField';

import { Product, ResultProduct } from '../../../interfaces/product';
import useForm from '../../../hooks/useForm';
import { capitalize } from '../../../helpers/capitalize';

const RecomendationItem = ({ data, toggle, updateCant, checked = false, grams = 500 }: RecomendationItemProps) => {
  // Hooks
  const { current: defaultCant } = useRef(Math.round((grams / parseInt(data.product.presentation, 10)) * 28));
  const [price, setPrice] = useState(0);

  const {
    form: { cant },
    handleFormChange,
  } = useForm({ cant: defaultCant }, () => { });

  useEffect(() => {
    updateCant(data.product.id, cant);

    return () => { };
  }, [cant]);


  // Component
  return (
    <div
      className={`
          flex flex-col justify-between rounded-2xl items-start 
          gap-4 bg-primary px-5 transform transition-all
          duration-150 animate__animated animate__fadeIn
          md:items-center md:gap-0 md:flex-row lg:px-[4rem]
          mb-[10px]
          ${checked ? 'bg-opacity-[0.2]' : 'bg-opacity-[0.1]'} 
        `}
    >
      {/* Check */}
      <div className='flex items-center py-10 lg:w-[43%] lg2:w-[50%] xl2:w-[42%]'>
        <div className='flex items-center md:gap-11'>
          <CheckField onClick={() => toggle(data.product, cant)} sizeContainer='w-10 h-10 lg:w-[30px] lg:h-[30px]' />
          {/* name */}
          <div className='font-extrabold text-primary text-xl'>{capitalize(data.product.name)}</div>
        </div>
      </div>

      <div className='flex items-center lg:w-[57%] lg2:w-[50%] xl2:w-[58%]'>
        {/* Quantity */}
        <div className='flex items-center gap-4 text-sm flex-shrink-0 lg:text-xl lg:gap-10'>
          <TextField
            value={cant}
            handler={handleFormChange}
            name='cant'
            type='number'
            className='flex-grow-0 w-min min-w-[3.5rem] max-w-[4.5rem] flex-shrink-0'
            fieldClassName='font-subTitles font-semibold'
          />
          <div className='flex-shrink-0 flex flex-col text-center lg:pt-4'>
            <span className='font-extrabold'>porciones por</span>
            <span className='text-sm font-subTitles'>({data.product.presentation} porción)</span>
          </div>
        </div>

        {/* Price */}
        <div className='w-full h-10 bg-white py-2 px-5 rounded-3xl font-subTitles font-semibold md:h-full md:text-xl md:w-auto md:ml-9'>
          ${data.product.price * data.quantity}
        </div>
      </div>
    </div>
  );
};

interface RecomendationItemProps {
  data: ResultProduct;
  toggle: (product: Product, cant?: number) => void;
  checked?: boolean;
  grams?: number;
  updateCant: (id: string, value: number) => void;
}

export default RecomendationItem;
