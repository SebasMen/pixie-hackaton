import { useAppContext } from '../../hooks';

import { useEffect } from 'react';
import { calculateTotalPayment, getPriceDescount } from '../../helpers/paymentHelper';
import { calculateIva, calculateTotal, roundToXDigits } from '../../helpers/productHelper';

import { shippingTypeForm, typeShipping } from '../../interfaces/checkout';
import { couponComplete } from '../../interfaces/coupon';

const TotalSection = ({ showTaxes = true, shippingInfo = { type: 'estandar', price: 90 }, setUpdateShippingPrince, coupon }:TotalSectionProps) => {
  // Hooks
  const { products, location } = useAppContext();

  // Update shipping value
  useEffect(() => {
    const total = calculateTotal(products, false);
    if (total > 750 && setUpdateShippingPrince)
      setUpdateShippingPrince('gratis', 0);
  }, [products]);

  return (
    <div className='mt-2 lg:mt-4'>
      <div className='flex flex-col font-sanzSemiBold text-xs tracking-[-0.3px] pb-6 lg:text-sm lg:border-b lg:border-[#4A4A4A] lg:pb-3'>
        {location === 'USA'
          ?
          <div className='mb-4 flex justify-between lg:mb-3'>
            <span>Subtotal</span>
            <span>${roundToXDigits(calculateTotal(products, false), 2)}</span>
          </div>
          :
          <div className='mb-4 flex justify-between lg:mb-3'>
            <span>Subtotal</span>
            <span>${calculateTotal(products, true)}</span>
          </div>
        }
        <div className='mb-4 flex justify-between lg:mb-3'>
          <span>Impuestos</span>
          {location === 'USA'
            ?
            <span>Por determinar</span>
            :
            <span>${calculateIva(products)}</span>
          }
        </div>
        {calculateTotal(products, false) < 750 &&
          <div className='flex justify-between'>
            <span>Envio</span>
            <span className='gt-price-shipping'>${shippingInfo.price}</span>
          </div>
        }

        {coupon && (<div>
          <div className='flex justify-between mt-3'>
            <span>Descuento</span>
            {coupon.couponType.key === 'percent' &&
               <span>$ {-roundToXDigits((getPriceDescount(products, coupon) - calculateTotal(products, false)), 2)}</span>
            }
            {coupon.couponType.key === 'discount' &&
               <span>${coupon.discount}</span>
            }
          </div>
        </div>)}
      </div>
      <div className='bg-[#dbdbdb] rounded-xl px-4 mt-[6px] py-2 font-bold text-lg lg:mt-6 lg:py-2 lg:pl-3 lg:pr-4'>
        {location === 'USA'
          ?
          <div className='flex justify-between items-center'>
            Total estimado
            <p>${calculateTotalPayment(products, shippingInfo, true, coupon)}
              <span> + Impuestos</span>
            </p>
          </div>
          :
          <div className='flex justify-between items-center'>
            Total
            <p className='gt-total-payment'>${roundToXDigits(calculateTotalPayment(products, shippingInfo, true, coupon), 2)}</p>
          </div>
        }
      </div>
    </div>

  );
};

interface TotalSectionProps {
  showTaxes?: boolean;
  shippingInfo?: shippingTypeForm;
  setUpdateShippingPrince?: (name:typeShipping, value: number) => void;
  coupon?: couponComplete
}

export default TotalSection;
