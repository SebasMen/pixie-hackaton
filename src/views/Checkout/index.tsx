import { useState } from 'react';

import Page from '../../components/layout/page';
import ResumenSection from './ResumenProductSection';
import StepsSection from './StepsSection';
import SubmissionForm from './SubmissionForm';
import ShippingSection from './ShippingSection';
import PaymentSection from './PaymentSection';
import TotalSection from '../Basket/TotalSection';
import AnswerSection from './AnswerSection';

import { basketRed } from '../../assets/vectors/';
import { shippingTypeForm, SubmissionFormInterface } from '../../interfaces/checkout';
import Footer from '../../components/layout/footer';
import { postSendPayment } from '../../interfaces/payment';

const CheckOut = () => {
  const [step, setStep] = useState(2);
  const [userInfo, setuserInfo] = useState<SubmissionFormInterface>();
  const [idCustomer, setIdCustomer] = useState('');
  const [shippingInfo, setShippingInfo] = useState<shippingTypeForm>({ type: 'estandar', price: 12000 });
  const [paymentAnswer, setPaymentAnswer] = useState<postSendPayment>({
    status: 'wait',
    data: {
      order_detail: {
        details: {
          approvedTransactionAmount: 0,
          transactionId: ''
        },
      }
    }
  });

  return (
    <Page className='bg-sixth'>
      <div className='w-full mb-16 max-w-[1440px] pt-1 lg:px-32 lg:pt-5 lg:pb-20'>
        <div className='flex gap-5 items-center px-5 lg:pl-4'>
          <img src={basketRed} className='w-5 h-5 lg:w-7 lg:h-7'/>
          <span className='text-primary text-[25px] lg:text-[36px] lg:tracking-[-1.5px]'>Tu canasta</span>
        </div>

        {/* resumen section movil */}
        <div className='block bg-white mb-7 lg:hidden'>
          <ResumenSection shippingInfo={shippingInfo}/>
        </div>

        {/* payments steps */}
        <div className='px-5 mt-4 font-subTitles text-fourth lg:px-4 lg:mt-5'>
          <StepsSection step={step}/>
        </div>
        {step === 5 ?
          <AnswerSection
            paymentAnswer={paymentAnswer}
          />
          :
          <div className='lg:flex lg:flex-row-reverse'>
            <div className='lg:w-[48%]'>
              <div className='bg-white lg:ml-[7.2rem] lg:pl-6 lg:pr-4 lg:pb-8 lg:pt-6 lg:rounded-xl lg:mt-[0.8rem]'>
                <div className='hidden font-bold tracking-[-0.55px] text-primary lg:text-base lg:block'>
                  <span>RESUMEN DE TU PEDIDO</span>
                </div>
                {/* resumen section desktop */}
                <div className='hidden lg:block'>
                  <ResumenSection shippingInfo={shippingInfo} />
                  <TotalSection showTaxes={true} />
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
                setPaymentAnswer={setPaymentAnswer}
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
