import { useAppContext } from '../../hooks';

import { useEffect, useState } from 'react';
import { calculateTotalPayment } from '../../helpers/paymentHelper';
import { calculateIva, calculateTotal } from '../../helpers/productHelper';

import { shippingTypeForm, typeShipping } from '../../interfaces/checkout';

const TotalSection = ({ showTaxes = true, shippingInfo = { type: 'estandar', price: 90 }, setUpdateShippingPrince }:TotalSectionProps) => {
  // Hooks
  const { products, location } = useAppContext();
  const [country, setCountry] = useState<string>('MX');

  useEffect(() => {
    setCountry(location.geoplugin_countryCode);
    return () => {};
  }, [location]);

  // Update shipping value
  useEffect(() => {
    const total = calculateTotal(products, false);
    if (total > 750 && setUpdateShippingPrince)
      setUpdateShippingPrince('gratis', 0);
  }, [products]);

  return (
    <div className='mt-2 lg:mt-4'>
      <div className='flex flex-col font-sanzSemiBold text-xs tracking-[-0.3px] pb-6 lg:text-sm lg:border-b lg:border-[#4A4A4A] lg:pb-3'>
        {country === 'US'
          ?
          <div className='mb-4 flex justify-between lg:mb-3'>
            <span>Subtotal</span>
            <span>${calculateTotal(products, false)}</span>
          </div>
          :
          <div className='mb-4 flex justify-between lg:mb-3'>
            <span>Subtotal</span>
            <span>${calculateTotal(products, true)}</span>
          </div>
        }
        <div className='mb-4 flex justify-between lg:mb-3'>
          <span>Impuestos</span>
          {country === 'US'
            ?
            <span>Por determinar</span>
            :
            <span>${calculateIva(products)}</span>
          }
        </div>
        {calculateTotal(products, false) < 750 &&
          <div className='flex justify-between'>
            <span>Envio</span>
            <span>${shippingInfo.price}</span>
          </div>
        }
      </div>
      <div className='bg-[#dbdbdb] rounded-xl px-4 mt-[6px] py-2 font-bold text-lg lg:mt-6 lg:py-2 lg:pl-3 lg:pr-4'>
        {country === 'US'
          ?
          <div className='flex justify-between items-center'>
            Total estimado
            <p>${calculateTotalPayment(products, shippingInfo, true)}
              <span> + Impuestos</span>
            </p>
          </div>
          :
          <div className='flex justify-between items-center'>
            Total
            <p>${calculateTotalPayment(products, shippingInfo, true)}</p>
          </div>
        }
      </div>
    </div>

  );
};

interface TotalSectionProps {
  showTaxes?: boolean;
  shippingInfo?: shippingTypeForm;
  setUpdateShippingPrince?: (name:typeShipping, value: number) => void
}

export default TotalSection;
