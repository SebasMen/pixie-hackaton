import CalculatorForm from './calculatorForm';

import { CalculatorForm as CalculatorFormType } from '../../interfaces/calculator';
import { useForm } from '../../hooks';

import { dogCalculator, backgroundCalculator } from '../../assets/images';
import { useState } from 'react';
import ResultSection from './ResultSection';

export const CalculatorSection = () => {
  // Hooks
  const { form, onSubmit, handleFormChange } = useForm<CalculatorFormType>({
    name: '',
    type: '',
    age: 0,
    exactAge: 0,
    allergies: '',
    diseases: '',
    exercise: 0,
    idealWeight: 0
  }, form => handleSubmit(form));
  const [isResult, setIsResult] = useState(false);

  // Methods
  const handleSubmit = (form: CalculatorFormType) => {
    console.log(form);
    setIsResult(true);
  };

  // Component
  return (
    <>
      {isResult ? (<ResultSection/>)
        :
        (<div className='w-full flex gap-2 rounded-t-3xl bg-sixth -mt-5 z-10'>
          <div className='md:w-1/2 md:overflow-hidden md:block hidden'>
            <img src={backgroundCalculator} className='md:absolute md:-z-10' />
            <img src={dogCalculator} className='w-full z-10' />
          </div>
          <CalculatorForm form={form} onSubmit={onSubmit} onChange={handleFormChange} />
        </div>)
      }
    </>
  );
};

export default CalculatorSection;
