import { SubmissionFormInterface } from '../../interfaces/checkout';
import { MultiValue, SingleValue } from 'react-select';
import { SelectItem } from '../../components/form/selectField';
import Button from '../../components/common/button';
import ResumenShipping from './ResumenShipping';
import RadioField from '../../components/form/radioField';
import { useEffect, useState } from 'react';

const ShippingSection = ({
  onRadioChange,
  changeStep,
  form: {
    typeShipping,
    country,
    address,
    apartment,
    city,
    zip_code,
    email
  }
}: SubmissionFormProps) => {
  // Hooks
  const [typeShippingSt, setTypeShippingSt] = useState<typeof typeShipping>(typeShipping);

  return (
    <>
      <ResumenShipping
        location = {`${zip_code}, ${address}, ${apartment}, ${city}, ${country.label}`}
        email={email}
      />
      <div className='pt-5'>
        <div className='mb-2'>
          <span className='font-bold'>Envios</span>
        </div>
        <div className='border border-primary px-2.5'>
          <div className='border-b border-primary grid grid-flow-col py-5'>
            <div className='text-left text-sm'>
              <RadioField
                label='Envio estándar'
                value='estandar'
                currentState={typeShippingSt}
                changeState={setTypeShippingSt}
                name='typeShipping'
                handleRadioChange={onRadioChange}
              />
            </div>
            <div className='text-right font-bold'>
              <span>$12.000</span>
            </div>
          </div>
          <div className='grid grid-flow-col py-5'>
            <div className='text-left text-sm'>
              <RadioField
                label='Envio rápido'
                value='rapido'
                currentState={typeShippingSt}
                changeState={setTypeShippingSt}
                name='typeShipping'
                handleRadioChange={onRadioChange}
              />
            </div>
            <div className='text-right font-bold'>
              <span>$20.000</span>
            </div>
          </div>
        </div>
      </div>
      <div className='pt-2'>
        <Button className='bg-primary text-white mt-7 w-full' onClick={() => changeStep(4)}>
          Seguir con el pago
        </Button>
        <div className='text-center mt-5 cursor-pointer text-sm' onClick={() => changeStep(2)}>
          {'<'} Volver a la informacion
        </div>
      </div>
    </>
  );
};

interface SubmissionFormProps {
  onRadioChange: (selected: string, name: string) => void;
  changeStep: React.Dispatch<React.SetStateAction<number>>;
  form: SubmissionFormInterface;
}

export default ShippingSection;
