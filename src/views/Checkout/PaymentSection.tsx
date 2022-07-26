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

import { paymentForm, PaymentFormValidate, shippingTypeForm, SubmissionFormInterface } from '../../interfaces/checkout';
import paymentService from '../../services/paymentService';
import { postSendPayment, postSendTokenCard } from '../../interfaces/payment';

import { calculateTotalPayment, organiceInformationPayment } from '../../helpers/paymentHelper';
import useValidator from '../../hooks/useValidator';

const numberOfInstallmentsOptions: SelectItem[] = [
  { value: '1', label: '1 Cuota' },
  { value: '6', label: '6 Cuota' },
  { value: '12', label: '12 Cuota' },
  { value: '24', label: '24 Cuota' },
];

const PaymentSection = ({ shippingData, userData, changeStep, idCustomer, setPaymentAnswer, countriesOptions }:PaymentSectionProps) => {
  const [sameBillingAdressSt, setSameBillingAdressSt] = useState<boolean>(true);
  const [loadingST, setLoadingST] = useState(false);
  const { products, toast } = useAppContext();
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

  const { handlePutMessageError, validatorBody, resetValidator } = useValidator<PaymentFormValidate>({
    card_name: {
      message: ''
    },
    card_number: {
      message: ''
    },
    expirationDate: {
      message: ''
    },
    card_cvv: {
      message: ''
    },
    billingAddress: {
      message: ''
    },
    numberOfInstallments: {
      message: ''
    },
    amount: {
      message: ''
    },

    // Optional
    email: {
      message: ''
    },
    phone: {
      message: ''
    },
    name: {
      message: ''
    },
    last_name: {
      message: ''
    },
    country: {
      message: ''
    },
  });

  // Methods
  // eslint-disable-next-line complexity
  const validateForm = () => {
    // Clear all errors
    resetValidator();
    let error = false;
    // Regular expression to Date mm/yy
    const date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1[1-9]|2[0-9]|3[0-9]|4[0-9])$/;

    if (!validator.isAlpha(form.card_name, 'es-ES', { ignore: ' ' })) {
      handlePutMessageError('card_name', 'Solo se debe escribir letras');
      error = true;
    }

    if (!validator.isLength(form.card_number, { min: 16, max: 16 })) {
      handlePutMessageError('card_number', 'El número de targeta debe tener 16 digitos');
      error = true;
    }

    if (!validator.isNumeric(form.card_number)) {
      handlePutMessageError('card_number', 'El campo solo debe tener números');
      error = true;
    }

    if (!validator.isLength(form.card_cvv, { min: 3, max: 4 })) {
      handlePutMessageError('card_cvv', 'El cvv debe tener mas de 3 digitos');
      error = true;
    }

    if (!validator.isNumeric(form.card_cvv)) {
      handlePutMessageError('card_cvv', 'El cvv solo recibe digitos');
      error = true;
    }

    if (!validator.isLength(form.expirationDate, { min: 5, max: 5 })) {
      handlePutMessageError('expirationDate', 'El campo solo debe tener 5 caracteres');
      error = true;
    }

    if (!date_regex.test(form.expirationDate)) {
      handlePutMessageError('expirationDate', 'El formato del cambo debe ser MM/YY');
      error = true;
    }

    // Validate optional information
    if (!sameBillingAdressSt) {
      if (form.name)
        if (!validator.isAlpha(form.name, 'es-ES', { ignore: ' ' })) {
          handlePutMessageError('name', 'Solo se debe escribir letras');
          error = true;
        }

      if (form.last_name)
        if (!validator.isAlpha(form.last_name, 'es-ES', { ignore: ' ' })) {
          handlePutMessageError('last_name', 'Solo se debe escribir letras');
          error = true;
        }

      if (form.phone) {
        if (!validator.isLength(form.phone, { min: 10, max: 10 })) {
          handlePutMessageError('phone', 'El celular solo debe tener 10 digitos');
          error = true;
        }

        if (!validator.isNumeric(form.phone)) {
          handlePutMessageError('phone', 'Solo se pueden escribir numeros');
          error = true;
        }
      }

      if (form.email)
        if (!validator.isEmail(form.email)) {
          handlePutMessageError('email', 'El texto debe ser un email');
          error = true;
        }

      if (form.country)
        if (validator.equals(form.country.value, '')) {
          handlePutMessageError('country', 'Se debe seleccionar un país');
          error = true;
        }
    }

    if (!error)
      handleSubmit(form);
  };

  const handleSubmit = async (form: paymentForm) => {
    setLoadingST(true);
    const response = await paymentService.sendCardInformation(form);
    if (response.err)
      toast.fire({
        icon: 'warning',
        title: response.err,
      });
    else if (response.data.status === 'OK')
      sendDataPayment(response.data);
    else
      toast.fire({
        icon: 'warning',
        title: 'Hubo un error en la api.',
      });
    setLoadingST(false);
  };

  const sendDataPayment = async (dataPost: postSendTokenCard) => {
    // Organize data
    const paymentData = organiceInformationPayment(idCustomer, dataPost.token_card, userData, products, shippingData, form, sameBillingAdressSt);
    // Send data to API
    const { data } = await paymentService.sendPayment(paymentData);
    // Set data to show in the answerSection
    if (data.error)
      setAnswerData(form.amount, (data.error ? data.error.details.transactionId : ''), data.status);
    else if (data.status === 'OK')
      setAnswerData(data.data.order_detail.details.approvedTransactionAmount, data.data.order_detail.details.transactionId, data.status);
    else
      toast.fire({
        icon: 'warning',
        title: 'Hubo un error en la api.',
      });
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
                messageError={validatorBody.card_name.message}
                required
              />
              <TextField
                name='card_number'
                className='md:w-1/2'
                value={form.card_number}
                handler={handleFormChange}
                placeholder='Número de la tarjeta*'
                fieldClassName='py-[0.95rem]'
                messageError={validatorBody.card_number.message}
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
                messageError={validatorBody.expirationDate.message}
                required
              />
              <TextField
                name='card_cvv'
                className='md:w-1/2'
                value={form.card_cvv}
                handler={handleFormChange}
                placeholder='Código de seguridad*'
                fieldClassName='py-[0.95rem]'
                messageError={validatorBody.card_cvv.message}
                required
              />
            </div>
            {/* <SelectField
              placeholder='Número de cuotas*'
              name='numberOfInstallments'
              options={form.numberOfInstallmentsSelect}
              onChange={handleSelectChange}
              borderRadius={true}
              borderColor='#000'
              className='lg:w-1/2'
              paddingY='0.43rem'
            /> */}
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
            messageError={validatorBody}
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
