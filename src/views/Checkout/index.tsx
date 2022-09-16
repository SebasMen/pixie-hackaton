import { useEffect, useState } from 'react';
import { useFetch } from '../../hooks';

import Page from '../../components/layout/page';
import ResumenSection from './ResumenProductSection';
import StepsSection from './StepsSection';
import SubmissionForm from './SubmissionForm';
import ShippingSection from './ShippingSection';
import PaymentSection from './PaymentSection';
import TotalSection from '../Basket/TotalSection';
import AnswerSection from './AnswerSection';
import Footer from '../../components/layout/footer';
import { SelectItem } from '../../components/form/selectField';

import { selectCountryService, shippingTypeForm, SubmissionFormInterface, typeShipping } from '../../interfaces/checkout';
import { postSendPayment } from '../../interfaces/payment';
import checkOutService from '../../services/checkOutService';

import { basketRed } from '../../assets/vectors/';

const CheckOut = () => {
  // Hooks
  const [step, setStep] = useState(2);
  const [countries, setcountries] = useState<SelectItem[]>();
  const [userInfo, setuserInfo] = useState<SubmissionFormInterface>();
  const [idCustomer, setIdCustomer] = useState('');
  const [shippingInfo, setShippingInfo] = useState<shippingTypeForm>({ type: 'estandar', price: 90 });
  const [paymentAnswer, setPaymentAnswer] = useState<postSendPayment>({
    status: 'wait',
    data: {
      order_detail: {
        details: {
          approvedTransactionAmount: 0,
          transactionId: ''
        },
        ticketNumber: '',
      }
    }
  });

  // Get countries
  const { loading, response } = useFetch<selectCountryService>(checkOutService.getOneCountry);

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

    setcountries(countries);
  }, [loading, response]);

  // Methods
  const updateShippingInfo = (name: typeShipping, value:number) => {
    setShippingInfo({ type: name, price: value });
  };

  return (
    <Page className='bg-sixth'>
      <div className='w-full mb-16 max-w-[1440px] pt-1 lg:px-32 lg:pt-5 lg:pb-20'>
        <div className='flex gap-5 items-center px-5 lg:pl-4'>
          <img src={basketRed} className='w-5 h-5 lg:w-7 lg:h-7'/>
          <span className='text-primary text-[25px] lg:text-[36px] lg:tracking-[-1.5px]'>Tu canasta</span>
        </div>

        {/* resumen section movil */}
        { step !== 5 &&
        <div className='block bg-white mb-7 lg:hidden'>
          <ResumenSection shippingInfo={shippingInfo}/>
        </div>
        }

        {/* payments steps */}
        <div className='px-5 mt-4 font-subTitles text-fourth lg:px-4 lg:mt-5'>
          <StepsSection step={step} setStep={setStep}/>
        </div>
        {step === 5 ?
          <AnswerSection
            paymentAnswer={paymentAnswer}
          />
          :
          <div className='lg:flex lg:flex-row-reverse'>
            <div className='lg:w-[48%]'>
              <div className='bg-white lg:ml-[7.2rem] lg:pl-6 lg:pr-4 lg:pb-8 lg:pt-6 lg:rounded-xl lg:mt-[0.8rem] lg:sticky lg:top-[10%]'>
                <div className='hidden font-bold tracking-[-0.55px] text-pixieLightBlue lg:text-base lg:block'>
                  <span>RESUMEN DE TU PEDIDO</span>
                </div>
                {/* resumen section desktop */}
                <div className='hidden lg:block'>
                  <ResumenSection shippingInfo={shippingInfo} />
                  <TotalSection showTaxes={true} setUpdateShippingPrince={updateShippingInfo} shippingInfo={shippingInfo}/>
                </div>
              </div>
            </div>
            <div className='lg:w-[52%] lg:pl-4 lg:pr-2'>
              { step === 2
                &&
                <SubmissionForm
                  setData={setuserInfo}
                  setIdCustomer={setIdCustomer}
                  changeStep={setStep}
                  countriesOptions={countries}
                />
              }
              { step === 3
                  &&
                  <ShippingSection
                    changeStep={setStep}
                    userData={userInfo}
                    setData={setShippingInfo}
                    shippingInfo={shippingInfo}
                  />
              }
              { step === 4
              &&
              <PaymentSection
                userData={userInfo}
                shippingData={shippingInfo}
                idCustomer={idCustomer}
                changeStep={setStep}
                setPaymentAnswer={setPaymentAnswer}
                countriesOptions={countries}
              />
              }
            </div>
          </div>
        }
      </div>
      <Footer />
    </Page>
  );
};

export default CheckOut;
