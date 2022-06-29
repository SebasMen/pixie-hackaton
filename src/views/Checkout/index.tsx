import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SelectItem } from '../../components/form/selectField';
import Page from '../../components/layout/page';
import { useForm } from '../../hooks';
import { SubmissionFormInterface } from '../../interfaces/checkout';
import ResumenSection from './ResumenSection';
import SubmissionForm from './SubmissionForm';

const countriesOptions: SelectItem[] = [
  { value: '1', label: 'Colombia' },
  { value: '2', label: 'Ecuador' },
];

const provinceOptions: SelectItem[] = [
  { value: '1', label: 'Bogota' },
  { value: '2', label: 'Medellin' },
];

const CheckOut = () => {
  const [showSubmissionForm, setShowSubmissionForm] = useState(false);
  const navigate = useNavigate();
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
      provinces: provinceOptions
    },
    form => handleSubmit(form)
  );

  // Methods
  const handleSubmit = (form: SubmissionFormInterface) => {
    console.log(form);
  };

  return (
    <Page>
      <div className='px-6 w-full font-paragraph mb-16'>
        <div className='flex flex-col gap-2 text-left mb-3'>
          <span className='text-[25px] font-bold'>Tu canasta</span>
          <span className='text-lg font-bold'>Direccion de envío</span>
        </div>
        {showSubmissionForm
          ?
          <SubmissionForm
            form={form}
            onChange={handleFormChange}
            onSelectChange={handleSelectChange}
            onSubmit={onSubmit}
          />
          :
          <ResumenSection/>
        }
      </div>
    </Page>
  );
};

export default CheckOut;
