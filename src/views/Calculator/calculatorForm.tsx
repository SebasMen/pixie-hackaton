import { useState } from 'react';

import Button from '../../components/common/button';
import TextField from '../../components/form/textField';

import { CalculatorForm as CalculatorFormType } from '../../interfaces/calculator';

export const CalculatorForm = ({ onChange, onSubmit, form: { name, type, age, exactAge, allergies, diseases, exercise, idealWeight } }: CalculatorFormProps) => {
  // Hooks
  const [page, setPage] = useState(0);

  // Component
  return (
    <form className='flex-grow flex flex-col gap-2 text-red-500 py-14 md:px-32 px-9' onSubmit={onSubmit}>
      <p className='font-bold text-center mb-16 text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

      {/* Page 0 */}
      <div className={`flex flex-col gap-2 w-full animate__animated animate__fast ${page === 0 ? 'animate__fadeInRightBig' : 'hidden animate__fadeOutRightBig'}`}>
        <TextField name='name' value={name} handler={onChange} label='¿Como se llama tu mascota? *' />
        <TextField name='type' value={type} handler={onChange} label='Tu mascota es un... *' />
        <TextField name='age' value={age} handler={onChange} type='number' label='Edad *' />
        <TextField name='exactAge' value={exactAge} handler={onChange} type='number' label='Edad exacta en meses *' />
        <div className='flex justify-end gap-7 mt-4'>
          <Button className='bg-primary text-white w-36' onClick={() => setPage(1)}>Siguiente</Button>
        </div>
      </div>

      {/* Page 1 */}
      <div className={`flex flex-col gap-2 w-full animate__animated animate__fast ${page === 1 ? 'animate__fadeInRightBig' : 'hidden animate__fadeOutRightBig'}`}>
        <TextField name='idealWeight' value={idealWeight} type='number' handler={onChange} label='Peso ideal en kilogramos*' />
        <TextField name='exercise' value={exercise} type='number' handler={onChange} label='Actividad fisica*' />
        <TextField name='diseases' value={diseases} handler={onChange} label='Enfermedades*' />
        <TextField name='allergies' value={allergies} handler={onChange} label='Alergias*' />
        <div className='flex justify-end gap-7 mt-4'>
          <Button className='ring-2 ring-primary bg-transparent text-primary w-36' onClick={() => setPage(0)} >Anterior</Button>
          <Button className='bg-primary text-white w-36' type='submit'>Consultar</Button>
        </div>
      </div>
    </form>
  );
};

interface CalculatorFormProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  form: CalculatorFormType;
}

export default CalculatorForm;
