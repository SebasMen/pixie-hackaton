import CheckField from '../../form/checkField';
import TextField from '../../form/textField';

const RecomendationItem = ({ name, quantity, price }: RecomendationItemProps) => {
  // Handlers
  const handleCheck = (value: boolean) => {
    console.log(value);
  };

  // Component
  return (
    <div className='bg-primaryOpacity flex justify-between rounded-lg items-center lg:px-14 px-5 py-10 mt-3'>
      <div>
        <CheckField onChange={handleCheck} />
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
