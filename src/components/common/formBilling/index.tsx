import { MultiValue, SingleValue } from 'react-select';

import SelectField, { SelectItem } from '../../form/selectField';
import TextField from '../../form/textField';

import { paymentForm, PaymentFormValidate } from '../../../interfaces/checkout';
import { useTranslation } from 'react-i18next';

const FormBilling = ({ form, handleFormChange, handleSelectChange, messageError }: FormBillingProps) => {
  // Translate
  const {
    t,
  } = useTranslation();

  return (
    <div className='mt-4 flex flex-col gap-[10px] lg:mt-[38px]'>
      <div className='flex flex-col gap-[10px] lg:flex-row lg:gap-3'>
        <TextField
          name='name'
          value={form.name ? form.name : '' }
          handler={handleFormChange}
          placeholder={t('checkSubmissionFirstName')}
          className='lg:w-1/2'
          fieldClassName='py-[0.95rem]'
          messageError={messageError.name.message}
          required
        />
        <TextField
          name='last_name'
          value={form.last_name ? form.last_name : ''}
          handler={handleFormChange}
          placeholder={t('checkSubmissionLastName')}
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
        placeholder={t('checkSubmissionStreetName')}
        fieldClassName='py-[0.95rem]'
        required
      />
      <div className='flex flex-col gap-[10px] lg:flex-row lg:gap-3'>
        <TextField
          name='houseNumber'
          value={form.houseNumber ? form.houseNumber : ''}
          handler={handleFormChange}
          placeholder={t('checkSubmissionExteriorNumber')}
          className='lg:w-1/2'
          fieldClassName='py-[0.95rem]'
          messageError={messageError.houseNumber.message}
          required
        />
        <TextField
          name='apartment'
          value={form.apartment ? form.apartment : ''}
          handler={handleFormChange}
          placeholder={t('checkSubmissioninteriorNumber')}
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
          placeholder={t('checkSubmissionBetweenStreets')}
          className='lg:w-1/2'
          fieldClassName='py-[0.95rem]'
          messageError={messageError.reference.message}
        />
        <TextField
          name='colony'
          value={form.colony ? form.colony : ''}
          handler={handleFormChange}
          placeholder={t('checkSubmissionColony')}
          className='lg:w-1/2'
          fieldClassName='py-[0.95rem]'
          messageError={messageError.colony.message}
          required
        />
      </div>
      <SelectField
        placeholder={t('checkSubmissionCountry')}
        name='country'
        options={form.countries ? form.countries : []}
        onChange={handleSelectChange}
        borderRadius={true}
        borderColor='#000'
        paddingY='0.43rem'
        messageError={messageError.country.message}
      />
      <div className='flex flex-col gap-[10px] lg:flex-row lg:gap-3'>
        <SelectField
          placeholder={t('checkSubmissionState')}
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
        <SelectField
          name='city'
          value={form.city ? form.city : undefined}
          options={form.cities ? form.cities : [{ label: '', value: '' }]}
          onChange={handleSelectChange}
          placeholder={t('checkSubmissionDelegation')}
          borderRadius={true}
          borderColor='#000'
          className='lg:w-1/2'
          paddingY='0.43rem'
          messageError={''}
        />
      </div>
      <div className='flex flex-col gap-[10px] lg:flex-row lg:gap-3'>
        <SelectField
          placeholder={t('checkSubmissionZip')}
          name='zip_code'
          options={form.zipCodes ? form.zipCodes : [{ label: '', value: '' }]}
          value={form.zip_code?.value ? form.zip_code : undefined}
          onChange={handleSelectChange}
          borderRadius={true}
          borderColor='#000'
          className='lg:w-1/2'
          paddingY='0.43rem'
          messageError={messageError.zip_code.message}
        />
        <TextField
          name='delegation'
          value={form.delegation ? form.delegation : ''}
          handler={handleFormChange}
          placeholder={t('checkSubmissionDelegation')}
          className='lg:w-1/2'
          fieldClassName='py-[0.95rem]'
          messageError={messageError.delegation.message}
          required
        />
      </div>
      <div className='flex flex-col gap-[10px] lg:flex-row lg:gap-3'>
        <TextField
          name='email'
          value={form.email ? form.email : ''}
          handler={handleFormChange}
          placeholder={t('checkSubmissionEmail')}
          className='lg:w-1/2'
          fieldClassName='py-[0.95rem]'
          messageError={messageError.email.message}
          required
        />
        <TextField
          name='phone'
          value={form.phone ? form.phone : ''}
          handler={handleFormChange}
          placeholder={t('checkSubmissionPhone')}
          className='lg:w-1/2'
          fieldClassName='py-[0.95rem]'
          messageError={messageError.phone.message}
          required
        />
      </div>
    </div>
  );
};

interface FormBillingProps {
  form: paymentForm;
  handleSelectChange: (selected: MultiValue<SelectItem> | SingleValue<SelectItem>, name: string) => void;
  handleFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  messageError: PaymentFormValidate
}

export default FormBilling;
