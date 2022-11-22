/* eslint-disable operator-assignment */
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

export const calculateTotal = (arrayProducts: CartItem[], withoutIva: boolean) => {
  let total = 0;
  arrayProducts.forEach(item => {
    total += (item.quantity * item.product.price);
  });

  if (withoutIva)
    return roundToXDigits(total - calculateIva(arrayProducts), 2);

  return total;
};

export const calculateIva = (arrayProducts: CartItem[]): number => {
  const total = calculateTotal(arrayProducts, false);

  return roundToXDigits(total * 0.16, 2);
};

export const roundToXDigits = (value: number, digits: number) => {
  // eslint-disable-next-line prefer-exponentiation-operator
  value = value * Math.pow(10, digits);
  value = Math.round(value);
  // eslint-disable-next-line prefer-exponentiation-operator
  value = value / Math.pow(10, digits);
  return value;
};

export const separateByCommas = (text : string) => {
  const array = text.split(',' || '(');
  return array;
};

export const separateByCommasAndParenthesis = (text : string) => {
  const array = text.split(/[(),.]+/);
  return array;
};

export const pricex20 = (product: Product): Product => {
  const productNew = { ...product };
  try {
    productNew.price *= 20;
  } catch (err) {
    console.log(err);
  }

  return productNew;
};

export const productCombo:Product = {
  age: 'cachorros,adultos,senior',
  atributos: [],
  atributos_en: [],
  benefits: [],
  benefits_en: [],
  category: 'Alimentos',
  country: 2,
  description: '',
  description_en: '',
  dosis: '',
  dosis_en: '',
  id: '-9999',
  ingredients: [],
  ingredients_en: [],
  key: '',
  key_en: '',
  kind_pet: '',
  license: '',
  name: 'Caja x20 rollos diferentes sabores',
  name_en: 'Box x20 rolls of different flavors',
  nutrition_information: [],
  nutrition_information_en: [],
  presentation: '1 lb',
  price: 0,
  quantity: 999,
  recommendation_for_use: '',
  recommendation_for_use_en: '',
  status: '1',
  url_image: '',
  productsInside: []
};

