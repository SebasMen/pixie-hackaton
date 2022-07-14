import { useState } from 'react';
import Button from '../../components/common/button';
import RadioField from '../../components/form/radioField';
import SelectField, { SelectItem } from '../../components/form/selectField';
import TextField from '../../components/form/textField';
import { useAppContext, useForm } from '../../hooks';
import { paymentForm, shippingTypeForm, SubmissionFormInterface } from '../../interfaces/checkout';
import ResumenShipping from './ResumenShipping';
import paymentService from '../../services/paymentService';
import { postSendTokenCard } from '../../interfaces/payment';
import { calculateTotalPayment, organiceInformationPayment } from '../../helpers/paymentHelper';
import Spinner from '../../components/common/spinner';

const numberOfInstallmentsOptions: SelectItem[] = [
  { value: '1', label: '1 Cuota' },
  { value: '6', label: '6 Cuota' },
  { value: '12', label: '12 Cuota' },
  { value: '24', label: '24 Cuota' },
];

const PaymentSection = ({ shippingData, userData, changeStep, idCustomer }:PaymentSectionProps) => {
  const [billingAdressSt, setBillingAdressSt] = useState<string>(userData?.address ? userData?.address : '');
  const [loading, setLoading] = useState(false);
  const { products } = useAppContext();
  const { form, onSubmit, handleRadioChange, handleSelectChange, handleFormChange } = useForm<paymentForm>({
    billingAddress: userData?.address ? userData?.address : '',
    card_name: '',
    card_number: '',
    expirationDate: '',
    numberOfInstallments: numberOfInstallmentsOptions[0],
    numberOfInstallmentsSelect: numberOfInstallmentsOptions,
    card_cvv: '',
    amount: calculateTotalPayment(products, shippingData)
  },
  form => handleSubmit(form));

  // Methods
  const handleSubmit = async (form: paymentForm) => {
    setLoading(true);
    const response = await paymentService.sendCardInformation(form);
    if (response.err)
      console.error(response.err);
    else if (response.data.status === 'OK')
      sendDataPayment(response.data);
    else
      console.log('ocurrio error en la api');
  };

  const sendDataPayment = async (data: postSendTokenCard) => {
    // Organize data
    const paymentData = organiceInformationPayment(idCustomer, data.token_card, userData, products, shippingData);
    // Send data to API
    const response = await paymentService.sendPayment(paymentData);
    if (response.data.status === 'OK')
      console.log('guardado correctamente');
    else
      console.log('ocurrio un error de la api');
    setLoading(false);
  };

  return (
    <div className='font-subTitles text-sm lg:w-1/2 lg:pl-4'>
      <ResumenShipping
        location = {`${userData?.zip_code}, ${userData?.city}, ${userData?.country.label}`}
        email={userData?.email}
      />
      <form onSubmit={onSubmit} >
        <div className='flex flex-col pt-4'>
          <span className='font-titles text-lg'>Pago</span>
          <p className='text-xs'>Todas las transacciones son seguras y están encriptadas</p>
          <div className='pt-4 mb-10 flex flex-col gap-2'>
            <div className='md:flex md:gap-2'>
              <TextField name='card_name' className='md:w-1/2' value={form.card_name} handler={handleFormChange} placeholder='Nombre de la tarjeta*' fieldClassName='py-[0.95rem]' required/>
              <TextField name='card_number' className='md:w-1/2' value={form.card_number} handler={handleFormChange} placeholder='Número de la tarjeta*' fieldClassName='py-[0.95rem]' required/>
            </div>
            <div className='md:flex md:gap-2'>
              <TextField name='expirationDate' className='md:w-1/2' value={form.expirationDate} handler={handleFormChange} placeholder='Fecha de vencimiento MM/AA*' fieldClassName='py-[0.95rem]' required/>
              <TextField name='card_cvv' className='md:w-1/2' value={form.card_cvv} handler={handleFormChange} placeholder='Código de seguridad*' fieldClassName='py-[0.95rem]' required/>
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
        <span className='font-titles text-lg'>Dirección de facturación</span>
        <div className='bg-white rounded-2xl px-5 mt-2'>
          <div className='border-b border-[#B8B8B8] py-5'>
            <div className='text-left text-sm'>
              <RadioField
                label='Misma dirección de envío'
                changeState={setBillingAdressSt}
                currentState={billingAdressSt}
                name='billingAddress'
                handleRadioChange={handleRadioChange}
                value={form.billingAddress}
              />
            </div>
          </div>
          <div className='py-5'>
            <div className='text-left text-sm'>
              <RadioField
                label=' Usar una dirección de facturación diferente'
                changeState={setBillingAdressSt}
                currentState={billingAdressSt}
                name='billingAddress'
                handleRadioChange={handleRadioChange}
                value='otro'
              />
            </div>
          </div>
        </div>
        <div className='pt-3'>
          { loading
            ?
            <Spinner/>
            :
            <div className='lg:flex lg:flex-row-reverse lg:items-center'>
              <Button className='font-paragraph font-bold bg-primary text-[#fad7b1] mt-7 lg:w-72 lg:text-lg' type='submit'>
                Pagar
              </Button>
              <div className='text-center text-base text-primary mt-6 cursor-pointer lg:mr-14' onClick={() => changeStep(3)}>
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
}

export default PaymentSection;
