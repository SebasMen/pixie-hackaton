import { ProductListResponse } from '../../interfaces/product';
import api from '../axios';

export class ProductService {
  init() {}

  getAllProducts = async (): Promise<ProductListResponse> => {
    const { data } = await api.get('pixie-payments/api/products');
    return data;
  };

  getQueryProducts = async (textSearch: string | null): Promise<ProductListResponse> => {
    const { data } = await api.get(`pixie-payments/api/products?filter=${textSearch}`);
    return data;
  };
}

export default new ProductService();

