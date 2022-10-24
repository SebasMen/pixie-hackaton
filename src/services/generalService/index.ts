import { getDataLocation } from '../../interfaces/location';
import api from '../axios';

class GeneralService {
  init() {}

  getLocationData = async (longitud: number, latitud: number): Promise<getDataLocation> =>
    new Promise((resolve, reject) => {
      api.get(`pixie-payments/api/payments//location/${longitud}/${latitud}`)
        .then(response => {
          resolve(response.data.data);
        }).catch(error => {
          reject(error);
        });
    });
}

const instance = new GeneralService();

export default instance;
