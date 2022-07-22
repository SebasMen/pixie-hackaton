import { productShort } from './product';
import { Service } from './service';

export interface postSendTokenCard {
  status: string;
  token_card: string;
}

export type postSendTokenCardService = Service<postSendTokenCard>

export interface generatePayment {
    customer_id: string,
    details_payments: {
    token: string,
    amount: {
        subtotalIva: number,
        subtotalIva0: number,
        ice: number,
        iva: number,
        currency: string
    },
    contactDetails: {
        email: string,
        firstName: string,
        lastName: string,
        phoneNumber: string
    },
    orderDetails: {
        siteDomain: string,
        shippingDetails: {
          name: string,
          phone: string,
          address1: string,
          city: string,
          region: string,
          country: string
        },
        billingDetails: billingDetailsInterface
    },
    productDetails: {
        product: Array<productShort>
    },
    fullResponse: boolean
    }
}

export interface billingDetailsInterface {
  name: string,
  phone: string,
  address1: string,
  address2?: string,
  city: string,
  region: string,
  country: string
}

export interface postSendPayment {
  status: string;
  error?: {
    code: string,
    details: {
      transactionId: string
    },
    message: string,
    transactionReference: string
  },
  data: {
    order_detail: {
      details: {
          approvedTransactionAmount: number,
          transactionId: string
        }
    }
  }
}

export type postSendPaymentService = Service<postSendPayment>
