import { calculateTotal } from '../../helpers/productHelper';
import { useAppContext } from '../../hooks';

const TotalSection = ({ showTaxes }:TotalSectionProps) => {
  const { products } = useAppContext();

  return (
    <div className='mt-4'>
      <div className='flex flex-col font-sanzSemiBold text-xs tracking-[-0.3px] pb-6 lg:text-sm lg:border-b lg:border-[#4A4A4A] lg:pb-3'>
        <div className='mb-3 flex justify-between'>
          <span>Subtotal</span>
          <span>${calculateTotal(products)}</span>
        </div>
        <div className='flex justify-between'>
          <span>Envio</span>
          <span>$12.000</span>
        </div>
      </div>
      <div className='bg-[#dbdbdb] rounded-xl px-5 flex justify-between items-center py-1 font-bold text-lg lg:mt-6 lg:py-2 lg:px-2'>
        <div>
            Total
          {showTaxes && <div className='text-xs font-subTitles'>Incluye $23,000 de impuestos</div>}
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
