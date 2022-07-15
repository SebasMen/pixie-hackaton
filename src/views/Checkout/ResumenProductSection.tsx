import { useState } from 'react';
import { basketRed, expand_more } from '../../assets/vectors';
import Icon from '../../components/common/icon';
import TotalSection from '../../views/Basket/TotalSection';
import { calculateTotal } from '../../helpers/productHelper';
import { useAppContext } from '../../hooks';
import ItemShoppingCarMini from '../../components/common/itemShoppingCarMini';
import { shippingTypeForm } from '../../interfaces/checkout';

const ResumenProductSection = ({ shippingInfo }:ResumenProductSectionProps) => {
  const [isActive, setIsActive] = useState(false);
  const { products } = useAppContext();

  return (
    <>
      <div
        className={'flex justify-between py-5 px-5 items-center h-[70px] lg:px-0'}
        onClick={() => setIsActive(!isActive)}>
        <div className='flex gap-5 w-4/6'>
          <img src={basketRed} className='hidden w-5 h-5 lg:block' />
          <div className='text-sm font-sanzBold text-primary leading-tight pt-2 lg:pt-0'>
            <p>
              Mostrar resumen del
            </p>
            <p>
              pedido
              {isActive
                ?
                <img
                  src={expand_more}
                  className='w-5 h-5 rotate-180 inline-flex'
                />
                :
                <img
                  src={expand_more}
                  className='w-5 h-5 inline-flex'
                />
              }
            </p>
          </div>
        </div>
        <div className='text-lg w-2/6 text-right font-bold font-paragraph text-primary'>
          ${calculateTotal(products)}
        </div>
      </div>
      <div>
        {isActive && (
          <div className='px-5 pb-4 lg:px-0 lg:mt-[8px]'>
            {/* Product list */}
            {products.map((item, index) =>
              <div key={`item-${item.product.id}`} className={`${(index + 1) < products.length && 'border-b border-[#c9c9c9]'} lg:px-0`}>
                <ItemShoppingCarMini item={item}/>
              </div>
            )}
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
