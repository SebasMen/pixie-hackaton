import { calculateTotal } from '../../helpers/productHelper';
import { useAppContext } from '../../hooks';

const TotalSection = ({ showTaxes }:TotalSectionProps) => {
  const { products } = useAppContext();

  return (
    <div className='mt-4'>
      <div className='flex justify-between text-xs mb-2 lg:text-sm'>
        <span>Subtotal</span>
        <span>${calculateTotal(products)}</span>
      </div>
      <div className='flex justify-between text-xs mb-4 lg:border-b lg:border-primary lg:pb-4 lg:text-sm'>
        <span>codigo</span>
        <span>$0</span>
      </div>
      <div className='ring-1 ring-primary rounded-xl px-3 flex justify-between items-center py-1 font-bold text-lg lg:mt-11 lg:py-2'>
        <div>
            Total
          {showTaxes && <div className='text-[10px]'>Incluye $23,000 de impuestos</div>}
        </div>
        <span>${calculateTotal(products)}</span>
      </div>
    </div>

  );
};

interface TotalSectionProps {
  showTaxes?: boolean
}


export default TotalSection;
