import { MultiValue, SingleValue } from 'react-select';
import { paymentForm, PaymentFormValidate } from '../../../interfaces/checkout';
import SelectField, { SelectItem } from '../../form/selectField';
import TextField from '../../form/textField';

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
      placeholder='Dirección*'
      fieldClassName='py-[0.95rem]'
      required
    />
    <TextField
      name='addressOptional'
      value={form.addressOptional ? form.addressOptional : ''}
      handler={handleFormChange}
      placeholder='Dirección 2'
      fieldClassName='py-[0.95rem]'
    />
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
        placeholder='País*'
        name='country'
        options={form.countries ? form.countries : []}
        onChange={handleSelectChange}
        borderRadius={true}
        borderColor='#000'
        className='lg:w-1/2'
        paddingY='0.43rem'
        messageError={messageError.country.message}
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
  </div>
);

interface FormBillingProps {
  form: paymentForm;
  handleSelectChange: (selected: MultiValue<SelectItem> | SingleValue<SelectItem>, name: string) => void;
  handleFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  messageError: PaymentFormValidate
}

export default FormBilling;
