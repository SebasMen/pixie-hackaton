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
        billingDetails: {
        name: string,
        phone: string,
        address1: string,
        city: string,
        region: string,
        country: string
        }
    },
    productDetails: {
        product: Array<productShort>
    },
    fullResponse: boolean
    }
}

export interface postSendPayment {
  status: string;
}

export type postSendPaymentService = Service<postSendPayment>
