import { useAppContext } from '../../../hooks';
import { Product } from '../../../interfaces/product';
import IconButton from '../iconButton';

const ItemShoppingCar = ({ product }: ItemShoppingCarProps) => {
  const { updateContext } = useAppContext();

  const handleDeleteProduct = () => {
    updateContext(old => ({ ...old, products: [...old.products.filter(item => item.id !== product.id)] }));
  };

  return (
    <div className='grid grid-flow-col gap-4 mb-6 items-center'>
      <figure>
        <img src={product.img} className='w-16 h-16 rounded-2xl object-cover'/>
      </figure>
      <p>{product.name}</p>
      <p className='font-bold'>${product.totalPrice}</p>
      <IconButton name='close' onClick={handleDeleteProduct} shadow={false}/>
    </div>
  );
};

interface ItemShoppingCarProps{
    product: Product
}

export default ItemShoppingCar;
