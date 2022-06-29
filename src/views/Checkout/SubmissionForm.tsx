import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/button';
import CheckField from '../../components/form/checkField';
import SelectField, { SelectItem } from '../../components/form/selectField';
import TextField from '../../components/form/textField';
import Page from '../../components/layout/page';
import { useForm } from '../../hooks';
import { SubmissionFormInterface } from '../../interfaces/basket';

const countriesOptions: SelectItem[] = [
  { value: '1', label: 'Colombia' },
  { value: '2', label: 'Ecuador' },
];

const provinceOptions: SelectItem[] = [
  { value: '1', label: 'Bogota' },
  { value: '2', label: 'Medellin' },
];

const CheckOut = () => {
  const navigate = useNavigate();
  // Hooks
  const { form, onSubmit, handleFormChange, handleSelectChange } = useForm<SubmissionFormInterface>(
    {
      address: '',
      apartament: '',
      city: '',
      country: countriesOptions[0],
      countries: countriesOptions,
      document: '',
      email: '',
      lastNames: '',
      names: '',
      phone: '',
      postalCode: '',
      province: provinceOptions[0],
      provinces: provinceOptions
    },
    form => handleSubmit(form)
  );

  // Methods
  const handleSubmit = (form: SubmissionFormInterface) => {
    console.log(form);
  };

  return (
    <Page>
      <div className='px-6 w-full font-paragraph mb-16'>
        <div className='flex flex-col gap-2 text-left mb-3'>
          <span className='text-[25px] font-bold'>Tu canasta</span>
          <span className='text-lg font-bold'>Direccion de envío</span>
        </div>
        <form className='flex flex-col gap-3'>
          <SelectField
            placeholder='País/región*'
            name='country'
            options={countriesOptions}
            onChange={handleSelectChange}
          />
          <TextField name='name' className='ring-1 ring-primary' value={form.names} handler={handleFormChange} placeholder='Nombre*' required />
          <TextField name='name' value={form.lastNames} handler={handleFormChange} placeholder='Apellido*' required />
          <TextField name='name' value={form.document} handler={handleFormChange} placeholder='Documento*' required />
          <TextField name='name' value={form.address} handler={handleFormChange} placeholder='Dirección*' required />
          <TextField name='name' value={form.apartament} handler={handleFormChange} placeholder='Apartamento, local, etc'/>
          <TextField name='name' value={form.city} handler={handleFormChange} placeholder='Ciudad*' required/>
          <SelectField
            placeholder='Provincia*'
            name='Province'
            options={provinceOptions}
            onChange={handleSelectChange}
          />
          <TextField name='name' value={form.postalCode} handler={handleFormChange} placeholder='Código postal'/>
          <TextField name='name' value={form.phone} handler={handleFormChange} placeholder='Teléfono*' required/>
          <TextField name='name' value={form.email} handler={handleFormChange} placeholder='E-mail*' required/>
          <div className='flex gap-2 mt-12'>
            <CheckField onClick={() => console.log('aa')}/>
            <span className='text-[13px]'>Guardar mi información y consultar más rápidamente la próxima vez</span>
          </div>
          <div className='flex justify-around mt-4 w-full gap-2'>
            <Button className='ring-1 ring-primary text-primary text-base w-1/2' padding='py-[11px]' onClick={() => navigate('/basket')}>
              ir a la bolsa
            </Button>
            <Button className='bg-primary text-white w-1/2'>
              Siguiente
            </Button>
          </div>
        </form>
      </div>
    </Page>
  );
};

export default CheckOut;
