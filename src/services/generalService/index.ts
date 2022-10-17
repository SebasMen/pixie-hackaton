import axios from 'axios';
import { getDataLocation, getIp } from '../../interfaces/location';

class GeneralService {
  init() {}

  getIp = async (): Promise<getIp> =>
    new Promise((resolve, reject) => {
      axios.get('https://api.ipify.org?format=json')
        .then(response => {
          resolve(response.data);
        }).catch(error => {
          reject(error.response);
        }
        );
    });

  getLocationData = async (ip: string): Promise<getDataLocation> =>
    new Promise((resolve, reject) => {
      axios.get(`http://www.geoplugin.net/json.gp?ip=${ip}`)
        .then(response => {
          resolve(response.data);
        }).catch(error => {
          reject(error.response);
        }
        );
    });
}

const instance = new GeneralService();

export default instance;
