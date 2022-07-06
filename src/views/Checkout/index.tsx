import { useState } from 'react';
import { SelectItem } from '../../components/form/selectField';
import Page from '../../components/layout/page';
import { useForm } from '../../hooks';
import { SubmissionFormInterface } from '../../interfaces/checkout';
import ResumenSection from './ResumenProductSection';
import StepsSection from './StepsSection';
import SubmissionForm from './SubmissionForm';
import ShippingSection from './ShippingSection';
import PaymentSection from './PaymentSection';
import TotalSection from '../Basket/TotalSection';

const countriesOptions: SelectItem[] = [
  { value: '1', label: 'Colombia' },
  { value: '2', label: 'Ecuador' },
];

const statesOptions: SelectItem[] = [
  { value: '1', label: 'Bogota' },
  { value: '2', label: 'Medellin' },
];

const CheckOut = () => {
  const [step, setStep] = useState(2);
  // Hooks
  const { form, onSubmit, handleFormChange, handleSelectChange, handleRadioChange } = useForm<SubmissionFormInterface>(
    {
      address: '',
      apartament: '',
      city: '',
      country: countriesOptions[0],
      countries: countriesOptions,
      document: '',
      email: '',
      lastNames: '',
      names: '',
      phone: '',
      postalCode: '',
      state: statesOptions[0],
      states: statesOptions,
      typeShipping: 'estandar',
      typePayment: 'credito',
      billingAddress: ''
    },
    form => handleSubmit(form)
  );

  // Methods
  const handleSubmit = (form: SubmissionFormInterface) => {
    console.log(form);
  };

  return (
    <Page>
      <div className='w-full font-paragraph mb-16 lg:px-14'>
        <div className='px-6 flex flex-col gap-2 text-left'>
          <span className='text-[25px] font-bold lg:text-[36px]'>Tu canasta</span>
        </div>
        <div className='lg:flex lg:flex-row-reverse'>
          <div className='lg:w-1/2'>
            <div className='lg:bg-[#E4E4E4] lg:ml-52 lg:px-6 lg:pb-8 lg:pt-5 lg:rounded-xl lg:mt-7'>
              <div className='hidden font-bold pb-4 lg:text-base lg:block'>
                <span>RESUMEN DE TU PEDIDO</span>
              </div>
              <ResumenSection
                padding='px-0'
              />
              <TotalSection showTaxes={true}/>
            </div>
          </div>
          {/* Form */}
          <form className='px-6 lg:w-1/2' onSubmit={onSubmit}>
            <StepsSection step={step}/>
            { step === 2
              &&
              <SubmissionForm
                form={form}
                onChange={handleFormChange}
                onSelectChange={handleSelectChange}
                changeStep={setStep}
              />
            }
            { step === 3
              &&
              <ShippingSection
                form={form}
                onRadioChange={handleRadioChange}
                changeStep={setStep}
              />
            }
            { step === 4
            &&
            <PaymentSection
              form={form}
              onRadioChange={handleRadioChange}
              changeStep={setStep}
            />
            }
          </form>
        </div>
      </div>
    </Page>
  );
};

export default CheckOut;
