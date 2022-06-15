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
