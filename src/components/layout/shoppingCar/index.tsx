import { useAppContext } from '../../../hooks';
import Button from '../../common/button';
import IconButton from '../../common/iconButton';
import ItemShoppingCar from '../../common/itemShoppingCar';

const ShoppingCar = ({ onClose }: shoppingCarProps) => {
  const { products } = useAppContext();
  return (
    <aside className='bg-white w-full h-screen md:w-96 absolute right-0 z-10 box-border top-0 shadow-2xl pl-2'>
      <div className='flex items-center'>
        <IconButton name='arrow_back_ios' onClick={ () => onClose()} shadow={false}/>
        <span>Carrito de compra</span>
      </div>
      <div>
        {products.map(product => <ItemShoppingCar key={`item-${product.id}`} product={product}/>)}
      </div>
      <div className='mt-auto'>
        <Button className='w-full bg-primary text-white'>Comprar</Button>
      </div>
    </aside>
  );
};

interface shoppingCarProps{
    onClose: () => void
}

export default ShoppingCar;
