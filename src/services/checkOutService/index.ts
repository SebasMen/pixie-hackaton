import { selectCountryService, postSendFormCheckout, SubmissionFormInterface } from '../../interfaces/checkout';
import { couponComplete } from '../../interfaces/coupon';
import api from '../axios';

export class CheckOutService {
  init() {}

  getOneCountry = async (): Promise<selectCountryService> => {
    const defError = 'Error al traer el pais.';
    try {
      const response = await api({ url: 'countries?iso=mx', baseURL: 'https://apidev.tools.antpack.co/pixie-customers/api/' });

      // Handle empty response
      if (!response) throw new Error(defError);

      return response.data;
    } catch (error: any) {
      // Handle response errors
      if (error.data) return { err: error.data.msg, data: [] };

      // Handle basic errors
      return { err: (error as Error)?.message || defError, data: [] };
    }
  };

  sendUserInformation = async (data: SubmissionFormInterface): Promise<postSendFormCheckout> => {
    const defError = 'Error al enviar los datos del checkout.';
    try {
      const response = await api.post('pixie-customers/api/customers', {
        ...data,
        apartment: data.apartment === '' ? data.houseNumber : data.apartment,
        address: data.address.concat(` ${data.houseNumber}`),
        countries_id: data.country.value,
        province: data.state.label,
        city: data.city.value,
        zip_code: data.zip_code.value
      });

      // Handle empty response
      if (!response) throw new Error(defError);

      return { data: response.data };
    } catch (error: any) {
      // Handle response errors
      if (error.response.data.errors) return { error: error.response.data.errors, data: { id: '' } };

      // Handle basic errors
      return { error: [{ msg: (error as Error)?.message || defError, param: 'global', location: 'global' }], data: { id: '' } };
    }
  };

  getCoupon = (claimCode: string): Promise<couponComplete> =>
    new Promise((resolve, reject) => {
      api({ baseURL: `https://apidev.tools.antpack.co/pixie-coupons/api/coupons/code/${claimCode}` }).then(res => {
        resolve(res.data);
      }).catch(err => {
        reject(err.response.data.message);
      });
    });
}

export default new CheckOutService();

