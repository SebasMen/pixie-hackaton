import { productShort } from './product';
import { Service } from './service';

export interface postSendTokenCard {
  status: string;
  token_card: string;
}

export type postSendTokenCardService = Service<postSendTokenCard>

export interface postSend {
  id: string,
  init_point: string
}

export interface generatePaymentMP {
  items: itemsMP[],
  payer: billingDetailsInterfaceMV,
  auto_return: 'approved' | '',
  shipments : {
    cost: number,
    mode: string,
    receiver_address: {
      zip_code: string,
      street_name: string,
      street_number: string,
      floor: string,
      apartment: string,
      city_name: string,
      state_name: string,
      country_name: string
    }
  },
  metadata: {
    shippingDetails: houseData,
    details_payments: {
      subTotalNoIva: number,
      deliveryPrice: number,
      onlyIva: number,
      totalPayment: number
    },
    contactDetails: {
      email: string,
      firstName: string,
      lastName: string,
      phoneNumber: string,
    },
    billingDetails: houseData,
    customer_id: string,
    delivery_note: string,
  }
  total_amount: number,
  back_urls: {
    failure: string,
    pending: string,
    success: string
  }
}

interface houseData {
  name: string,
  phone: string,
  address1: string,
  city: string,
  region: string,
  country: string,
  cityValue: string,
  regionvalue: string,
  countryValue: string
}

export interface itemsMP {
  id: string,
  title: string,
  description: {
    description: string,
    presentation: string,
    age: string
  },
  picture_url: string,
  quantity: number,
  unit_price: number,
}

export interface billingDetailsInterfaceMV {
  name: string,
  surname: string,
  email: string,
  phone: {
    number: string,
    area_code: string
  },
  address: {
    zip_code: string,
    street_name: string,
    street_number: number
  }
}

export interface billingDetailsInterface {
  name: string,
  phone: string,
  address1: string,
  city: string,
  region: string,
  country: string,
  cityValue: string,
  regionvalue: string,
  countryValue: string
}

export interface urlParamsMP {
  collection_id: string,
  collection_status: string,
  payment_id: string,
  status: string,
  preference_id: string,
  payment_type: string,
  total_payment: number
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
        },
        ticketNumber: string
    }
  }
}

export type postSendPaymentService = Service<postSendPayment>;
