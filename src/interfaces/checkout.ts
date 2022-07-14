import { SelectItem } from '../components/form/selectField';
import { Service } from './service';
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
