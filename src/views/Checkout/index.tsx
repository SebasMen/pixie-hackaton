import { useState } from 'react';

import Page from '../../components/layout/page';
import ResumenSection from './ResumenProductSection';
import StepsSection from './StepsSection';
import SubmissionForm from './SubmissionForm';
import ShippingSection from './ShippingSection';
import PaymentSection from './PaymentSection';
import TotalSection from '../Basket/TotalSection';

import { basketRed } from '../../assets/vectors/';
import { shippingTypeForm, SubmissionFormInterface } from '../../interfaces/checkout';
import Footer from '../../components/layout/footer';

const CheckOut = () => {
  const [step, setStep] = useState(2);
  const [userInfo, setuserInfo] = useState<SubmissionFormInterface>();
  const [idCustomer, setIdCustomer] = useState('');
  const [shippingInfo, setShippingInfo] = useState<shippingTypeForm>({ type: 'estandar', price: 12000 });

  return (
    <Page className='bg-sixth'>
      <div className='px-6 w-full mb-16 max-w-[1440px] lg:px-32 lg:pt-5 lg:pb-20'>
        <div className='flex gap-5 lg:pl-4'>
          <img src={basketRed} />
          <span className='text-primary text-[25px] lg:text-[36px] tracking-[-1.5px]'>Tu canasta</span>
        </div>
        {/* payments steps */}
        <div className='mt-5 font-subTitles text-fourth lg:pl-4 '>
          <StepsSection step={step}/>
        </div>
        <div className='lg:flex lg:flex-row-reverse'>
          <div className='lg:w-1/2'>
            <div className='bg-white lg:ml-[8.5rem] lg:pl-6 lg:pr-8 lg:pb-8 lg:pt-6 lg:rounded-xl lg:mt-3'>
              <div className='hidden font-bold pb-4 tracking-[-0.55px] text-primary lg:text-base lg:block'>
                <span>RESUMEN DE TU PEDIDO</span>
              </div>
              <div className='hidden md:block'>
                <TotalSection/>
              </div>
            </div>
          </div>
          { step === 2
            &&
            <SubmissionForm
              setData={setuserInfo}
              setIdCustomer={setIdCustomer}
              changeStep={setStep}
            />
          }
          { step === 3
              &&
              <ShippingSection
                changeStep={setStep}
                userData={userInfo}
                setData={setShippingInfo}
              />
          }
          { step === 4
          &&
          <PaymentSection
            userData={userInfo}
            shippingData={shippingInfo}
            idCustomer={idCustomer}
            changeStep={setStep}
          />
          }
        </div>
      </div>
      <Footer />
    </Page>
  );
};

export default CheckOut;
