import { useState } from 'react';
import { useAppContext } from '../../hooks';

import TotalSection from '../../views/Basket/TotalSection';
import ItemShoppingCarMini from '../../components/common/itemShoppingCarMini';

import { calculateTotal } from '../../helpers/productHelper';
import { shippingTypeForm } from '../../interfaces/checkout';

import { basketBlue, expandMoreBlue } from '../../assets/vectors';
import Scrollbars from 'react-custom-scrollbars-2';

const ResumenProductSection = ({ shippingInfo }:ResumenProductSectionProps) => {
  // Hooks
  const [isActive, setIsActive] = useState(false);
  const { products } = useAppContext();

  return (
    <>
      <div
        className={'flex justify-between py-5 px-5 items-center h-[70px] lg:px-0'}
        onClick={() => setIsActive(!isActive)}>
        <div className='flex gap-5 w-4/6'>
          <img src={basketBlue} className='hidden w-5 h-5 lg:block' />
          <div className='text-sm font-sanzBold text-pixieLightBlue leading-tight pt-2 lg:pt-0'>
            <p>
              Mostrar resumen del
            </p>
            <p>
              pedido
              {isActive
                ?
                <img
                  src={expandMoreBlue}
                  className='w-5 h-5 inline-flex'
                />
                :
                <img
                  src={expandMoreBlue}
                  className='w-5 h-5 rotate-180 inline-flex'
                />
              }
            </p>
          </div>
        </div>
        <div className='text-lg w-2/6 text-right font-bold font-paragraph text-pixieLightBlue'>
          ${calculateTotal(products, false)}
        </div>
      </div>
      <div>

        {/* Product list */}
        {isActive && (
          <div className='px-5 pb-4 lg:px-0 lg:mt-[8px]'>
            {products.length > 2
              ?
              <Scrollbars style={{ height: '200px' }}>
                {products.map((product, index) =>
                  <div key={`cartItem-${product.product.id}`}
                    className={`${(index + 1) < products.length && 'border-b border-[#c9c9c9]'} lg:px-0`}
                  >
                    <ItemShoppingCarMini item={product} />
                  </div>
                )}
              </Scrollbars>
              :
              <div>
                {products.map((product, index) =>
                  <div key={`cartItem-${product.product.id}`} className={`${(index + 1) < products.length && 'border-b border-[#c9c9c9]'} lg:px-0`}>
                    <ItemShoppingCarMini item={product} />
                  </div>
                )}
              </div>
            }
            {/* Sections */}
            <div className='lg:hidden'>
              <TotalSection shippingInfo={shippingInfo} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

interface ResumenProductSectionProps {
  shippingInfo: shippingTypeForm;
}

export default ResumenProductSection;
