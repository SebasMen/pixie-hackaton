import { SelectItem } from '../components/form/selectField';

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
  hasAllergies: boolean
}
export interface allergies {
  hepatics: boolean
  alergies: boolean
  renal: boolean
  obesity: boolean
  sensitive_stomach: boolean
}
