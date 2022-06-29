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
  provinces: SelectItem[];
  province: SelectItem;
  postalCode: string;
  phone: string;
  email: string;
}
