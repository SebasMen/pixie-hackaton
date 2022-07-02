import { CartItem } from '../interfaces/basket';
import { Product } from '../interfaces/product';

export const transformAge = (product: Product) => {
  const ages = product.age;
  const agesArray = ages.split(',');
  const lower = agesArray.map(element => element.toLowerCase().trim());
  return lower;
};

export const transUrlImages = (product: Product) => {
  const urls = product.url_image;
  const urlsArray = urls.split(',');
  return urlsArray;
};

export const calculateGrs = (item: CartItem) => {
  const { product } = item;
  const split = product.presentation.split(' ');
  const gr = parseInt(split[0].trim(), 10);
  return `${gr * item.quantity} ${split[1]}`;
};

export const calculateTotal = (arrayProducts: CartItem[]) => {
  let total = 0;
  arrayProducts.forEach(item => {
    total += (item.quantity * item.product.price);
  });
  return total;
};

export const separateByCommas = (text : string) => {
  const array = text.split(',');
  return array;
};

