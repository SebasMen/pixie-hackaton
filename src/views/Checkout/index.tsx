import { useCallback, useEffect, useState } from 'react';
import { SelectItem } from '../../components/form/selectField';
import Page from '../../components/layout/page';
import { useFetch, useForm } from '../../hooks';
import { selectCountry, selectCountryService, SubmissionFormInterface } from '../../interfaces/checkout';
import ResumenSection from './ResumenProductSection';
import StepsSection from './StepsSection';
import SubmissionForm from './SubmissionForm';
import ShippingSection from './ShippingSection';
import PaymentSection from './PaymentSection';
import TotalSection from '../Basket/TotalSection';
import checkOutService from '../../services/checkOutService';
import { mexicanStates } from '../../@fake/statesFake';

const countriesOptions: SelectItem[] = [
  { value: '1', label: 'Colombia' },
  { value: '2', label: 'Ecuador' },
];

const CheckOut = () => {
  const [step, setStep] = useState(2);

  const { loading, response } = useFetch<selectCountryService>(checkOutService.getOneCountry);
  // Hooks
  const { form, onSubmit, handleFormChange, handleSelectChange, handleRadioChange, setForm } = useForm<SubmissionFormInterface>(
    {
      address: '',
      apartment: '',
      city: '',
      country: countriesOptions[0],
      countries: countriesOptions,
      document: '',
      email: '',
      last_name: '',
      name: '',
      phone: '',
      zip_code: '',
      state: mexicanStates[0],
      states: mexicanStates,
      typeShipping: 'estandar',
      typePayment: 'credito',
      billingAddress: '',
      receive_information: '0'
    },
    form => handleSubmit(form)
  );

  useEffect(() => {
    // Manage loading empty response
    if (loading || !response) return;

    // Destructure response
    const { data, err } = response;

    // Manage response errores or no data
    if (!data || err) return;

    // Sorting out data
    const countries: SelectItem[] = data.map(country => ({
      label: country.name,
      value: country.id,
    }));

    setForm(old => ({
      ...old,
      countries
    }));
  }, [loading, response]);

  // Methods
  const handleSubmit = async (form: SubmissionFormInterface) => {
    const { error } = await checkOutService.sendUserInformation(form);
    if (error)
      console.log(error.map(er => console.log(er.msg)));
    else
      console.log('bien');
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
                padding='p-3 md:px-0'
              />
              <div className='hidden md:block'>
                <TotalSection showTaxes={true}/>
              </div>
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
