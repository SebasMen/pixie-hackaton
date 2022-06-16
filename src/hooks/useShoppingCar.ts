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
    console.log(typeof parseInt(`${oldProduct.totalPrice}`, 10));
    console.log(typeof currentProduct.totalPrice);
    const totalPrice = ((oldProduct.totalPrice === undefined) ? 0 : parseInt(`${oldProduct.totalPrice}`, 10)) + ((currentProduct.totalPrice === undefined) ? 0 : parseInt(`${currentProduct.totalPrice}`, 10));
    const quantitySold = ((oldProduct.quantitySold === undefined) ? 0 : parseInt(`${oldProduct.quantitySold}`, 10)) + ((currentProduct.quantitySold === undefined) ? 0 : parseInt(`${currentProduct.quantitySold}`, 10));
    const newProduct = { ...currentProduct, totalPrice, quantitySold };

    deleteProduct(oldProduct);

    updateContext(old => ({ ...old, products: [...old.products, newProduct] }));
  };

  return { addProduct, theProductExist, deleteProduct, joinProducts };
};

export default useShoppingCar;
