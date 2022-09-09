import { useAppContext } from '../../hooks';

import { calculateTotalPayment } from '../../helpers/paymentHelper';
import { calculateTotal } from '../../helpers/productHelper';

import { shippingTypeForm } from '../../interfaces/checkout';

const TotalSection = ({ showTaxes, shippingInfo = { type: 'estandar', price: 90 } }:TotalSectionProps) => {
  // Hooks
  const { products } = useAppContext();

  return (
    <div className='mt-2 lg:mt-4'>
      <div className='flex flex-col font-sanzSemiBold text-xs tracking-[-0.3px] pb-6 lg:text-sm lg:border-b lg:border-[#4A4A4A] lg:pb-3'>
        <div className='mb-4 flex justify-between lg:mb-3'>
          <span>Subtotal</span>
          <span>${calculateTotal(products)}</span>
        </div>
        {calculateTotal(products) < 750 &&
          <div className='flex justify-between'>
            <span>Envio</span>
            <span>${shippingInfo.price}</span>
          </div>
        }
      </div>
      <div className='bg-[#dbdbdb] rounded-xl px-4 mt-[6px] flex justify-between items-center py-2 font-bold text-lg lg:mt-6 lg:py-2 lg:pl-3 lg:pr-4'>
        <div>
            Total
          {showTaxes && <div className='text-xs font-subTitles'>Incluye $23,000 de impuestos</div>}
        </div>
        <span>${calculateTotalPayment(products, shippingInfo)}</span>
      </div>
    </div>

  );
};

interface TotalSectionProps {
  showTaxes?: boolean;
  shippingInfo?: shippingTypeForm;
}

export default TotalSection;
