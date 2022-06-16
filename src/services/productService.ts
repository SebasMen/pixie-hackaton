import { Product } from '../interfaces/product';
import { products } from '../@fake/productsFake';

class ProductService {
  init() {}
  searchProduct = (idProduct: string | undefined): Promise<Product> => {
    const product: Product = {
      description: 'undefined',
      id: '0',
      name: 'no registrado',
      price: 0,
      age: 'a',
      quantity: 0,
      totalPrice: 0,
      category: 'Alimentos',
      ingredients: '',
      kind_pet: '',
      license: '',
      nutrition_information: '',
      presentation: '',
      status: '',
      url_image: ''
    };
    return new Promise((resolve, reject) => {
      const productFind = products.find(p => p.id === idProduct);
      if (productFind === undefined)
        reject(product);
      else
        resolve(product);
    });
  };
}

export default new ProductService();

