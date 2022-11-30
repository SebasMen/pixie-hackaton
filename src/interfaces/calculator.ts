import { SelectItem } from '../components/form/selectField';
import { validatorBody } from './validator';

export interface CalculatorForm {
  name: string;
  type: SelectItem
  typeOptions: SelectItem[];
  age: SelectItem;
  ageOptions: SelectItem[];
  exactAge: number;
  idealWeight: number;
  exercise: SelectItem;
  exerciseOptions: SelectItem[];
  allergies: allergies,
  hasAllergies: boolean,
  sexPet: string,
  photoPet: string;
  description: string;
  city: string;
}
export interface allergies {
  hepatics: boolean
  alergies: boolean
  renal: boolean
  obesity: boolean
  sensitive_stomach: boolean
}

export interface CalculatorFormValidate {
  name: validatorBody;
  type: validatorBody
  age: validatorBody;
  exactAge: validatorBody;
  idealWeight: validatorBody;
  exercise: validatorBody;
  sexPet: validatorBody;
  photoPet: validatorBody;
  description: validatorBody;
  city: validatorBody;

}
