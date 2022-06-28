import { useState } from 'react';

import CalculatorForm from './calculatorForm';
import ResultSection from './ResultSection';

import { CalculatorForm as CalculatorFormType } from '../../interfaces/calculator';
import { SelectItem } from '../../components/form/selectField';
import { useForm } from '../../hooks';

import { dogCalculator, fullDogCalculator, backgroundCalculator } from '../../assets/images';
import { getPetFeedData, PetFeedData, PetInfo } from '../../helpers/calculator';
import useAppContext from '../../hooks/useAppContext';

const ages: SelectItem[] = [
  { value: 'cachorros', label: 'Cachorro (2 a 12 meses)' },
  { value: 'adultos', label: 'Adulto (1 a 6 años)' },
  { value: 'senior', label: 'Senior (7 años en adelante)' },
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
  const { form, onSubmit, handleFormChange, handleSelectChange } = useForm<CalculatorFormType>(
    {
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
      idealWeight: 0,
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

  // Component
  return (
    <>
      {isResult ? (
        <ResultSection data={feedData} />
      ) : (
        <div className='w-full flex flex-col items-center justify-center gap-2 rounded-t-3xl bg-sixth -mt-5 z-10'>
          <div className='w-full flex gap-2 max-w-[1440px]'>
            {/* Background */}
            <div className='hidden tall:hidden md:w-1/2 md:overflow-hidden md:block'>
              <img src={backgroundCalculator} className='md:absolute md:-z-10' />
              <img src={dogCalculator} className='w-full z-10' />
            </div>
            {/* Form */}
            <CalculatorForm
              form={form}
              onSubmit={onSubmit}
              onChange={handleFormChange}
              onSelectChange={handleSelectChange}
            />
          </div>
          {/* Mobile Dog */}
          <img src={fullDogCalculator} className='block w-full z-10 pb-5 sm:hidden' />
        </div>
      )}
    </>
  );
};

interface CalculatorSectionProps {
  setView: React.Dispatch<React.SetStateAction<number>>;
}

export default CalculatorSection;
