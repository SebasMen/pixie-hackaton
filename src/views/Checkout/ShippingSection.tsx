import Button from '../../components/common/button';
import ResumenShipping from './ResumenShipping';
import RadioField from '../../components/form/radioField';
import { shippingTypeForm, SubmissionFormInterface } from '../../interfaces/checkout';
import { useForm } from '../../hooks';
import { useState } from 'react';

const ShippingSection = ({ changeStep, userData, setData }: SubmissionFormProps) => {
  // Hooks
  const [typeShippingSt, setTypeShippingSt] = useState<'estandar' | 'rapido'>('estandar');
  const { onSubmit, handleRadioChange } = useForm<shippingTypeForm>({
    type: 'estandar',
    price: 12000
  },
  form => handleSubmit(form));

  // Methods
  const handleSubmit = (form: shippingTypeForm) => {
    setData(form);
    changeStep(4);
  };

  return (
    <div className='lg:w-1/2 lg:pl-4'>
      <ResumenShipping
        location = {`${userData?.phone}, ${userData?.address}, ${userData?.houseNumber}, ${userData?.apartment}, ${userData?.reference}, ${userData?.city}`}
        email={userData?.email}
      />
      <form className='pt-5' onSubmit={onSubmit}>
        <div className='mb-3'>
          <span className='font-bold text-xl'>Envios</span>
        </div>
        <div className='bg-white w-full py-2 px-5 flex flex-col text-sm mb-5 rounded-2xl'>
          <span className='mb-4'>Informacion de envíos</span>
          <ul className='font-subTitles list-disc ml-5'>
            <li>Envío estándar con entrega hasta 3-7 días hábiles.</li>
            <li>Envío gratis en compras mayores a $1599.00</li>
            <li>Hacemos envíos únicamente dentro de la república mexicana.</li>
          </ul>
        </div>
        <div className='bg-white px-3 rounded-2xl'>
          <div className='grid grid-flow-col py-5'>
            <div className='text-left text-sm font-subTitles'>
              <RadioField
                label='Envio estándar'
                value='estandar'
                currentState={typeShippingSt}
                changeState={setTypeShippingSt}
                name='typeShipping'
                labelClassName='font-sanzSemiBold'
                handleRadioChange={handleRadioChange}
              />
            </div>
            <div className='text-right font-bold font-sanzBold'>
              <span>$12.000</span>
            </div>
          </div>
        </div>
        <div className='lg:flex lg:flex-row-reverse lg:items-center'>
          <Button className='font-paragraph font-bold bg-primary text-[#fad7b1] mt-7 lg:w-72 lg:text-lg' type='submit'>
            Seguir con envios
          </Button>
          <div className='text-center font-subTitles text-base text-primary mt-6 cursor-pointer lg:mr-14' onClick={() => changeStep(2)}>
            <span>{'<'} Volver a la información</span>
          </div>
        </div>
      </form>
    </div>
  );
};

interface SubmissionFormProps {
  changeStep: React.Dispatch<React.SetStateAction<number>>;
  userData: SubmissionFormInterface | undefined;
  setData: React.Dispatch<React.SetStateAction<shippingTypeForm>>
}

export default ShippingSection;
