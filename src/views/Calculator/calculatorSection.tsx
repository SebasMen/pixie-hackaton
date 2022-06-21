import { useState } from 'react';

import CalculatorForm from './calculatorForm';
import ResultSection from './ResultSection';

import { CalculatorForm as CalculatorFormType } from '../../interfaces/calculator';
import { SelectItem } from '../../components/form/selectField';
import { useForm } from '../../hooks';

import { dogCalculator, fullDogCalculator, backgroundCalculator } from '../../assets/images';

const ages: SelectItem[] = [
  { value: '6', label: '6 Meses' },
  { value: '8', label: '8 Meses' },
  { value: '12', label: '12 Meses' },
];

const types: SelectItem[] = [
  { value: 'dog', label: 'Perro' },
  { value: 'cat', label: 'Gato' },
];

const exercises: SelectItem[] = [
  { value: 'low', label: 'Baja' },
  { value: 'medium', label: 'Normal' },
  { value: 'high', label: 'Alta' },
];

export const CalculatorSection = ({ setView }:CalculatorSectionProps) => {
  // Hooks
  const { form, onSubmit, handleFormChange, handleSelectChange } = useForm<CalculatorFormType>({
    name: '',
    type: types[0],
    typeOptions: types,
    age: ages[0],
    ageOptions: ages,
    exactAge: 0,
    allergies: '',
    diseases: '',
    exercise: exercises[0],
    exerciseOptions: exercises,
    idealWeight: 0
  }, form => handleSubmit(form));
  const [isResult, setIsResult] = useState(false);

  // Methods
  const handleSubmit = (form: CalculatorFormType) => {
    setIsResult(true);
  };

  // Component
  return (
    <>
      {isResult ? (<ResultSection />)
        :
        (
          <div className='w-full flex flex-col gap-2 rounded-t-3xl bg-sixth -mt-5 z-10'>
            <div className='flex gap-2'>
              {/* Background */}
              <div className='hidden tall:hidden md:w-1/2 md:overflow-hidden md:block'>
                <img src={backgroundCalculator} className='md:absolute md:-z-10' />
                <img src={dogCalculator} className='w-full z-10' />
              </div>
              {/* Form */}
              <CalculatorForm form={form} onSubmit={onSubmit} onChange={handleFormChange} onSelectChange={handleSelectChange} setView={setView}/>
            </div>
            {/* Mobile Dog */}
            <img src={fullDogCalculator} className='block w-full z-10 pb-5 sm:hidden' />
          </div>
        )
      }
    </>
  );
};

interface CalculatorSectionProps {
  setView: React.Dispatch<React.SetStateAction<number>>
}

export default CalculatorSection;
