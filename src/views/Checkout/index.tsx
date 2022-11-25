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

import {
  selectCountryService,
  shippingTypeForm,
  SubmissionFormInterface,
  typeShipping,
} from '../../interfaces/checkout';
import { postSendPayment } from '../../interfaces/payment';
import checkOutService from '../../services/checkOutService';

import { basketRed } from '../../assets/vectors/';
import TextField from '../../components/form/textField';
import { couponComplete } from '../../interfaces/coupon';
import Button from '../../components/common/button';
import { useTranslation } from 'react-i18next';

const CheckOut = () => {
  // Hooks
  const [step, setStep] = useState(2);
  const [countries, setcountries] = useState<SelectItem[]>();
  const [userInfo, setuserInfo] = useState<SubmissionFormInterface>();
  const [idCustomer, setIdCustomer] = useState('');
  const [shippingInfo, setShippingInfo] = useState<shippingTypeForm>({ type: 'estandar', price: 90 });
  const [coupon, setCoupon] = useState<couponComplete>();
  const [couponCode, setCouponCode] = useState({
    status: true,
    messageError: '',
    code: ''
  });
  const [paymentAnswer, setPaymentAnswer] = useState<postSendPayment>({
    status: 'wait',
    data: {
      order_detail: {
        details: {
          approvedTransactionAmount: 0,
          transactionId: '',
        },
        ticketNumber: '',
      },
    },
  });

  // Translate
  const {
    t,
  } = useTranslation();

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
  useEffect(() => {
    if (coupon)
      validateHistoryCoupon();
    return () => {};
  }, [coupon]);

  // Methods
  const updateShippingInfo = (name: typeShipping, value: number) => {
    setShippingInfo({ type: name, price: value });
  };

  const validCoupon = async () => {
    await checkOutService.getCoupon(couponCode.code).then(res => {
      // Validate uses
      if ((res.totalUses >= res.maxUses) || res.status === 0)
        setCouponCode(old => ({ ...old, status: false, messageError: '* Este código ya fue redimido' }));
      else {
        const date = new Date(res.expireDate.split('T')[0]);
        date.setDate(date.getDate() + 1);
        const today = new Date();
        if (today > date)
          setCouponCode(old => ({ ...old, status: false, messageError: '* Este código ya no esta disponible' }));
        else {
          setCoupon(res);
          setCouponCode(old => ({ ...old, status: true }));
        }
      }
    }).catch(err => {
      setCouponCode(old => ({ ...old, status: false, messageError: '* El cupon no fue encontrado' }));
    });
  };

  const validateHistoryCoupon = () => {
    checkOutService.getCouponHistory(userInfo, coupon).then(res => {
      const couponUsesbyUser = coupon?.usesByUser ? coupon.usesByUser : 0;
      if (res.length >= couponUsesbyUser) {
        setCouponCode(old => ({ ...old, status: false, messageError: '* El usuario exedió los usos de este cupon' }));
        setCoupon(undefined);
      }
    }).catch(error => {
      console.log(error);
    });
  };

  return (
    <Page className='bg-sixth'>
      <div className='w-full mb-16 max-w-[1440px] pt-1 lg:px-32 lg:pt-5 lg:pb-20'>
        <div className='flex gap-5 items-center px-5 lg:pl-4'>
          <img src={basketRed} className='w-5 h-5 lg:w-7 lg:h-7' />
          <h1 className='text-primary text-[25px] lg:text-[36px] lg:tracking-[-1.5px]'>{t('baskTitle')}</h1>
        </div>

        {/* resumen section movil */}
        {step !== 5 && (
          <div className='block bg-white mb-7 lg:hidden'>
            <ResumenSection
              shippingInfo={shippingInfo}
              step={step}
            />
            {step >= 3 && (
              <div className='mx-5 pb-6 mt-5'>
                <div className='flex-col flex mb-5'>
                  <div className={`relative flex ${!(coupon === undefined) && 'opacity-40'}`}>
                    <TextField
                      handler={e => setCouponCode(old => ({ ...old, code: e.target.value }))}
                      name='couponCode'
                      value={couponCode.code}
                      className='w-full placeholder-slate-100'
                      placeholder={t('couponCodePlaceholder')}
                      disabled={!(coupon === undefined)}
                      fieldClassName='font-subTitles py-[0.50rem] placeholder-pixieLightBlue'
                      border={`ring-1 rounded-r-[10px] transform transition-all border-0 ${couponCode.status ? 'ring-pixieLightBlue' : 'ring-primary'}`}
                    />
                    <Button
                      className={`${couponCode.status ? 'bg-pixieLightBlue' : 'bg-primary'} 
                      text-sm w-[30%] tracking-normal text-white rounded-r-[10px] rounded-l-[0px] absolute right-0
                      ${!(coupon === undefined) && 'cursor-not-allowed'}`}
                      padding='py-[0.67rem]'
                      onClick={validCoupon}
                      disable={!(coupon === undefined)}
                    >
                      {t('couponApply')}
                    </Button>
                  </div>
                  {!couponCode.status &&
                    <span className='text-primary text-xs font-subTitles'>{couponCode.messageError}</span>
                  }
                </div>
                <TotalSection
                  showTaxes={true}
                  setUpdateShippingPrince={updateShippingInfo}
                  shippingInfo={shippingInfo}
                  coupon={coupon}
                />
              </div>
            )}
          </div>
        )}

        {/* payments steps */}
        <div className='px-5 mt-4 font-subTitles text-fourth lg:px-4 lg:mt-5'>
          <StepsSection step={step} setStep={setStep} />
        </div>
        {step === 5 ? (
          <AnswerSection paymentAnswer={paymentAnswer} />
        ) : (
          <div className='lg:flex lg:flex-row-reverse'>
            <div className='lg:w-[48%]'>
              <div className='bg-white lg:ml-[7.2rem] lg:pl-6 lg:pr-4 lg:pb-8 lg:pt-6 lg:rounded-xl lg:mt-[0.8rem] lg:sticky lg:top-[10%]'>
                <div className='hidden font-bold tracking-[-0.55px] text-pixieLightBlue lg:text-base lg:block'>
                  <span>{t('baskResumeOrder')}</span>
                </div>
                {step >= 3 && (
                  <div className='flex-col hidden lg:flex'>
                    <div className={`relative flex ${!(coupon === undefined) && 'opacity-40'}`}>
                      <TextField
                        handler={e => setCouponCode(old => ({ ...old, code: e.target.value }))}
                        name='couponCode'
                        value={couponCode.code}
                        className='w-full placeholder-slate-100'
                        placeholder={t('couponCodePlaceholder')}
                        disabled={!(coupon === undefined)}
                        fieldClassName='font-subTitles py-[0.50rem] placeholder-pixieLightBlue'
                        border={`ring-1 rounded-r-[10px] transform transition-all border-0 ${couponCode.status ? 'ring-pixieLightBlue' : 'ring-primary'}`}
                      />
                      <Button
                        className={`${couponCode.status ? 'bg-pixieLightBlue' : 'bg-primary'} 
                        text-sm w-[30%] tracking-normal text-white rounded-r-[10px] rounded-l-[0px] absolute right-0
                        ${!(coupon === undefined) && 'cursor-not-allowed'}`}
                        padding='py-[0.67rem]'
                        onClick={validCoupon}
                        disable={!(coupon === undefined)}
                      >
                        {t('couponApply')}
                      </Button>
                    </div>
                    {!couponCode.status &&
                      <span className='text-primary text-xs font-subTitles'>{couponCode.messageError}</span>
                    }
                  </div>
                )}
                {/* resumen section desktop */}
                <div className='hidden lg:block'>
                  <ResumenSection shippingInfo={shippingInfo}
                    step={step}
                  />
                  <TotalSection
                    showTaxes={true}
                    setUpdateShippingPrince={updateShippingInfo}
                    shippingInfo={shippingInfo}
                    coupon={coupon}
                  />
                </div>
              </div>
            </div>
            <div className='lg:w-[52%] lg:pl-4 lg:pr-2'>
              {step === 2 && (
                <SubmissionForm
                  setData={setuserInfo}
                  setIdCustomer={setIdCustomer}
                  changeStep={setStep}
                  countriesOptions={countries}
                />
              )}
              {step === 3 && (
                <ShippingSection
                  changeStep={setStep}
                  userData={userInfo}
                  setData={setShippingInfo}
                  shippingInfo={shippingInfo}
                />
              )}
              {step === 4 && (
                <PaymentSection
                  userData={userInfo}
                  shippingData={shippingInfo}
                  idCustomer={idCustomer}
                  changeStep={setStep}
                  setPaymentAnswer={setPaymentAnswer}
                  countriesOptions={countries}
                  coupon={coupon}
                />
              )}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </Page>
  );
};

export default CheckOut;
