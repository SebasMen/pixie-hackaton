import { ProductListResponse } from '../../interfaces/product';
import api from '../axios';

export class ProductService {
  init() {}

  getAllProducts = async (): Promise<ProductListResponse> => {
    const { data } = await api.get('pixie-payments/api/products');
    return data;
  };
}

export default new ProductService();

