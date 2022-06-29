import { capitalize } from '../../../helpers/capitalize';
import { transformUrlGDrive } from '../../../helpers/imgHelper';
import { calculateGrs, calculatePrice } from '../../../helpers/productHelper';
import useShoppingCar from '../../../hooks/useShoppingCar';
import { Product } from '../../../interfaces/product';
import AddRemoveItem from '../../addRemoveItem/AddRemoveItem';

const ItemShoppingCar = ({ product, showMessageDelete }: ItemShoppingCarProps) => {
  const { deleteProduct, addRemoveProduct } = useShoppingCar();

  const handleDeleteProduct = () => {
    deleteProduct(product);
    showMessageDelete(product);
  };

  const handleChange = (type: number) => {
    if (type === 1) handleAddProduct();
    else handleRemoveProduct();
  };

  const handleAddProduct = () => {
    product.quantitySold = 1;
    addRemoveProduct(product);
  };

  const handleRemoveProduct = () => {
    product.quantitySold = -1;
    addRemoveProduct(product);
  };

  return (
    <div className='grid grid-flow-col mb-6 items-center font-paragraph mt-8 pb-7 border-b border-primary'>
      <figure>
        <img src={transformUrlGDrive(product.url_image)} className='w-[70px] h-[70px] rounded-2xl object-cover'/>
      </figure>
      <div className='flex flex-col text-xs gap-5'>
        <div className='flex flex-col'>
          <span className='text-sm font-bold'>{capitalize(product.name)}</span>
          <span className='font-medium'>{calculateGrs(product)}</span>
        </div>
        <span onClick={handleDeleteProduct}>Quitar</span>
      </div>
      <div className='flex flex-col gap-5 justify-end items-end'>
        <span className='text-sm font-bold'>${calculatePrice(product)}</span>
        <div className='w-[71px] h-[30px] '>
          <AddRemoveItem handleChance={handleChange}/>
        </div>
      </div>
    </div>
  );
};

interface ItemShoppingCarProps{
    product: Product,
    showMessageDelete: (product: Product) => void
}

export default ItemShoppingCar;
