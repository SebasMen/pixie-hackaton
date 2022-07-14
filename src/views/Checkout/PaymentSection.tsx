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
    <div className='px-6 lg:w-1/2'>
      <ResumenShipping
        location = {`${userData?.zip_code}, ${userData?.city}, ${userData?.country.label}`}
        email={userData?.email}
      />
      <form onSubmit={onSubmit} >
        <div className='flex flex-col pt-4'>
          <span className='font-bold text-lg'>Pago</span>
          <p className='font-medium text-xs'>Todas las transacciones son seguras y están encriptadas</p>
          <div className='pt-4 mb-10 flex flex-col gap-2'>
            <div className='md:flex md:gap-2'>
              <TextField name='card_name' className='md:w-1/2' border='border border-primary ring-1 ring-black' value={form.card_name} handler={handleFormChange} placeholder='Nombre de la tarjeta*' required/>
              <TextField name='card_number' className='md:w-1/2' border='border border-primary ring-1 ring-black' value={form.card_number} handler={handleFormChange} placeholder='Número de la tarjeta*' required/>
            </div>
            <div className='md:flex md:gap-2'>
              <TextField name='expirationDate' className='md:w-1/2' border='border border-primary ring-1 ring-black' value={form.expirationDate} handler={handleFormChange} placeholder='Fecha de vencimiento MM/AA*' required/>
              <TextField name='card_cvv' className='md:w-1/2' border='border border-primary ring-1 ring-black' value={form.card_cvv} handler={handleFormChange} placeholder='Código de seguridad*' required/>
            </div>
            <SelectField
              placeholder='Número de cuotas*'
              name='numberOfInstallments'
              options={form.numberOfInstallmentsSelect}
              onChange={handleSelectChange}
              border={true}
              borderRadius={false}
              borderColor='#000'
              className='lg:w-1/2'
            />
          </div>
        </div>
        <span className='font-bold text-lg'>Dirección de facturación</span>
        <div className='border border-primary px-2.5'>
          <div className='border-b border-primary py-5'>
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
            <>
              <Button className='bg-primary text-white mt-7 w-full ' type='submit'>
                Pagar
              </Button>
              <div className='text-center mt-5 cursor-pointer text-sm' onClick={() => changeStep(3)}>
                {'<'} Volver a envíos
              </div>
            </>
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
