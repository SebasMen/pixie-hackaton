import { useState } from 'react';
import { basketRed } from '../../assets/vectors';
import Icon from '../../components/common/icon';
import TotalSection from '../../views/Basket/TotalSection';
import { calculateTotal } from '../../helpers/productHelper';
import { useAppContext } from '../../hooks';
import ItemShoppingCarMini from '../../components/common/itemShoppingCarMini';

const ResumenProductSection = ({ padding }:ResumenProductSectionProps) => {
  const [isActive, setIsActive] = useState(false);
  const { products } = useAppContext();

  return (
    <>
      <div
        className={'flex justify-between py-5 items-center h-[70px]'}
        onClick={() => setIsActive(!isActive)}>
        <div className='flex gap-5 w-4/6'>
          <img src={basketRed} className='w-5 h-5' />
          <div className='text-sm font-sanzBold text-primary'>
            <p>
              Mostrar resumen del
            </p>
            <p>
              pedido
              {isActive
                ?
                <Icon
                  name='expand_less'
                  size='xs'
                />
                :
                <Icon
                  name='expand_more'
                  size='xs'
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
          <div>
            {/* Product list */}
            {products.map((item, index) =>
              <div key={`item-${item.product.id}`} className={`${(index + 1) < products.length && 'border-b border-[#c9c9c9]'} mb-4`}>
                <ItemShoppingCarMini item={item}/>
              </div>
            )}
            {/* Sections */}
            <div className='lg:hidden'>
              <TotalSection showTaxes={true}/>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

interface ResumenProductSectionProps {
  padding?: string;
}

export default ResumenProductSection;
