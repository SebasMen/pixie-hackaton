import { paymentForm } from '../../interfaces/checkout';
import { generatePaymentMP, postSend, postSendTokenCardService, urlParamsMP } from '../../interfaces/payment';
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

  getPaymentId = (data: generatePaymentMP): Promise<postSend> =>
    new Promise((resolve, reject) => {
      api.post('pixie-payments/api/payments/token-id', data)
        .then(response => {
          resolve(response.data.data);
        }).catch(error => {
          reject(error);
        });
    });

  updatePayment = (data: urlParamsMP): Promise<any> =>
    new Promise((resolve, reject) => {
      api.post('pixie-payments/api/payments/update-payment-status', data)
        .then(response => {
          console.log(response);
          resolve(response.data);
        }).catch(error => {
          reject(error);
        });
    });

  /// const defError = 'Error al obtener el id';
  // try {
  //   const response = await api.post('pixie-payments/api/payments/token-id', data);
  //   // Handle empty response
  //   if (!response) throw new Error(defError);

  //   return { data: response.data };
  // } catch (error: any) {
  //   // Handle response errors
  //   if (error.data) return { err: error.data.msg, data: { status: 'error', data: { order_detail: { details: { approvedTransactionAmount: 0, transactionId: '00' }, ticketNumber: '' } }, error: error.response.data.error } };

  //   // Handle basic errors
  //   return { err: (error as Error)?.message || defError, data: { status: 'error', data: { order_detail: { details: { approvedTransactionAmount: 0, transactionId: '00' }, ticketNumber: '' } }, error: error.response.data.error } };
  // }

  // sendPayment = async (data: generatePayment): Promise<postSendPaymentService> => {
  //   const defError = 'Error al enviar los datos del pago';
  //   try {
  //     const response = await api.post('pixie-payments/api/payments/purchase-charges', data);
  //     // Handle empty response
  //     if (!response) throw new Error(defError);

  //     return { data: response.data };
  //   } catch (error: any) {
  //     // Handle response errors
  //     if (error.data) return { err: error.data.msg, data: { status: 'error', data: { order_detail: { details: { approvedTransactionAmount: 0, transactionId: '00' }, ticketNumber: '' } }, error: error.response.data.error } };

  //     // Handle basic errors
  //     return { err: (error as Error)?.message || defError, data: { status: 'error', data: { order_detail: { details: { approvedTransactionAmount: 0, transactionId: '00' }, ticketNumber: '' } }, error: error.response.data.error } };
  //   }
  // };
}

export default new PaymentService();

