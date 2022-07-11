import { SelectItem } from '../components/form/selectField';
import { Service } from './service';
export interface SubmissionFormInterface {
  countries: SelectItem[];
  country: SelectItem;
  name: string;
  last_name: string;
  document: string
  address: string;
  apartment : string;
  city: string;
  states: SelectItem[];
  state: SelectItem;
  zip_code: string;
  phone: string;
  email: string;
  typeShipping: 'rapido' | 'estandar';
  typePayment: 'credito' | 'debito';
  billingAddress: string;
  receive_information: string;
}

export interface selectCountry {
  code_iso: string,
  id: string,
  name: string
}

export interface sendFormCheckout {
  error?: [{
    msg: string,
    param: string,
    location: string
  }]
}

export type selectCountryService = Service<Array<selectCountry>>
