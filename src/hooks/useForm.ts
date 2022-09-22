import { useState } from 'react';

import { MultiValue, SingleValue } from 'react-select';
import { SelectItem } from '../components/form/selectField';

export const useForm = <T>(
  initialState: T,
  onSubmit: (form: T) => void,
  callback?: (target: EventTarget & (HTMLInputElement | HTMLTextAreaElement)) => void
) => {
  const [form, setForm] = useState(initialState);

  // Reset function
  const clear = () => setForm(initialState);

  // Submit event
  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit(form);
  };

  // On change event
  const handleFormChange = ({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // Do callback if exists
    if (callback) callback(target);

    // Get value by type
    const value = () => {
      // Check if textarea
      if (target instanceof HTMLTextAreaElement) return target.value;

      switch (target.type) {
        case 'checkbox':
          return target.checked;

        case 'file':
          return { file: (target.files || [{}])[0], path: target.value };

        default:
          return target.value;
      }
    };

    // Update form
    setForm({
      ...form,
      [target.name]: value(),
    });
  };

  // On select change event
  const handleSelectChange = (selected: MultiValue<SelectItem> | SingleValue<SelectItem>, name: string) => {
    setForm({
      ...form,
      [name]: selected,
    });
  };

  // On Radio change event
  const handleRadioChange = (selected: string | boolean, name: string) => {
    setForm({
      ...form,
      [name]: selected,
    });
  };

  return { form, handleFormChange, handleSelectChange, handleRadioChange, setForm, clear, onSubmit: submit };
};

export default useForm;
