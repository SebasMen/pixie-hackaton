import { useAppContext } from '../../../hooks';
import Button from '../../common/button';
import IconButton from '../../common/iconButton';
import ItemShoppingCar from '../../common/itemShoppingCar';

const ShoppingCar = ({ onClose, show }: shoppingCarProps) => {
  // Hooks
  const { products } = useAppContext();

  // Constants
  const collapsedClass = (show === null) ? 'hidden' : show ? 'animate__slideInRight' : 'animate__slideOutRight';

  // Component
  return (
    <aside
      className={`
        bg-white w-full h-screen absolute right-0 
        z-30 box-border top-0 shadow-2xl p-2 
        md:w-96 md:p-5
        animate__faster300 animate__animated ${collapsedClass}
      `}
    >
      <div className='flex items-center'>
        <IconButton name='close' onClick={onClose} shadow={false} />
        <span>Carrito de compra</span>
      </div>
      <div>
        {/* {products.map(product => <ItemShoppingCar key={`item-${product.id}`} product={product} />)} */}
      </div>
      <div className='mt-auto'>
        <Button className='w-full bg-primary text-white'>Comprar</Button>
      </div>
    </aside>
  );
};

interface shoppingCarProps {
  show?: boolean | null;
  onClose: () => void
}

export default ShoppingCar;
