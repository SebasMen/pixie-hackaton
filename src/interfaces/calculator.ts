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
  diseases: string;
  allergies: string;
}
