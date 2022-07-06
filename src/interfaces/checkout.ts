import { SelectItem } from '../components/form/selectField';

export interface SubmissionFormInterface {
  countries: SelectItem[];
  country: SelectItem;
  names: string;
  lastNames: string;
  document: string
  address: string;
  apartament: string;
  city: string;
  states: SelectItem[];
  state: SelectItem;
  postalCode: string;
  phone: string;
  email: string;
  typeShipping: 'rapido' | 'estandar';
  typePayment: 'credito' | 'debito';
  billingAddress: string;
}
