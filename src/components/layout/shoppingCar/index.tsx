import { useAppContext } from '../../../hooks';
import { useNavigate } from 'react-router-dom';

import Scrollbars from 'react-custom-scrollbars-2';
import Button from '../../common/button';
import IconButton from '../../common/iconButton';
import ItemShoppingCarMini from '../../common/itemShoppingCarMini';

import { calculateTotal, roundToXDigits } from '../../../helpers/productHelper';
import { useTranslation } from 'react-i18next';

const ShoppingCar = ({ onClose, show }: shoppingCarProps) => {
  // Hooks
  const { t } = useTranslation();
  const { products } = useAppContext();
  const navigate = useNavigate();

  // Constants
  const collapsedClass = show === null ? 'hidden' : show ? 'animate__slideInRight' : 'animate__slideOutRight';

  // Component
  return (
    <div
      className={`
        bg-white w-full h-screen fixed right-0 
        z-50 box-border top-0 shadow-2xl p-2 
        md:w-96 md:p-5
        animate__faster300 animate__animated ${collapsedClass}
      `}
    >
      <div className='flex items-center text-primary'>
        <IconButton name='close' onClick={onClose} shadow={false} />
        <span>{t('carTitle')}</span>
      </div>
      <div className='max_size_shoppingcar'>
        {products.length > 6 ? (
          <Scrollbars style={{ height: 'calc(100vh - 280px)' }}>
            {products.map((product, index) => (
              <div
                key={`cartItem-${product.product.id}`}
                className={`${index + 1 < products.length && 'border-b border-[#c9c9c9]'} lg:px-0`}
              >
                <ItemShoppingCarMini item={product} />
              </div>
            ))}
          </Scrollbars>
        ) : (
          <div>
            {products.map((product, index) => (
              <div
                key={`cartItem-${product.product.id}`}
                className={`${index + 1 < products.length && 'border-b border-[#c9c9c9]'} lg:px-0`}
              >
                <ItemShoppingCarMini item={product} />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className='bg-[#dbdbdb] rounded-xl px-4 mt-[6px] mb-3 flex justify-between items-center py-2 font-bold text-lg lg:mt-6 lg:py-2 lg:pl-3 lg:pr-4'>
        <p>Total</p>
        <span>${roundToXDigits(calculateTotal(products, false), 2)}</span>
      </div>
      <div className='flex flex-col gap-2 font-sanzBold'>
        <Button className='bg-primary text-[#fad7b1]' onClick={() => navigate('/canasta')}>
          {t('carBasketButton')}
        </Button>
        <Button className='ring-1 ring-primary text-primary' onClick={onClose}>
          {t('carShoppingButton')}
        </Button>
      </div>
    </div>
  );
};

interface shoppingCarProps {
  show?: boolean | null;
  onClose: () => void;
}

export default ShoppingCar;
