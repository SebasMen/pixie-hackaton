import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import CounterList from '../../components/common/counterList';
import RadioField from '../../components/form/radioField';
import { createComboForm } from '../../interfaces/product';

const StepOneSection = ({ handleRadioChange, setForm }: StepOneSectionProps) => {
  // Hooks
  const [quantityChoose, setQuantityChoose] = useState('2');

  useEffect(() => {
    setForm(old => ({ ...old, flavor: [] }));
    return () => {};
  }, [quantityChoose]);

  return (
    <div className='mt-7'>
      <div className='flex flex-col gap-2'>
        <CounterList label='Elige la cantidad de sabores' numberItem={1} classNameLabel='text-lg md:text-xl'/>
        <div className='flex ml-11 mt-3 gap-20'>
          <RadioField
            changeState={setQuantityChoose}
            currentState={quantityChoose}
            handleRadioChange={handleRadioChange}
            name='quantityChoose'
            value='2'
            label='2'
          />
          <RadioField
            changeState={setQuantityChoose}
            currentState={quantityChoose}
            handleRadioChange={handleRadioChange}
            name='quantityChoose'
            value='4'
            label='4'
          />
          <RadioField
            changeState={setQuantityChoose}
            currentState={quantityChoose}
            handleRadioChange={handleRadioChange}
            name='quantityChoose'
            value='5'
            label='5'
          />
        </div>
      </div>
    </div>
  );
};

interface StepOneSectionProps {
  handleRadioChange: (selected: string | boolean, name: string) => void,
  setForm: Dispatch<SetStateAction<createComboForm>>
}

export default StepOneSection;
