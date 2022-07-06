import { ProductListResponse } from '../../interfaces/product';
import api from '../axios';

export class ProductService {
  init() {}
  /// searchProduct = (idProduct: string | undefined): Promise<Product> => {
  //   const product: Product = {
  //     description: 'undefined',
  //     id: '0',
  //     name: 'no registrado',
  //     price: 0,
  //     age: 'a',
  //     quantity: 0,
  //     totalPrice: 0,
  //     category: 'Alimentos',
  //     ingredients: '',
  //     kind_pet: '',
  //     license: '',
  //     nutrition_information: '',
  //     presentation: '',
  //     status: '',
  //     benefits: '',
  //     url_image: ''
  //   };
  //   return new Promise((resolve, reject) => {
  //     const productFind = products.find(p => p.id === idProduct);
  //     if (productFind === undefined)
  //       reject(product);
  //     else
  //       resolve(product);
  //   });
  // };

  getAllProducts = async (): Promise<ProductListResponse> => {
    const { data } = await api.get('/products');
    return data;
  };
}

export default new ProductService();

