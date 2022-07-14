import { paymentForm } from '../../interfaces/checkout';
import { generatePayment, postSendPaymentService, postSendTokenCardService } from '../../interfaces/payment';
import api from '../axios';

export class PaymentService {
  init() {}

  sendCardInformation = async (data: paymentForm): Promise<postSendTokenCardService> => {
    const defError = 'Error al enviar los datos de la targeta';
    try {
      const response = await api.post('pixie-payments/api/payments/token-card', {
        ...data,
        card_expiryMonth: data.expirationDate.split('/')[0].trim(),
        card_expiryYear: data.expirationDate.split('/')[1].trim(),
      });

      // Handle empty response
      if (!response) throw new Error(defError);

      return { data: response.data };
    } catch (error: any) {
      // Handle response errors
      if (error.data) return { err: error.data.msg, data: { status: 'error', token_card: '' } };

      // Handle basic errors
      return { err: (error as Error)?.message || defError, data: { status: 'error', token_card: '' } };
    }
  };

  sendPayment = async (data: generatePayment): Promise<postSendPaymentService> => {
    const defError = 'Error al enviar los datos del pago';
    try {
      const response = await api.post('pixie-payments/api/payments/purchase-charges', data);
      // Handle empty response
      if (!response) throw new Error(defError);

      return { data: response.data };
    } catch (error: any) {
      // Handle response errors
      if (error.data) return { err: error.data.msg, data: { status: 'error' } };

      // Handle basic errors
      return { err: (error as Error)?.message || defError, data: { status: 'error' } };
    }
  };
}

export default new PaymentService();

