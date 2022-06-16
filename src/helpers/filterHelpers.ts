import { Product, productCatalogue } from '../interfaces/product';
import { filterShop } from '../interfaces/filter';

export const filterDefault = (products: Array<Product> | undefined, filter: filterShop) => {
  // Return empty if no products
  if (!products) return [];

  const filtered = products.filter(product => {
    // Get product categories
    const productAges = product.age.split(',') as filterShop['agePet'];

    // Get product types
    const productKinds = product.kind_pet.split(',') as filterShop['typePet'];

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

    // Check if both conditions are true
    return ageFilter && kindFilter;
  });

  // Products by category
  const finishFilter: Array<productCatalogue> = [{ name: 'Alimentos', products: [] }, { name: 'Snack', products: [] }, { name: 'Accesorios', products: [] }];

  // Iterate products
  filtered.forEach(product => {
    // Product category name
    const name = product.category.toLowerCase().trim();

    // Get category index
    const index = finishFilter.findIndex(cat => cat.name.toLocaleLowerCase() === name);

    // Validate index
    if (index === -1) return;

    // Add product to category
    finishFilter[index].products.push(product);
  });

  return finishFilter;
};
