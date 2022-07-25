import Scrollbars from 'react-custom-scrollbars-2';
import { useNavigate } from 'react-router-dom';
import { calculateTotal } from '../../../helpers/productHelper';
import { useAppContext } from '../../../hooks';
import Button from '../../common/button';
import IconButton from '../../common/iconButton';
import ItemShoppingCarMini from '../../common/itemShoppingCarMini';

const ShoppingCar = ({ onClose, show }: shoppingCarProps) => {
  // Hooks
  const { products } = useAppContext();
  const navigate = useNavigate();

  // Constants
  const collapsedClass = (show === null) ? 'hidden' : show ? 'animate__slideInRight' : 'animate__slideOutRight';

  // Component
  return (
    <aside
      className={`
        bg-white w-full h-screen fixed right-0 
        z-30 box-border top-0 shadow-2xl p-2 
        md:w-96 md:p-5
        animate__faster300 animate__animated ${collapsedClass}
      `}
    >
      <div className='flex items-center text-primary'>
        <IconButton name='close' onClick={onClose} shadow={false} />
        <span>RESUMEN DE TU PEDIDO</span>
      </div>
      <div className='max_size_shoppingcar'>
        { products.length > 6
          ?
          <Scrollbars style={{ height: 'calc(100vh - 280px)' }}>
            {products.map((product, index) =>
              <div key={`cartItem-${product.product.id}`} className={`${(index + 1) < products.length && 'border-b border-[#c9c9c9]'} lg:px-0`}>
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
      </div>
      <div className='bg-[#dbdbdb] rounded-xl px-4 mt-[6px] mb-3 flex justify-between items-center py-2 font-bold text-lg lg:mt-6 lg:py-2 lg:pl-3 lg:pr-4'>
        <p>
            Total
        </p>
        <span>${calculateTotal(products)}</span>
      </div>
      <div className='flex flex-col gap-2 font-sanzBold'>
        <Button className='bg-primary text-[#fad7b1]' onClick={() => navigate('/basket')}>
          Ver canasta
        </Button>
        <Button className='ring-1 ring-primary text-primary' onClick={onClose}>
          Seguir comprando
        </Button>
      </div>
    </aside>
  );
};

interface shoppingCarProps {
  show?: boolean | null;
  onClose: () => void
}

export default ShoppingCar;
