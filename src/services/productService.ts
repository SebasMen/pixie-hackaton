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
      tag: {
        name: 'cachorros',
        key: '1'
      },
      quantity: 0,
      totalPrice: 0
    };
    return new Promise((resolve, reject) => {
      const productFind = products.find(p => p.id === idProduct);
      if (productFind === undefined)
        reject(product);
      else
        resolve(productFind);
    });
  };
}

export default new ProductService();

