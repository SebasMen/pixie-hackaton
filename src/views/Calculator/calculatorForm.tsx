import { useState } from 'react';

import { MultiValue, SingleValue } from 'react-select';

import Button from '../../components/common/button';
import TextField from '../../components/form/textField';
import SelectField, { SelectItem } from '../../components/form/selectField';

import { CalculatorForm as CalculatorFormType } from '../../interfaces/calculator';

export const CalculatorForm = ({ onChange, onSelectChange, onSubmit, form: { name, type, typeOptions, age, ageOptions, exactAge, exerciseOptions, allergies, diseases, exercise, idealWeight }, setView }: CalculatorFormProps) => {
  // Hooks
  const [page, setPage] = useState(0);

  const handleChangeView = (page: number) => {
    setPage(page);
    setView(page);
  };

  // Component
  return (
    <form className='relative overflow-hidden flex-grow flex flex-col gap-2 text-primary py-14 lg:pr-28 px-5 md:w-1/2' onSubmit={onSubmit}>
      <div className='flex relative'>
        {/* Page 0 */}
        <div className={`flex flex-col gap-2 w-full md:gap-5 animate__animated animate__fast font-subTitles ${page === 0 ? 'relative animate__fadeInRight' : 'hidden'}`}>
          <div className='font-bold text-center mb-16 text-xl'>
            <p>Descubre cuál es la opción y cantidad ideal de Pixie para tu amigo de cuatro patas </p>
            <p className='font-extrabold'>¡GET STARTED!</p>
          </div>

          <TextField name='name' value={name} handler={onChange} label='¿Cómo se llama tu mascota? *' />
          <SelectField name='type' value={type} options={typeOptions} onChange={onSelectChange} label='Tu mascota es un... *' />
          <SelectField name='age' value={age} options={ageOptions} onChange={onSelectChange} label='Edad *' />
          <TextField name='exactAge' value={exactAge} handler={onChange} type='number' label='Edad exacta en meses *' />
          <div className='flex justify-between items-center mt-4'>
            <div className='flex gap-2 items-center px-5'>
              <div className='w-3 h-3 bg-gray-600 rounded-full' />
              <div className='w-3 h-3 bg-gray-400 rounded-full' />
            </div>

            <div className='flex justify-center gap-7 md:justify-end'>
              <Button className='bg-primary text-white w-36' onClick={() => handleChangeView(1)}>Siguiente</Button>
            </div>
          </div>
        </div>

        {/* Page 1 */}
        <div className={`flex flex-col gap-2 w-full md:gap-5 animate__animated animate__fast font-subTitles ${page === 1 ? 'relative animate__fadeInRight' : 'hidden'}`}>
          <div className='w-full flex flex-col items-center gap-6 mb-8 text-center'>
            <div className='flex flex-col font-subTitles font-bold text-lg md:block'>
              <span>¿Sabes el peso ideal de tu mascota? &nbsp;</span>
              <span>Revisa esta guía:</span>
            </div>
            <div className='flex w-full px-3 justify-center items-center gap-3 sm:gap-6 lg2:gap-4 sm:flex-row md:px-0'>
              <Button className='ring-primary ring-1 w-full md:w-max' padding={'py-[0.4rem] px-2 md:py-[0.3rem] xl1:px-8 xl2:px-[3.4rem] lg2:px-6'}>
                <span className='font-subTitles text-sm md:text-base font-bold truncate'>
                  Tabla peso ideal gato
                </span>
              </Button>

              <Button className='ring-primary ring-1 w-full sm:w-max' padding={'py-[0.4rem] px-2 md:py-[0.3rem] xl1:px-8 xl2:px-[3.4rem] lg2:px-6'}>
                <span className='font-subTitles text-sm md:text-base font-bold truncate'>
                  Tabla peso ideal perro
                </span>
              </Button>
            </div>
          </div>
          <TextField name='idealWeight' value={idealWeight} type='number' handler={onChange} label='Peso ideal en kilogramos*' />
          <SelectField name='exercise' value={exercise} options={exerciseOptions} onChange={onSelectChange} label='Actividad fisica*' />
          <TextField name='diseases' value={diseases} handler={onChange} label='Enfermedades*' />
          <TextField name='allergies' value={allergies} handler={onChange} label='Alergias*' />
          <div className='flex justify-between items-center mt-4'>
            <div className='flex gap-2 items-center px-5'>
              <div className='w-3 h-3 bg-gray-400 rounded-full' />
              <div className='w-3 h-3 bg-gray-600 rounded-full' />
            </div>
            <div className='flex justify-center gap-7 md:justify-end'>
              <Button className='ring-1 ring-primary bg-transparent text-primary w-36' onClick={() => handleChangeView(0)} >Anterior</Button>
              <Button className='bg-primary text-white w-36' type='submit' onClick={() => handleChangeView(2)}>Consultar</Button>
            </div>
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
  setView: React.Dispatch<React.SetStateAction<number>>
}

export default CalculatorForm;
