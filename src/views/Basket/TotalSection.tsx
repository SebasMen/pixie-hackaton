import { calculateTotal } from '../../helpers/productHelper';
import { useAppContext } from '../../hooks';

const TotalSection = () => {
  const { products } = useAppContext();

  return (
    <div className='mt-4'>
      <div className='flex justify-between text-xs mb-2'>
        <span>Subtotal</span>
        <span>${calculateTotal(products)}</span>
      </div>
      <div className='flex justify-between text-xs mb-4'>
        <span>codigo</span>
        <span>$0</span>
      </div>
      <div className='ring-1 ring-primary rounded-xl flex justify-between px-3 py-3 font-bold text-lg'>
        <span>Total</span>
        <span>${calculateTotal(products)}</span>
      </div>
    </div>

  );
};

export default TotalSection;
