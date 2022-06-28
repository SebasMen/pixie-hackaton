import { useContext } from 'react';
import { AppContext } from '../context';
import { Product } from '../interfaces/product';

export const useShoppingCar = () => {
  const { updateContext, products } = useContext(AppContext);

  const addRemoveProduct = (currentProduct: Product) => {
    const existTheProduct = theProductExist(currentProduct);
    if (existTheProduct)
      joinProducts(existTheProduct, currentProduct);
    else {
      const quantitySold = ((currentProduct.quantitySold === undefined) ? 0 : currentProduct.quantitySold);
      if (quantitySold > 0)
        updateContext(old => ({ ...old, products: [...old.products, currentProduct] }));
    }
  };

  const theProductExist = (currentProduct: Product) => products.find(item => item.id === currentProduct.id);

  const deleteProduct = (currentProduct: Product) => updateContext(old => ({ ...old, products: [...old.products.filter(item => item.id !== currentProduct.id)] }));

  const joinProducts = (oldProduct: Product, currentProduct: Product) => {
    const quantitySold = ((oldProduct.quantitySold === undefined) ? 0 : parseInt(`${oldProduct.quantitySold}`, 10)) + ((currentProduct.quantitySold === undefined) ? 0 : parseInt(`${currentProduct.quantitySold}`, 10));
    const newProduct = { ...currentProduct, quantitySold };

    deleteProduct(oldProduct);

    if (quantitySold > 0)
      updateContext(old => ({ ...old, products: [...old.products, newProduct] }));
  };

  return { addRemoveProduct, theProductExist, deleteProduct, joinProducts };
};

export default useShoppingCar;
