import { useState } from 'react';
import Button from '../../components/common/button';
import RadioField from '../../components/form/radioField';
import { SubmissionFormInterface } from '../../interfaces/checkout';
import ResumenShipping from './ResumenShipping';

const PaymentSection = ({
  onRadioChange,
  changeStep,
  form: {
    country,
    address,
    apartment,
    city,
    zip_code,
    email,
    typePayment,
    billingAddress
  }
}:PaymentSectionProps) => {
  const [typePaymentSt, setTypePaymentSt] = useState<typeof typePayment>(typePayment);
  const [billingAdressSt, setBillingAdressSt] = useState<string>(billingAddress);

  return (
    <>
      <ResumenShipping
        location = {`${zip_code}, ${address}, ${apartment}, ${city}, ${country.label}`}
        email={email}
      />
      <div className='flex flex-col pt-4'>
        <span className='font-bold text-lg'>Pago</span>
        <p className='font-medium text-xs'>Todas las transacciones son seguras y están encriptadas</p>
        <div className='text-left text-sm pt-4 mb-10 flex flex-col'>
          <RadioField
            label='Tarjeta de crédito'
            changeState={setTypePaymentSt}
            currentState={typePaymentSt}
            value='credito'
            name='typePayment'
            handleRadioChange={onRadioChange}
          />
          <RadioField
            label='Tarjeta debito'
            changeState={setTypePaymentSt}
            currentState={typePaymentSt}
            name='typePayment'
            handleRadioChange={onRadioChange}
            value='debito'
          />
        </div>
      </div>
      <span className='font-bold text-lg'>Dirección de facturación</span>
      <div className='border border-primary px-2.5'>
        <div className='border-b border-primary py-5'>
          <div className='text-left text-sm'>
            <RadioField
              label='Misma dirección de envío'
              changeState={setBillingAdressSt}
              currentState={billingAdressSt}
              name='billingAddress'
              handleRadioChange={onRadioChange}
              value={billingAddress}
            />
          </div>
        </div>
        <div className='py-5'>
          <div className='text-left text-sm'>
            <RadioField
              label=' Usar una dirección de facturación diferente'
              changeState={setBillingAdressSt}
              currentState={billingAdressSt}
              name='billingAddress'
              handleRadioChange={onRadioChange}
              value='otro'
            />
          </div>
        </div>
      </div>
      <div className='pt-3'>
        <Button className='bg-primary text-white mt-7 w-full' type='submit'>
          Pagar
        </Button>
        <div className='text-center mt-5 cursor-pointer text-sm' onClick={() => changeStep(3)}>
          {'<'} Volver a envíos
        </div>
      </div>
    </>
  );
};

interface PaymentSectionProps {
  onRadioChange: (selected: string, name: string) => void;
  changeStep: React.Dispatch<React.SetStateAction<number>>;
  form: SubmissionFormInterface;
}

export default PaymentSection;
