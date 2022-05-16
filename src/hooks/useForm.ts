import { useState } from 'react';

export const useForm = <T>(
  initialState: T,
  onSubmit: (form: T) => void,
  callback?: (target: EventTarget & HTMLInputElement) => void
) => {
  const [form, setForm] = useState(initialState);

  const clear = () => setForm(initialState);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit(form);
  };

  const handleFormChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (callback) callback(target);

    const value = () => {
      switch (target.type) {
        case 'checkbox':
          return target.checked;

        case 'file':
          return { file: (target.files || [{}])[0], path: target.value };

        default:
          return target.value;
      }
    };

    setForm({
      ...form,
      [target.name]: value(),
    });
  };

  return { form, handleFormChange, setForm, clear, onSubmit: submit };
};

export default useForm;
