import { PetsListResponse } from '../../interfaces/product';
import api from '../axios';

export class PetsService {
  getAllPets = async (): Promise<PetsListResponse> => new Promise((resolve, reject) => {
    api.get('http://localhost:4019/pixie-customers/api/pets').then((res: { data: PetsListResponse | PromiseLike<PetsListResponse>; }) => {
      // If is USA the price is x20
      // if (country === 2 && convertx20) {
      //   const newDataProduct = res.data.pets.map((product:Product) => pricex20(product));
      //   const data = { ...res.data, products: newDataProduct };
      //   resolve(data);
      // }

      resolve(res.data);
    }).catch(error => {
      reject(error);
    });
  });
}

export default new PetsService();
