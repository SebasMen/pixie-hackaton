import { useContext } from 'react';
import { AppContext } from '../context';
import { CartItem } from '../interfaces/basket';
import { Product } from '../interfaces/product';

export const useShoppingCar = () => {
  const { updateContext, products } = useContext(AppContext);

  // Add or remove a product
  const addRemoveProduct = (product: Product, value: number) => {
    const itemIndex = getProductIndex(product.id);

    if (itemIndex === -1) return updateContext(old => ({ ...old, products: [...old.products, { product, quantity: value }] }));

    const prev = products[itemIndex];

    const newProduct: CartItem = { ...prev, quantity: prev.quantity + value };

    if (newProduct.quantity < 1) return deleteProduct(product.id);

    const newProducts = products.map(item => item.product.id === product.id ? newProduct : item);

    updateContext(old => ({ ...old, products: newProducts }));
  };

  const getProductIndex = (productId: string) => products.findIndex(item => item.product.id === productId);

  const deleteProduct = (productId: string) => updateContext(old => ({ ...old, products: [...old.products.filter(item => item.product.id !== productId)] }));

  const deleteAllProducts = () => updateContext(old => ({ ...old, products: [] }));

  return { addRemoveProduct, deleteProduct, deleteAllProducts };
};

export default useShoppingCar;
