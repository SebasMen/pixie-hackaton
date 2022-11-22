import { pricex20 } from '../../helpers/productHelper';
import { infoSelectSPandEn, Product, ProductListResponse } from '../../interfaces/product';
import api from '../axios';

export class ProductService {
  init() {}

  getAllProducts = async (country: number, convertx20:boolean): Promise<ProductListResponse> => new Promise((resolve, reject) => {
    api.get(`pixie-payments/api/products?showInactive=false&country=${country}`).then(res => {
      // If is USA the price is x20
      if (country === 2 && convertx20) {
        const newDataProduct = res.data.products.map((product:Product) => pricex20(product));
        const data = { ...res.data, products: newDataProduct };
        resolve(data);
      }

      resolve(res.data);
    }).catch(error => {
      reject(error);
    });
  });

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

  getOneProductByKey = async (key: string | undefined, convertx20?:boolean): Promise <Product> => new Promise((resolve, reject) => {
    api.get(`pixie-payments/api/products/key/${key}`)
      .then(response => {
        // If is USA the price is x20
        if (convertx20) {
          const newDataProduct = pricex20(response.data);
          resolve(newDataProduct);
        }

        resolve(response.data);
      }).catch(error => {
        reject(error.response.data.message);
      }
      );
  });

  getIngredients = (): Promise<infoSelectSPandEn[]> => new Promise((resolve, reject) => {
    api.get('pixie-payments/api/ingredients?limit=100')
      .then(response => {
        resolve(response.data.data);
      }).catch(error => {
        reject(error.response.data.message);
      }
      );
  }
  );
}

export default new ProductService();

