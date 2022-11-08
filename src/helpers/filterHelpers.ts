import { Product, productCatalogue } from '../interfaces/product';
import { filterShop } from '../interfaces/filter';
import { transformAge } from './productHelper';

export const filterDefault = (products: Array<Product> | undefined, filter: filterShop) => {
  // Return empty if no products
  if (!products) return [];

  const filtered = products.filter(product => {
    // Get product categories
    const productAges = transformAge(product) as filterShop['agePet'];

    // Get product types
    const productKinds = product.kind_pet.split(',') as filterShop['typePet'];

    // Get type
    const productType = product.category as filterShop['typeProduct'];

    const ageFilter = filter.agePet.length === 0 ?
      // If no age filter, return true
      true :
      // Check if age is in filter ages
      filter.agePet.some(age => productAges.includes(age));

    const kindFilter = filter.typePet.length === 0 ?
      // If no type filter, return true
      true :
      // Check if type is in filter types
      filter.typePet.some(kind => productKinds.includes(kind));

    const typeProduct = filter.typeProduct === '' ?
      // If no type filter, return true
      true :
      // Check if type is in filter types
      filter.typeProduct === productType;

    // Check if both conditions are true
    return ageFilter && kindFilter && typeProduct;
  });

  // Products by category
  const finishFilter: Array<productCatalogue> = [{ name: 'Alimentos', products: [] }, { name: 'Snacks', products: [] }, { name: 'Accesorios', products: [] }];

  // Iterate products
  filtered.forEach(product => {
    // Product category name
    const name = product.category.toLowerCase().trim();

    // Get category index
    const index = finishFilter.findIndex(cat => cat.name.toLocaleLowerCase().trim() === name);

    // Validate index
    if (index === -1) return;

    // Add product to category
    finishFilter[index].products.push(product);
  });

  return finishFilter;
};
