import { useState } from 'react';
import { useAppContext, useForm } from '../../hooks';
import validator from 'validator';

import Button from '../../components/common/button';
import RadioField from '../../components/form/radioField';
import SelectField, { SelectItem } from '../../components/form/selectField';
import TextField from '../../components/form/textField';
import ResumenShipping from './ResumenShipping';
import Spinner from '../../components/common/spinner';
import FormBilling from '../../components/common/formBilling';

import { paymentForm, shippingTypeForm, SubmissionFormInterface } from '../../interfaces/checkout';
import paymentService from '../../services/paymentService';
import { postSendPayment, postSendTokenCard } from '../../interfaces/payment';

import { calculateTotalPayment, organiceInformationPayment } from '../../helpers/paymentHelper';

const numberOfInstallmentsOptions: SelectItem[] = [
  { value: '1', label: '1 Cuota' },
  { value: '6', label: '6 Cuota' },
  { value: '12', label: '12 Cuota' },
  { value: '24', label: '24 Cuota' },
];

const PaymentSection = ({ shippingData, userData, changeStep, idCustomer, setPaymentAnswer, countriesOptions }:PaymentSectionProps) => {
  const [sameBillingAdressSt, setSameBillingAdressSt] = useState<boolean>(true);
  const [loadingST, setLoadingST] = useState(false);
  const { products } = useAppContext();
  const { form, onSubmit, handleRadioChange, handleSelectChange, handleFormChange } = useForm<paymentForm>({
    billingAddress: userData?.address ? userData.address : '',
    card_name: '',
    card_number: '',
    expirationDate: '',
    numberOfInstallments: { label: '', value: '' },
    numberOfInstallmentsSelect: numberOfInstallmentsOptions,
    card_cvv: '',
    amount: calculateTotalPayment(products, shippingData),
    // Billing Form
    name: '',
    last_name: '',
    address: '',
    addressOptional: '',
    city: '',
    countries: countriesOptions ? countriesOptions : [],
    country: { label: '', value: '' },
    email: '',
    phone: '',
  },
  form => validateForm());

  const [showMessageValidate, setShowMessageValidate] = useState({
    country: {
      state: false,
      message: ''
    },
    email: {
      state: false,
      message: ''
    },
    phone: {
      state: false,
      message: ''
    },
    expirationDate: {
      state: false,
      message: ''
    },
    card_number: {
      state: false,
      message: ''
    },
  });

  // Methods
  const validateForm = () => {
    resetValidate();
    if (!validator.isLength(form.card_number, { min: 16, max: 16 })) {
      setShowMessageValidate(old => ({ ...old, card_number: { state: true, message: 'El número de targeta debe tener 16 digitos' } }));
      return;
    }

    if (!validator.isNumeric(form.card_number)) {
      setShowMessageValidate(old => ({ ...old, card_number: { state: true, message: 'El campo solo debe tener números' } }));
      return;
    }

    if (!validator.isLength(form.expirationDate, { min: 5, max: 5 })) {
      setShowMessageValidate(old => ({ ...old, expirationDate: { state: true, message: 'El campo solo debe tener 5 caracteres' } }));
      return;
    }

    // Validate optional information
    if (!sameBillingAdressSt) {
      if (form.phone) {
        if (!validator.isLength(form.phone, { min: 10, max: 10 })) {
          setShowMessageValidate(old => ({ ...old, phone: { state: true, message: 'El celular solo debe tener 10 digitos' } }));
          return;
        }

        if (!validator.isNumeric(form.phone)) {
          setShowMessageValidate(old => ({ ...old, phone: { state: true, message: 'Solo se pueden escribir numeros' } }));
          return;
        }
      }

      if (form.email)
        if (!validator.isEmail(form.email)) {
          setShowMessageValidate(old => ({ ...old, email: { state: true, message: 'El texto debe ser un email' } }));
          return;
        }

      if (form.country)
        if (validator.equals(form.country.value, '')) {
          setShowMessageValidate(old => ({ ...old, country: { state: true, message: 'Se debe seleccionar un país' } }));
          /// eslint-disable-next-line no-useless-return
          return;
        }

      handleSubmit(form);
    }
  };

  const resetValidate = () => {
    setShowMessageValidate({
      country: {
        state: false,
        message: ''
      },
      email: {
        state: false,
        message: ''
      },
      phone: {
        state: false,
        message: ''
      },
      expirationDate: {
        state: false,
        message: ''
      },
      card_number: {
        state: false,
        message: ''
      },
    });
  };

  const handleSubmit = async (form: paymentForm) => {
    setLoadingST(true);
    const response = await paymentService.sendCardInformation(form);
    if (response.err)
      console.error(response.err);
    else if (response.data.status === 'OK')
      sendDataPayment(response.data);
    else
      console.log('ocurrio error en la api');
  };

  const sendDataPayment = async (dataPost: postSendTokenCard) => {
    // Organize data
    const paymentData = organiceInformationPayment(idCustomer, dataPost.token_card, userData, products, shippingData, form, sameBillingAdressSt);
    console.log(paymentData);
    // Send data to API
    const { data } = await paymentService.sendPayment(paymentData);
    // Set data to show in the answerSection
    if (data.error)
      setAnswerData(form.amount, (data.error ? data.error.details.transactionId : ''), data.status);
    else if (data.status === 'OK')
      setAnswerData(data.data.order_detail.details.approvedTransactionAmount, data.data.order_detail.details.transactionId, data.status);
    else
      console.error('error en la api');
    changeStep(5);
    setLoadingST(false);
  };

  const setAnswerData = (amount: number, transaccionId: string, state: string) => {
    setPaymentAnswer(old => ({ ...old,
      status: state,
      data: {
        order_detail: {
          details: {
            approvedTransactionAmount: amount,
            transactionId: transaccionId
          }
        }
      } }));
  };

  return (
    <div className='font-subTitles text-sm'>
      <ResumenShipping
        location = {`${userData?.phone}, ${userData?.address}, ${userData?.houseNumber}, ${userData?.apartment}, ${userData?.reference}, ${userData?.city}`}
        email={userData?.email}
      />
      <form onSubmit={onSubmit} className='px-5 pt-6 lg:px-0 lg:pt-11'>
        <div className='flex flex-col'>
          <span className='font-titles text-base lg:text-xl'>Pago</span>
          <p className='text-xs'>Todas las transacciones son seguras y están encriptadas</p>
          <div className='pt-4 mb-5 flex flex-col gap-2 lg:mb-10 lg:pt-7'>
            <div className='flex flex-col gap-[10px] lg:flex-row lg:gap-3'>
              <TextField
                name='card_name'
                className='md:w-1/2'
                value={form.card_name}
                handler={handleFormChange}
                placeholder='Nombre de la tarjeta*'
                fieldClassName='py-[0.95rem]'
                required
              />
              <TextField
                name='card_number'
                className='md:w-1/2'
                value={form.card_number}
                handler={handleFormChange}
                placeholder='Número de la tarjeta*'
                fieldClassName='py-[0.95rem]'
                showMessageError={showMessageValidate.card_number.state}
                messageError={showMessageValidate.card_number.message}
                required
              />
            </div>
            <div className='flex flex-col gap-[10px] lg:flex-row lg:gap-3'>
              <TextField
                name='expirationDate'
                className='md:w-1/2'
                value={form.expirationDate}
                handler={handleFormChange}
                placeholder='Fecha de vencimiento MM/AA*'
                fieldClassName='py-[0.95rem]'
                showMessageError={showMessageValidate.expirationDate.state}
                messageError={showMessageValidate.expirationDate.message}
                required
              />
              <TextField
                name='card_cvv'
                className='md:w-1/2'
                value={form.card_cvv}
                handler={handleFormChange}
                placeholder='Código de seguridad*'
                fieldClassName='py-[0.95rem]'
                required
              />
            </div>
            <SelectField
              placeholder='Número de cuotas*'
              name='numberOfInstallments'
              options={form.numberOfInstallmentsSelect}
              onChange={handleSelectChange}
              borderRadius={true}
              borderColor='#000'
              className='lg:w-1/2'
              paddingY='0.43rem'
            />
          </div>
        </div>
        <span className='font-titles text-base lg:text-xl'>Dirección de facturación</span>
        <div className='bg-white rounded-2xl mt-4 lg:mt-2 px-6'>
          <div className='border-b border-[#B8B8B8] py-4 lg:py-5'>
            <div className='text-left text-sm'>
              <RadioField
                label='Misma dirección de envío'
                changeState={setSameBillingAdressSt}
                currentState={sameBillingAdressSt}
                name='billingAddress'
                handleRadioChange={handleRadioChange}
                value={true}
              />
            </div>
          </div>
          <div className='py-4 lg:py-4'>
            <div className='text-left text-sm'>
              <RadioField
                label=' Usar una dirección de facturación diferente'
                changeState={setSameBillingAdressSt}
                currentState={sameBillingAdressSt}
                name='billingAddress'
                handleRadioChange={handleRadioChange}
                value={false}
              />
            </div>
          </div>
        </div>
        { !sameBillingAdressSt &&
          <FormBilling
            form={form}
            handleFormChange={handleFormChange}
            handleSelectChange={handleSelectChange}
            messageError={showMessageValidate}
          />}
        <div className='pt-3'>
          { loadingST
            ?
            <Spinner/>
            :
            <div className='lg:flex lg:flex-row-reverse lg:items-center'>
              <Button className='w-full font-paragraph font-bold bg-primary text-[#fad7b1] mt-7 lg:w-[14.4rem] lg:text-lg' type='submit'>
                Pagar
              </Button>
              <div className='text-center font-sanzBold text-sm text-primary cursor-pointer mt-5 lg:mt-6 lg:mr-20 lg:text-base lg:font-subTitles' onClick={() => changeStep(3)}>
                {'<'} Volver a envíos
              </div>
            </div>
          }
        </div>
      </form>
    </div>
  );
};

interface PaymentSectionProps {
  userData : SubmissionFormInterface | undefined
  shippingData : shippingTypeForm;
  idCustomer: string;
  changeStep: React.Dispatch<React.SetStateAction<number>>;
  setPaymentAnswer: React.Dispatch<React.SetStateAction<postSendPayment>>;
  countriesOptions: SelectItem[] | undefined;
}

export default PaymentSection;
