import { useState } from 'react';
import { basket } from '../../assets/vectors';
import Icon from '../../components/common/icon';
import ItemShoppingCar from '../../components/common/itemShoppingCar';
import TotalSection from '../../views/Basket/TotalSection';
import { calculateTotal } from '../../helpers/productHelper';
import { useAppContext } from '../../hooks';

const ResumenProductSection = ({ padding }:ResumenProductSectionProps) => {
  const [isActive, setIsActive] = useState(false);
  const { products } = useAppContext();

  return (
    <>
      <div
        className={`flex justify-between bg-[#E4E4E4] px-6 py-5 items-center h-[70px]
        ${padding ? padding : 'px-6'}`}
        onClick={() => setIsActive(!isActive)}>
        <div className='flex gap-5 items-center w-4/6'>
          <img src={basket} className='w-5 h-5 brightness-0' />
          <div>
            <span className='text-sm font-bold'>
              Mostrar resumen del pedido
            </span>
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
          </div>
        </div>
        <div className='text-[17px] w-2/6 text-right font-bold'>
          ${calculateTotal(products)}
        </div>
      </div>
      <div>
        {isActive && (
          <div className='bg-[#E4E4E4]'>
            {/* Product list */}
            {products.map(item => <ItemShoppingCar key={`item-${item.product.id}`} item={item} showOptions={false}/>)}
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
