import { MultiValue, SingleValue } from 'react-select';

import SelectField, { SelectItem } from '../../form/selectField';
import TextField from '../../form/textField';

import { paymentForm, PaymentFormValidate } from '../../../interfaces/checkout';

const FormBilling = ({ form, handleFormChange, handleSelectChange, messageError }: FormBillingProps) => (
  <div className='mt-4 flex flex-col gap-[10px] lg:mt-[38px]'>
    <div className='flex flex-col gap-[10px] lg:flex-row lg:gap-3'>
      <TextField
        name='name'
        value={form.name ? form.name : '' }
        handler={handleFormChange}
        placeholder='Nombre*'
        className='lg:w-1/2'
        fieldClassName='py-[0.95rem]'
        messageError={messageError.name.message}
        required
      />
      <TextField
        name='last_name'
        value={form.last_name ? form.last_name : ''}
        handler={handleFormChange}
        placeholder='Apellido*'
        className='lg:w-1/2'
        fieldClassName='py-[0.95rem]'
        messageError={messageError.last_name.message}
        required
      />
    </div>
    <TextField
      name='address'
      value={form.address ? form.address : ''}
      handler={handleFormChange}
      placeholder='Nombre de la calle*'
      fieldClassName='py-[0.95rem]'
      required
    />
    <div className='flex flex-col gap-[10px] lg:flex-row lg:gap-3'>
      <TextField
        name='houseNumber'
        value={form.houseNumber ? form.houseNumber : ''}
        handler={handleFormChange}
        placeholder='Número exterior, Casa o Edificio*'
        className='lg:w-1/2'
        fieldClassName='py-[0.95rem]'
        messageError={messageError.houseNumber.message}
        required
      />
      <TextField
        name='apartment'
        value={form.apartment ? form.apartment : ''}
        handler={handleFormChange}
        placeholder='Número Interior ( Ej: Piso, Oficina, Dpto)'
        className='lg:w-1/2'
        fieldClassName='py-[0.95rem]'
        messageError={messageError.apartment.message}
      />
    </div>
    <div className='flex flex-col gap-[10px] lg:flex-row lg:gap-3'>
      <TextField
        name='reference'
        value={form.reference ? form.reference : ''}
        handler={handleFormChange}
        placeholder='Entre calles (Referencias)'
        className='lg:w-1/2'
        fieldClassName='py-[0.95rem]'
        messageError={messageError.reference.message}
      />
      <TextField
        name='zip_code'
        value={form.zip_code ? form.zip_code : ''}
        handler={handleFormChange}
        placeholder='Código postal*'
        className='lg:w-1/2'
        fieldClassName='py-[0.95rem]'
        messageError={messageError.zip_code.message}
        required
      />
    </div>
    <div className='flex flex-col gap-[10px] lg:flex-row lg:gap-3'>
      <TextField
        name='colony'
        value={form.colony ? form.colony : ''}
        handler={handleFormChange}
        placeholder='Colonia*'
        className='lg:w-1/2'
        fieldClassName='py-[0.95rem]'
        messageError={messageError.colony.message}
        required
      />
      <TextField
        name='delegation'
        value={form.delegation ? form.delegation : ''}
        handler={handleFormChange}
        placeholder='Delegación o Municipio*'
        className='lg:w-1/2'
        fieldClassName='py-[0.95rem]'
        messageError={messageError.delegation.message}
        required
      />
    </div>
    <div className='flex flex-col gap-[10px] lg:flex-row lg:gap-3'>
      <TextField
        name='city'
        value={form.city ? form.city : ''}
        handler={handleFormChange}
        placeholder='Ciudad*'
        className='lg:w-1/2'
        fieldClassName='py-[0.95rem]'
        required
      />
      <SelectField
        placeholder='Estado*'
        name='state'
        options={form.states ? form.states : [{ label: '', value: '' }]}
        value={form.state?.value ? form.state : undefined}
        onChange={handleSelectChange}
        borderRadius={true}
        borderColor='#000'
        className='lg:w-1/2'
        paddingY='0.43rem'
        messageError={messageError.state.message}
      />
    </div>
    <div className='flex flex-col gap-[10px] lg:flex-row lg:gap-3'>
      <TextField
        name='email'
        value={form.email ? form.email : ''}
        handler={handleFormChange}
        placeholder='Correo electrónico*'
        className='lg:w-1/2'
        fieldClassName='py-[0.95rem]'
        messageError={messageError.email.message}
        required
      />
      <TextField
        name='phone'
        value={form.phone ? form.phone : ''}
        handler={handleFormChange}
        placeholder='Celular (10 dígitos)*'
        className='lg:w-1/2'
        fieldClassName='py-[0.95rem]'
        messageError={messageError.phone.message}
        required
      />
    </div>
    <SelectField
      placeholder='País*'
      name='country'
      options={form.countries ? form.countries : []}
      onChange={handleSelectChange}
      borderRadius={true}
      borderColor='#000'
      paddingY='0.43rem'
      messageError={messageError.country.message}
    />
  </div>
);

interface FormBillingProps {
  form: paymentForm;
  handleSelectChange: (selected: MultiValue<SelectItem> | SingleValue<SelectItem>, name: string) => void;
  handleFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  messageError: PaymentFormValidate
}

export default FormBilling;
