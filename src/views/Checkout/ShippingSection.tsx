import { useForm } from '../../hooks';
import { useState, useEffect } from 'react';

import Button from '../../components/common/button';
import ResumenShipping from './ResumenShipping';
import RadioField from '../../components/form/radioField';

import { shippingTypeForm, SubmissionFormInterface, typeShipping } from '../../interfaces/checkout';
import useScrolled from '../../hooks/useScrolled';
import PromotionalSection from '../Basket/PromotionalSection';
import { useTranslation } from 'react-i18next';

const ShippingSection = ({ changeStep, userData, setData, shippingInfo }: SubmissionFormProps) => {
  // Hooks
  const [typeShippingSt, setTypeShippingSt] = useState<typeShipping>(shippingInfo.type);
  const { onSubmit, handleRadioChange, form } = useForm<shippingTypeForm>(
    {
      type: shippingInfo.type,
      price: shippingInfo.price,
    },
    form => handleSubmit(form)
  );

  // Scroll to top
  const { scrollTo } = useScrolled();
  useEffect(() => scrollTo(0), []);

  // Translate
  const {
    t,
  } = useTranslation();

  // Methods
  const handleSubmit = (form: shippingTypeForm) => {
    setData(form);
    changeStep(4);
  };

  return (
    <div>
      <ResumenShipping
        location={`${userData?.phone}, ${userData?.address}, ${userData?.houseNumber}, ${userData?.apartment}, ${userData?.reference}, ${userData?.city.label}`}
        email={userData?.email}
      />
      {/* Sections */}
      <PromotionalSection />
      <form className='pt-[1.35rem] lg:pt-11' onSubmit={onSubmit}>
        <div className='pl-5 mb-3 lg:pl-0'>
          <span className='font-bold lg:text-xl'>{t('shippingtitle')}</span>
        </div>
        <div className='bg-white w-full py-4 px-4 flex flex-col text-sm mb-5 lg:rounded-2xl lg:pt-4 lg:pb-7 lg:px-6'>
          <span className='mb-[10px] px-2 lg:mb-2 lg:px-0'>{t('shippinginfotitle')}</span>
          <ul className='font-subTitles lg:list-disc lg:ml-5'>
            <li>{t('shippingInfoPart1')}</li>
            <li>{t('shippingInfoPart2')}</li>
          </ul>
        </div>
        <div className='flex flex-col gap-3'>
          {form.price === 0 ? (
            <div className='bg-white lg:px-3 rounded-2xl'>
              <div className='grid pl-7 pr-6 grid-flow-col items-center py-5 lg:pl-2 lg:pr-1'>
                <div className='text-left text-sm font-subTitles'>
                  <RadioField
                    label='Gratis'
                    value='gratis'
                    currentState={typeShippingSt}
                    changeState={setTypeShippingSt}
                    name='typeShipping'
                    labelClassName='font-sanzSemiBold'
                    handleRadioChange={handleRadioChange}
                  />
                </div>
                <div className='text-right text-sm font-bold font-sanzBold'>
                  <span>${form.price}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className={`bg-white lg:px-3 rounded-2xl ${form.price === 0 && 'cursor-not-allowed bg-gray-200'}`}>
              <div className='grid pl-7 pr-6 grid-flow-col items-center py-5 lg:pl-2 lg:pr-1'>
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
                <div className='text-right text-sm font-bold font-sanzBold'>
                  <span>${form.price}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className='px-5 lg:px-0 lg:flex lg:flex-row-reverse lg:items-center'>
          <Button
            className='w-full font-paragraph font-bold bg-primary text-[#fad7b1] mt-[1.15rem] lg:mt-7 lg:w-72 lg:text-lg'
            type='submit'
          >
            {t('shippingContinuebutton')}
          </Button>
          <div
            className='text-center font-sanzBold text-sm text-primary cursor-pointer mt-5 lg:mt-6 lg:mr-16 lg:text-base lg:font-subTitles'
            onClick={() => changeStep(2)}
          >
            <span>{'<'} {t('shippingback')}</span>
          </div>
        </div>
      </form>
    </div>
  );
};

interface SubmissionFormProps {
  changeStep: React.Dispatch<React.SetStateAction<number>>;
  userData: SubmissionFormInterface | undefined;
  setData: React.Dispatch<React.SetStateAction<shippingTypeForm>>;
  shippingInfo: shippingTypeForm;
}

export default ShippingSection;
