import { useAppContext } from '../hooks';
import { Product } from '../interfaces/product';

export const transformAge = (product : Product) => {
  const ages = product.age;
  const agesArray = ages.split(',');
  return agesArray;
};

export const transUrlImages = (product : Product) => {
  const urls = product.url_image;
  const urlsArray = urls.split(',');
  return urlsArray;
};

export const addProductToCar = (currentProduct: Product) => {
  const { updateContext, products } = useAppContext();

  // The product already exist
  const productOld = products.find(item => item.id === currentProduct.id);
  if (productOld === undefined)
    updateContext(old => ({ ...old, products: [...old.products, currentProduct] }));
  else {
    // Se obtienen los nuevos valores sumados con los que ya estan
    const priceNewProduct = currentProduct.totalPrice === undefined ? 0 : currentProduct.totalPrice;
    const quiantityNewProduct = currentProduct.quantitySold === undefined ? 0 : currentProduct.quantitySold;
    const newPrice = productOld.totalPrice === undefined ? 0 : productOld.totalPrice += priceNewProduct;
    const newQuantity = productOld.quantitySold === undefined ? 0 : productOld.quantitySold += quiantityNewProduct;
    reOrganiceProducts(newPrice, newQuantity, currentProduct);
  }
};

// Quitar el producto antiguo y guardar el nuevo
const reOrganiceProducts = (newPrice: number, newQuantity: number, product:Product) => {
  const { updateContext, products } = useAppContext();
  const newProduct: Product = { ...product, price: newPrice, quantitySold: newQuantity };
  const newArrayProduct: Array<Product> = [];
  products.map(item => item.id !== product.id && newArrayProduct.push(item));
  newArrayProduct.push(newProduct);
  updateContext(old => ({ ...old, products: newArrayProduct }));
};


