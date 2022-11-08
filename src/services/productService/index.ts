import { Product, ProductListResponse } from '../../interfaces/product';
import api from '../axios';

export class ProductService {
  init() {}

  getAllProducts = async (): Promise<ProductListResponse> => {
    const { data } = await api.get('pixie-payments/api/products?showInactive=false');
    return data;
  };

  getQueryProducts = async (textSearch: string | null): Promise<ProductListResponse> => {
    const { data } = await api.get(`pixie-payments/api/products?filter=${textSearch}`);
    return data;
  };

  getOneProductById = async (id: number): Promise <Product> => new Promise((resolve, reject) => {
    api.get(`pixie-payments/api/products/${id}`)
      .then(response => {
        resolve(response.data);
      }).catch(error => {
        reject(error.response.data.message);
      }
      );
  });

  getOneProductByKey = async (key: string | undefined): Promise <Product> => new Promise((resolve, reject) => {
    api.get(`pixie-payments/api/products/key/${key}`)
      .then(response => {
        resolve(response.data);
      }).catch(error => {
        reject(error.response.data.message);
      }
      );
  });
}

export default new ProductService();

