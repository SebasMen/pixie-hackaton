import { useState } from 'react';

import { MultiValue, SingleValue } from 'react-select';

import Button from '../../components/common/button';
import TextField from '../../components/form/textField';
import SelectField, { SelectItem } from '../../components/form/selectField';

import { CalculatorForm as CalculatorFormType } from '../../interfaces/calculator';

export const CalculatorForm = ({ onChange, onSelectChange, onSubmit, form: { name, type, typeOptions, age, ageOptions, exactAge, exerciseOptions, allergies, diseases, exercise, idealWeight } }: CalculatorFormProps) => {
  // Hooks
  const [page, setPage] = useState(0);

  // Component
  return (
    <form className='relative overflow-hidden flex-grow flex flex-col gap-2 text-red-500 py-14 lg:pr-28 px-9 md:w-1/2' onSubmit={onSubmit}>
      <div className='flex relative'>
        {/* Page 0 */}
        <div className={`flex flex-col gap-2 w-full md:gap-5 animate__animated animate__fast font-subTitles ${page === 0 ? 'relative animate__fadeInRight' : 'hidden'}`}>
          <p className='font-bold text-center mb-16 text-xl'>Descubre cuál es el plan que más le conviene ¡GET STARTED!</p>

          <TextField name='name' value={name} handler={onChange} label='¿Como se llama tu mascota? *' />
          <SelectField name='type' value={type} options={typeOptions} onChange={onSelectChange} label='Tu mascota es un... *' />
          <SelectField name='age' value={age} options={ageOptions} onChange={onSelectChange} label='Edad *' />
          <TextField name='exactAge' value={exactAge} handler={onChange} type='number' label='Edad exacta en meses *' />
          <div className='flex justify-center gap-7 mt-4 md:justify-end'>
            <Button className='bg-primary text-white w-36' onClick={() => setPage(1)}>Siguiente</Button>
          </div>
        </div>

        {/* Page 1 */}
        <div className={`flex flex-col gap-2 w-full md:gap-5 animate__animated animate__fast font-subTitles ${page === 1 ? 'relative animate__fadeInRight' : 'hidden'}`}>
          <div className='w-full flex flex-col items-center justify-center gap-6 mb-16 text-center'>
            <p className='font-subTitles font-bold text-lg'>¿Sabes el peso ideal de tu mascota? Revisa esta guía:</p>

            <div className='flex md:flex-col w-full justify-center items-center gap-5 sm:gap-10 sm:flex-row'>
              <Button className='ring-red-500 ring-2 py-1 px-2 w-full md:w-max md:px-10' padding={'py-1 px-1'}>
                <span className='font-subTitles md:text-lg font-bold truncate'>
                  Tabla peso ideal gato
                </span>
              </Button>

              <Button className='ring-red-500 ring-2 py-1 px-2 w-full sm:w-max sm:px-10' padding={'py-1 px-1'}>
                <span className='font-subTitles md:text-lg font-bold truncate'>
                  Tabla peso ideal perro
                </span>
              </Button>
            </div>
          </div>
          <TextField name='idealWeight' value={idealWeight} type='number' handler={onChange} label='Peso ideal en kilogramos*' />
          <SelectField name='exercise' value={exercise} options={exerciseOptions} onChange={onSelectChange} label='Actividad fisica*' />
          <TextField name='diseases' value={diseases} handler={onChange} label='Enfermedades*' />
          <TextField name='allergies' value={allergies} handler={onChange} label='Alergias*' />
          <div className='flex justify-center gap-7 mt-4 md:justify-end'>
            <Button className='ring-2 ring-primary bg-transparent text-primary w-36' onClick={() => setPage(0)} >Anterior</Button>
            <Button className='bg-primary text-white w-36' type='submit'>Consultar</Button>
          </div>
        </div>
      </div>
    </form>
  );
};

interface CalculatorFormProps {
  onSelectChange: (selected: MultiValue<SelectItem> | SingleValue<SelectItem>, name: string) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  form: CalculatorFormType;
}

export default CalculatorForm;
