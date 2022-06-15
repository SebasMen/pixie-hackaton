import { useContext } from 'react';
import { AppContext } from '../context';
import { Product } from '../interfaces/product';

export const useShoppingCar = () => {
  const { updateContext, products } = useContext(AppContext);

  const addProduct = (currentProduct: Product) => {
    const existTheProduct = theProductExist(currentProduct);
    if (existTheProduct) {
      joinProducts(existTheProduct, currentProduct);
      console.log(existTheProduct);
    } else
      updateContext(old => ({ ...old, products: [...old.products, currentProduct] }));
  };

  const theProductExist = (currentProduct: Product) => products.find(item => item.id === currentProduct.id);

  const deleteProduct = (currentProduct: Product) => updateContext(old => ({ ...old, products: [...old.products.filter(item => item.id !== currentProduct.id)] }));

  const joinProducts = (oldProduct: Product, currentProduct: Product) => {
    const totalPrice = ((oldProduct.totalPrice === undefined) ? 0 : oldProduct.totalPrice) + ((currentProduct.totalPrice === undefined) ? 0 : currentProduct.totalPrice);
    const quantitySold = ((oldProduct.quantitySold === undefined) ? 0 : oldProduct.quantitySold) + ((currentProduct.quantitySold === undefined) ? 0 : currentProduct.quantitySold);
    const newProduct = { ...currentProduct, totalPrice, quantitySold };

    deleteProduct(oldProduct);

    updateContext(old => ({ ...old, products: [...old.products, newProduct] }));
  };

  return { addProduct, theProductExist, deleteProduct, joinProducts };
};

export default useShoppingCar;
