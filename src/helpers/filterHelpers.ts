import { filterShop } from '../interfaces/filter';
import { Product, productCatalogue } from '../interfaces/product';

export const filterDefault = (products: Array<Product> | undefined, filter: filterShop) => {
  const categoryFilter = ['Alimentos', 'Snack', 'Accesorios'];
  const arrayProductsFilter:Array<Product> = [];
  const finishFilter:Array<productCatalogue> = [];
  if (filter.typePet === 'none')
    categoryFilter.forEach(category => {
      products?.forEach(product =>
        (product.category.trim() === category.toLocaleLowerCase()) && arrayProductsFilter.push(product));
      finishFilter.push({ name: category, products: arrayProductsFilter });
    }
    );
  return finishFilter;
};
