import { Product } from '../interfaces/product';

export const transformAge = (product : Product) => {
  const ages = product.age;
  const agesArray = ages.split(',');
  const lower = agesArray.map(element => element.toLowerCase().trim());
  return lower;
};

export const transUrlImages = (product : Product) => {
  const urls = product.url_image;
  const urlsArray = urls.split(',');
  return urlsArray;
};

export const calculateGrs = (product: Product) => {
  const quantitySold = ((product.quantitySold === undefined) ? 0 : product.quantitySold);
  const split = product.presentation.split(' ');
  const gr = parseInt(split[0].trim(), 10);
  return `${gr * quantitySold} ${split[1]}`;
};

export const calculatePrice = (product: Product) => {
  const quantitySold = ((product.quantitySold === undefined) ? 0 : product.quantitySold);
  return quantitySold * product.price;
};

export const calculateTotal = (arrayProducts : Array<Product>) => {
  let total = 0;
  arrayProducts.forEach(product => {
    const quantitySold = ((product.quantitySold === undefined) ? 0 : product.quantitySold);
    total += (quantitySold * product.price);
  });
  return total;
};
