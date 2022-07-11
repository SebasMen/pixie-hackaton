import { AxiosResponse } from 'axios';
import { selectCountryService, sendFormCheckout, SubmissionFormInterface } from '../../interfaces/checkout';
import api from '../axios';

export class CheckOutService {
  init() {}

  getOneCountry = async (): Promise<selectCountryService> => {
    const defError = 'Error al traer el pais.';
    try {
      const response = await api({ url: 'countries?iso=mx', baseURL: 'https://apidev.tools.antpack.co/pixie-customers/api/'});

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

  sendUserInformation = async (data: SubmissionFormInterface): Promise<sendFormCheckout> => {
    const defError = 'Error al enviar los datos del checkout.';
    try {
      const response = await api.post('pixie-customers/api/customers', {
        ...data,
        countries_id: data.country.value,
        province: data.state.label
      });

      // Handle empty response
      if (!response) throw new Error(defError);

      return {};
    } catch (error: any) {
      // Handle response errors
      if (error.response.data.errors) return { error: error.response.data.errors };

      // Handle basic errors
      return { error: [{ msg: (error as Error)?.message || defError, param: 'global', location: 'global' }] };
    }
  };
}

export default new CheckOutService();

