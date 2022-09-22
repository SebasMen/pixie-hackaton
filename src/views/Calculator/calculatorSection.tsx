import { useState } from 'react';
import { useForm } from '../../hooks';
import useAppContext from '../../hooks/useAppContext';

import CalculatorForm from './calculatorForm';
import ResultSection from './ResultSection';

import { SelectItem } from '../../components/form/selectField';

import { backgroundCalculator, calculatorCat, calculatorDog } from '../../assets/images';
import { getPetFeedData, PetFeedData, PetInfo } from '../../helpers/calculator';
import { CalculatorForm as CalculatorFormType } from '../../interfaces/calculator';

const ages: SelectItem[] = [
  { value: 'cachorros', label: 'Cachorro (2 a 12 meses)' },
  { value: 'adultos', label: 'Adulto (1 a 8 años)' },
  { value: 'senior', label: 'Senior (8 años en adelante)' },
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

export const CalculatorSection = ({ setView }: CalculatorSectionProps) => {
  // Hooks
  const { form, onSubmit, handleFormChange, handleRadioChange, handleSelectChange, setForm } = useForm<CalculatorFormType>(
    {
      name: '',
      type: { label: 'Selecciona', value: '' },
      typeOptions: types,
      age: ages[0],
      ageOptions: ages,
      exactAge: 0,
      allergies: {
        alergies: false,
        hepatics: false,
        obesity: false,
        renal: false,
        sensitive_stomach: false
      },
      exercise: exercises[0],
      exerciseOptions: exercises,
      idealWeight: 0,
      hasAllergies: false
    },
    form => handleSubmit(form)
  );

  const { toast } = useAppContext();

  const [isResult, setIsResult] = useState(false);
  const [feedData, setFeedData] = useState<PetFeedData>();

  // Methods
  const handleSubmit = (form: CalculatorFormType) => {
    if (!form.exactAge || !form.name || !form.idealWeight) return;

    const data = getPetFeedData({
      activity: form.exercise.value as PetInfo['activity'],
      age: form.exactAge,
      range: form.age.value as PetInfo['range'],
      type: form.type.value as PetInfo['type'],
      name: form.name,
      weight: form.idealWeight,
      allergies: form.allergies
    });

    if (!data)
      return toast.fire({
        icon: 'warning',
        title: 'Hubo un error en el calculo, porfavor revise los datos.',
      });

    setFeedData(data);
    setIsResult(true);
    setView(2);
  };

  const reset = () => {
    setIsResult(false);
    setView(0);
  };

  // Component
  return (
    <>
      {isResult ? (
        <ResultSection data={feedData} reset={reset} />
      ) : (
        <div className='w-full flex flex-col items-center justify-center gap-2 rounded-t-3xl bg-sixth -mt-5 z-10'>
          <div className='w-full flex gap-2 max-w-[1440px]'>
            {/* Background */}
            <div className='hidden tall:hidden md:w-1/2 md:overflow-hidden md:flex xl2:justify-center'>
              <img src={backgroundCalculator} className='md:absolute md:-z-10 md:ml-24 md:mt-7' />
              {form.type.value === 'dog' &&
                <img src={calculatorDog} className='animate__bounceIn animate__animated mt-16 mb-60 z-10 xl2:ml-20' />
              }
              {(form.type.value === 'cat' || form.type.value === '') &&
                <img src={calculatorCat} className='animate__bounceIn animate__animated mt-16 mb-32 lg:w-[570px] lg:h-[632px] z-10 lg2:ml-20' />
              }
            </div>
            {/* Form */}
            <CalculatorForm
              form={form}
              onSubmit={onSubmit}
              onChange={handleFormChange}
              onSelectChange={handleSelectChange}
              onRadioChange={handleRadioChange}
              setForm={setForm}
            />
          </div>
          {/* Mobile Dog */}
          {(form.type.value === 'cat' || form.type.value === '') &&
            <img src={calculatorCat} className='block w-full z-10 pr-5 sm:hidden' />
          }
          {form.type.value === 'dog' &&
           <img src={calculatorDog} className='block w-full z-10 pr-5 sm:hidden' />
          }
        </div>
      )}
    </>
  );
};

interface CalculatorSectionProps {
  setView: React.Dispatch<React.SetStateAction<number>>;
}

export default CalculatorSection;
