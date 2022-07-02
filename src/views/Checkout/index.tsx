import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SelectItem } from '../../components/form/selectField';
import Page from '../../components/layout/page';
import { useForm } from '../../hooks';
import { SubmissionFormInterface } from '../../interfaces/checkout';
import ResumenSection from './ResumenProductSection';
import StepsSection from './StepsSection';
import SubmissionForm from './SubmissionForm';
import ShippingSection from './ShippingSection';

const countriesOptions: SelectItem[] = [
  { value: '1', label: 'Colombia' },
  { value: '2', label: 'Ecuador' },
];

const provinceOptions: SelectItem[] = [
  { value: '1', label: 'Bogota' },
  { value: '2', label: 'Medellin' },
];

const CheckOut = () => {
  const [step, setStep] = useState(2);
  // Hooks
  const { form, onSubmit, handleFormChange, handleSelectChange } = useForm<SubmissionFormInterface>(
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
      province: provinceOptions[0],
      provinces: provinceOptions,
      typeShipping: ''
    },
    form => handleSubmit(form)
  );

  // Methods
  const handleSubmit = (form: SubmissionFormInterface) => {
    console.log(form);
  };

  return (
    <Page>
      <div className='w-full font-paragraph mb-16'>
        <div className='px-6 flex flex-col gap-2 text-left'>
          <span className='text-[25px] font-bold'>Tu canasta</span>
        </div>
        <ResumenSection/>
        <form className='px-6' onSubmit={onSubmit}>
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
          { step === 3 && <ShippingSection form={form} onChange={handleFormChange} onSelectChange={handleSelectChange} changeStep={setStep}/> }
        </form>
      </div>
    </Page>
  );
};

export default CheckOut;
