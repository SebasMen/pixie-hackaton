import { useEffect, useState } from 'react';
import { useAppContext, useForm } from '../../hooks';
import validator from 'validator';
import useValidator from '../../hooks/useValidator';

import Button from '../../components/common/button';
import RadioField from '../../components/form/radioField';
import { SelectItem } from '../../components/form/selectField';
import ResumenShipping from './ResumenShipping';
import FormBilling from '../../components/common/formBilling';

import { paymentForm, PaymentFormValidate, shippingTypeForm, SubmissionFormInterface } from '../../interfaces/checkout';
import paymentService from '../../services/paymentService';
import { postSendPayment } from '../../interfaces/payment';
import { calculateTotalPayment, organiceInformationPaymentMP } from '../../helpers/paymentHelper';
import { useLoading } from '../../hooks/useLoading';
import { mexicanStates } from '../../@fake/statesFake';
import { getCities, getPostalCode } from '../../helpers/formCheckoutHelper';
import { couponComplete } from '../../interfaces/coupon';

const numberOfInstallmentsOptions: SelectItem[] = [
  { value: '1', label: '1 Cuota' },
  { value: '6', label: '6 Cuota' },
  { value: '12', label: '12 Cuota' },
  { value: '24', label: '24 Cuota' },
];

const PaymentSection = ({ shippingData, userData, changeStep, idCustomer, setPaymentAnswer, countriesOptions, coupon }:PaymentSectionProps) => {
  // Hooks
  const [sameBillingAdressSt, setSameBillingAdressSt] = useState<boolean>(true);
  /// const [showPopup, setShowPopup] = useState(false);
  // const [postSendTokenCard, setPostSendTokenCard] = useState<postSendTokenCard>({
  //   status: '',
  //   token_card: ''
  // });
  const { products, toast } = useAppContext();
  const { loadingFalse, loadingTrue } = useLoading();

  const { form, onSubmit, handleRadioChange, handleSelectChange, handleFormChange, setForm } = useForm<paymentForm>({
    billingAddress: userData?.address ? userData.address : '',
    card_name: '',
    card_number: '',
    expirationDate: '',
    numberOfInstallments: { label: '', value: '' },
    numberOfInstallmentsSelect: numberOfInstallmentsOptions,
    card_cvv: '',
    amount: calculateTotalPayment(products, shippingData, true, coupon),
    // Billing Form
    name: '',
    last_name: '',
    address: '',
    apartment: '',
    colony: '',
    delegation: '',
    houseNumber: '',
    reference: '',
    state: { value: '', label: '' },
    states: mexicanStates,
    zip_code: { label: '', value: '' },
    cities: [],
    zipCodes: [],
    city: { label: '', value: '' },
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
    state: {
      message: ''
    },
    houseNumber: {
      message: ''
    },
    apartment: {
      message: ''
    },
    zip_code: {
      message: ''
    },
    reference: {
      message: ''
    },
    colony: {
      message: ''
    },
    delegation: {
      message: ''
    }
  });

  // Validate format expirationDate
  useEffect(() => {
    if (form.expirationDate.length === 4) {
      let expirationDate = '';
      if (form.expirationDate.includes('/'))
        expirationDate = form.expirationDate;
      else
        expirationDate = `${form.expirationDate.substring(0, 2)}/${form.expirationDate.substring(2, 4)}`;
      setForm(old => ({ ...old, expirationDate }));
    }
  }, [form.expirationDate]);

  /// useEffect(() => {
  //   if (form.zip_code?.value) {
  //     // Validate zip code
  //     if (!postalCode.includes(parseInt(form.zip_code.value, 10)))
  //       handlePutMessageError('zip_code', 'El codigo postal no se encuentra en nuestra lista');
  //     return () => {};
  //   }
  // }, [form.zip_code]);

  useEffect(() => {
    if (form.state?.value)
      setForm(old => ({ ...old, cities: getCities(form.state ? form.state?.value : '') }));
    if (form.city?.value)
      setForm(old => ({ ...old, zipCodes: getPostalCode(form.city?.value ? form.city?.value : '') }));
  }, [form.state, form.city]);

  // Methods
  // eslint-disable-next-line complexity
  const validateForm = () => {
    // Clear all errors
    resetValidator();
    let error = false;
    // Regular expression to Date mm/yy
    /// const date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1[1-9]|2[0-9]|3[0-9]|4[0-9])$/;

    /// if (!validator.isAlpha(form.card_name, 'es-ES', { ignore: ' ' })) {
    //   handlePutMessageError('card_name', 'Solo se debe escribir letras');
    //   error = true;
    // }

    // if (!validator.isLength(form.card_number, { min: 16, max: 16 })) {
    //   handlePutMessageError('card_number', 'El número de targeta debe tener 16 digitos');
    //   error = true;
    // }

    // if (!validator.isNumeric(form.card_number)) {
    //   handlePutMessageError('card_number', 'El campo solo debe tener números');
    //   error = true;
    // }

    // if (!validator.isLength(form.card_cvv, { min: 3, max: 4 })) {
    //   handlePutMessageError('card_cvv', 'El cvv debe tener mas de 3 digitos');
    //   error = true;
    // }

    // if (!validator.isNumeric(form.card_cvv)) {
    //   handlePutMessageError('card_cvv', 'El cvv solo recibe digitos');
    //   error = true;
    // }

    // if (!validator.isLength(form.expirationDate, { min: 5, max: 5 })) {
    //   handlePutMessageError('expirationDate', 'El campo solo debe tener 5 caracteres');
    //   error = true;
    // }

    // if (!date_regex.test(form.expirationDate)) {
    //   handlePutMessageError('expirationDate', 'El formato del cambo debe ser MM/YY');
    //   error = true;
    // }

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

      if (form.houseNumber)
        if (!validator.isLength(form.houseNumber, { min: 1 })) {
          handlePutMessageError('houseNumber', 'El número de la casa debe ser mayor o igual a 1 caracter');
          error = true;
        }

      if (form.apartment)
        if (!validator.isLength(form.apartment, { min: 2 }) && form.apartment.length > 0) {
          handlePutMessageError('apartment', 'El número de apartamento debe ser mayor a 1 carácter');
          error = true;
        }

      if (form.reference)
        if (!validator.isLength(form.reference, { min: 4 }) && form.reference.length > 0) {
          handlePutMessageError('reference', 'El número de apartamento debe ser mayor a 4 caracteres');
          error = true;
        }

      if (form.colony)
        if (!validator.isLength(form.colony, { min: 4 })) {
          handlePutMessageError('colony', 'La colonia debe contener mas de 4 caracteres');
          error = true;
        }

      if (form.delegation)
        if (!validator.isLength(form.delegation, { min: 4 })) {
          handlePutMessageError('delegation', 'La colonia debe contener mas de 4 caracteres');
          error = true;
        }

      if (form.state)
        if (validator.equals(form.state.value, '')) {
          handlePutMessageError('state', 'Se debe seleccionar un estado');
          error = true;
        }
    }

    if (!error)
      handleSubmit(form);
  };

  const handleSubmit = async (form: paymentForm) => {
    loadingTrue();
    // Organize data
    const paymentData = organiceInformationPaymentMP(idCustomer, userData, products, shippingData, form, sameBillingAdressSt, coupon);
    localStorage.setItem('order-data', JSON.stringify(paymentData));
    await paymentService.getPaymentId(paymentData)
      .then(res => {
        window.location.replace(`${res.init_point}`);
      })
      .catch(error => {
        toast.fire({
          icon: 'warning',
          title: error,
        });
      });

    /// const response = await paymentService.sendCardInformation(form);
    // if (response.err) {
    //   toast.fire({
    //     icon: 'warning',
    //     title: response.err,
    //   });
    //   loadingFalse();
    // } else if (response.data.status === 'OK') {
    //   loadingFalse();
    //   setPostSendTokenCard(response.data);
    //   setShowPopup(true);
    // } else {
    //   toast.fire({
    //     icon: 'warning',
    //     title: 'Hubo un error en la api.',
    //   });
    loadingFalse();
    // }
  };

  /// const sendDataPayment = async () => {
  //   // Close popup
  //   setShowPopup(false);
  //   loadingTrue();
  //   // Organize data
  //   const paymentData = organiceInformationPayment(idCustomer, postSendTokenCard.token_card, userData, products, shippingData, form, sameBillingAdressSt);
  //   // Send data to API
  //   const { data } = await paymentService.sendPayment(paymentData);
  //   // Set data to show in the answerSection
  //   if (data.error)
  //     setAnswerData(form.amount, (data.error ? data.error.details.transactionId : ''), data.status, data.data.order_detail.ticketNumber);
  //   else if (data.status === 'OK')
  //     setAnswerData(data.data.order_detail.details.approvedTransactionAmount, data.data.order_detail.details.transactionId, data.status, data.data.order_detail.ticketNumber);
  //   else
  //     toast.fire({
  //       icon: 'warning',
  //       title: 'Hubo un error en la api.',
  //     });
  //   changeStep(5);
  //   loadingFalse();
  // };

  // // Save response to show un the answerSection
  // const setAnswerData = (amount: number, transaccionId: string, state: string, ticketNumber: string) => {
  //   setPaymentAnswer(old => ({ ...old,
  //     status: state,
  //     data: {
  //       order_detail: {
  //         details: {
  //           approvedTransactionAmount: amount,
  //           transactionId: transaccionId
  //         },
  //         ticketNumber,
  //       }
  //     } }));
  // };

  // const handleClosePopup = () => {
  //   setShowPopup(false);
  // };

  return (
    <div className='font-subTitles text-sm'>
      <div id='container-paymentMP'></div>

      <ResumenShipping
        location = {`${userData?.phone}, ${userData?.address}, ${userData?.houseNumber}, ${userData?.apartment}, ${userData?.reference}, ${userData?.city.label}`}
        email={userData?.email}
      />
      <form onSubmit={onSubmit} className='px-5 pt-6 lg:px-0 lg:pt-11'>
        {/* <div className='flex flex-col'>
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
        </div> */}
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
          <div className='lg:flex lg:flex-row-reverse lg:items-center'>
            <Button className='w-full font-paragraph font-bold bg-primary text-[#fad7b1] mt-7 lg:w-[14.4rem] lg:text-lg' type='submit'>
              Pagar
            </Button>
            <div className='text-center font-sanzBold text-sm text-primary cursor-pointer mt-5 lg:mt-6 lg:mr-20 lg:text-base lg:font-subTitles' onClick={() => changeStep(3)}>
              {'<'} Volver a envíos
            </div>
          </div>
        </div>
      </form>
      {/* {showPopup && <PopupDecision handleAccept={sendDataPayment} handleDeny={handleClosePopup} text='¿Realmente desea realizar el pago?'/>} */}
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
  coupon?: couponComplete;
}

export default PaymentSection;
