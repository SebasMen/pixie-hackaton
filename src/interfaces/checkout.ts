import { SelectItem } from '../components/form/selectField';
import { Service } from './service';
import { validatorBody } from './validator';
export interface SubmissionFormInterface {
  email: string;
  phone: string;
  name: string;
  last_name: string;
  address: string;
  houseNumber: string;
  apartment : string;
  reference: string;
  zip_code: string;
  colony: string;
  delegation: string;
  city: string;
  states: SelectItem[];
  state: SelectItem;
  countries: SelectItem[];
  country: SelectItem;
  receive_information: string;
  delivery_note: string;
}

export interface SubmissionFormValidate {
  email: validatorBody;
  phone: validatorBody;
  name: validatorBody;
  last_name: validatorBody;
  state: validatorBody;
  country: validatorBody;
  houseNumber: validatorBody;
  apartment: validatorBody;
  zip_code: validatorBody;
  reference: validatorBody;
  colony: validatorBody;
  delegation: validatorBody;
}

export interface paymentForm {
  card_name: string;
  card_number: string;
  expirationDate: string;
  card_cvv: string;
  billingAddress: string;
  numberOfInstallments: SelectItem;
  numberOfInstallmentsSelect: SelectItem[];
  amount: number;

  // Change shipping
  email?: string;
  phone?: string;
  name?: string;
  last_name?: string;
  address?: string;
  addressOptional?: string;
  city?: string;
  countries?: SelectItem[];
  country?: SelectItem;
}

export interface PaymentFormValidate {
  card_name: validatorBody;
  card_number: validatorBody;
  expirationDate: validatorBody;
  card_cvv: validatorBody;
  billingAddress: validatorBody;
  numberOfInstallments: validatorBody;
  amount: validatorBody;

  // Change shipping
  email: validatorBody;
  phone: validatorBody;
  name: validatorBody;
  last_name: validatorBody;
  country: validatorBody;
}

export interface shippingTypeForm {
  type: 'rapido' | 'estandar',
  price: number
}

export interface selectCountry {
  code_iso: string,
  id: string,
  name: string
}

export type selectCountryService = Service<Array<selectCountry>>;

export interface postSendFormCheckout {
  error?: [{
    msg: string,
    param: string,
    location: string
  }],
  data: {
    id: string,
  }
}
