import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MultiValue, SingleValue } from 'react-select';
import { mexicanStates } from '../../@fake/statesFake';
import Button from '../../components/common/button';
import Spinner from '../../components/common/spinner';
import CheckField from '../../components/form/checkField';
import SelectField, { SelectItem } from '../../components/form/selectField';
import TextField from '../../components/form/textField';
import { useFetch, useForm } from '../../hooks';
import { selectCountryService, SubmissionFormInterface } from '../../interfaces/checkout';
import checkOutService from '../../services/checkOutService';

const countriesOptions: SelectItem[] = [
  { value: '1', label: 'Colombia' },
  { value: '2', label: 'Ecuador' },
];

const SubmissionForm = ({ setData, changeStep, setIdCustomer }:SubmissionFormProps) => {
  // Hooks
  const navigate = useNavigate();
  const [loadingSt, setLoadingSt] = useState(false);
  const [acceptConditions, setAcceptConditions] = useState(false);
  const [showMessageConditions, setShowMessageConditions] = useState(false);
  const { loading, response } = useFetch<selectCountryService>(checkOutService.getOneCountry);
  const { form, onSubmit, handleFormChange, handleSelectChange, setForm } = useForm<SubmissionFormInterface>(
    {
      city: '',
      country: countriesOptions[0],
      countries: countriesOptions,
      email: '',
      last_name: '',
      name: '',
      phone: '',
      zip_code: '',
      state: mexicanStates[0],
      states: mexicanStates,
      receive_information: '0',
      reference: '',
      houseNumber: '',
      apartment: '',
      delegation: '',
      address: '',
      colony: ''
    },
    form => handleSubmit(form)
  );

  useEffect(() => {
    // Manage loading empty response
    if (loading || !response) return;

    // Destructure response
    const { data, err } = response;

    // Manage response errores or no data
    if (!data || err) return;

    // Sorting out data
    const countries: SelectItem[] = data.map(country => ({
      label: country.name,
      value: country.id,
    }));

    setForm(old => ({
      ...old,
      countries
    }));
  }, [loading, response]);

  // Methods
  const handleSubmit = async (form: SubmissionFormInterface) => {
    if (!acceptConditions) {
      setShowMessageConditions(true);
      return;
    }

    setLoadingSt(true);
    const { data, error } = await checkOutService.sendUserInformation(form);
    if (error)
      console.log(error.map(er => console.log(er.msg)));
    else {
      console.log('bien');
      setData(form);
      setIdCustomer(data.id);
      changeStep(3);
    }

    setLoadingSt(false);
  };

  const sendNewsInMyMail = () => {
    let state = '1';
    if (form.receive_information === '1')
      state = '0';

    setForm(old => ({
      ...old,
      receive_information: state
    }));
  };

  return (
    <form className='pl-4 lg:w-1/2 font-subTitles text-sm' onSubmit={onSubmit}>
      <div className='flex flex-col gap-[10px] lg:mt-[38px]'>
        <span className='text-lg font-titles lg:text-xl mb-1'>Información de contacto</span>
        <TextField name='email' value={form.email} handler={handleFormChange} placeholder='Correo electrónico*' fieldClassName='py-[0.95rem]' required/>
        <TextField name='phone' value={form.phone} handler={handleFormChange} placeholder='Celular (10 dígitos)*' fieldClassName='py-[0.95rem]' required/>
        <CheckField
          onClick={sendNewsInMyMail}
          label='Enviarme novedades y ofertas por correo electrónico'
          border='border border-primary'
          sizeContainer='w-5 h-5 mr-1'
          className='ml-5 mt-1'
        />
        <span className='text-lg font-titles lg:text-xl lg:mt-6'>Direccion de envío</span>
        <div className='lg:flex lg:gap-1'>
          <TextField name='name' value={form.name} handler={handleFormChange} placeholder='Nombre*' className='lg:w-1/2' fieldClassName='py-[0.95rem]' required/>
          <TextField name='last_name' value={form.last_name} handler={handleFormChange} placeholder='Apellido*' className='lg:w-1/2' fieldClassName='py-[0.95rem]' required/>
        </div>
        <TextField name='address' value={form.address} handler={handleFormChange} placeholder='Nombre de la calle*' fieldClassName='py-[0.95rem]' required/>
        <div className='lg:flex lg:gap-3'>
          <TextField name='houseNumber' value={form.houseNumber} handler={handleFormChange} placeholder='Número de Condominio, Casa o Edificio*' className='lg:w-1/2' fieldClassName='py-[0.95rem]' required/>
          <TextField name='apartment' value={form.apartment} handler={handleFormChange} placeholder='Número Interior ( Ej: Piso, Oficina, Dpto)' className='lg:w-1/2' fieldClassName='py-[0.95rem]'/>
        </div>
        <div className='lg:flex lg:gap-3'>
          <TextField name='reference' value={form.reference} handler={handleFormChange} placeholder='Entre calles (Referencias)' className='lg:w-1/2' fieldClassName='py-[0.95rem]'/>
          <TextField name='zip_code' value={form.zip_code} handler={handleFormChange} placeholder='Código postal' className='lg:w-1/2' fieldClassName='py-[0.95rem]' required/>
        </div>
        <div className='lg:flex lg:gap-3'>
          <TextField name='colony' value={form.colony} handler={handleFormChange} placeholder='Colonia*' className='lg:w-1/2' fieldClassName='py-[0.95rem]' required/>
          <TextField name='delegation' value={form.delegation} handler={handleFormChange} placeholder='Delegación o Municipio*'className='lg:w-1/2' fieldClassName='py-[0.95rem]' required/>
        </div>
        <div className='lg:flex lg:gap-3'>
          <TextField name='city' value={form.city} handler={handleFormChange} placeholder='Ciudad*' className='lg:w-1/2' fieldClassName='py-[0.95rem]' required/>
          <SelectField
            placeholder='Estado*'
            name='state'
            options={form.states}
            onChange={handleSelectChange}
            borderRadius={true}
            borderColor='#000'
            className='lg:w-1/2'
          />
        </div>
        <SelectField
          placeholder='País*'
          name='country'
          options={form.countries}
          onChange={handleSelectChange}
          borderRadius={true}
          borderColor='#000'
        />
        <CheckField
          onClick={() => console.log('aa')}
          label='Guardar mi información y consultar más rápidamente la próxima vez'
          border='border border-primary'
          sizeContainer='w-5 h-5 mr-1'
          className='ml-5 mt-1'
        />
        <CheckField
          onClick={() => setAcceptConditions(!acceptConditions)}
          label='Acepto los terminos y condiciones y la política de privacidad*'
          border='border border-primary'
          sizeContainer='w-5 h-5 mr-1'
          className='ml-5 mt-1'
        />
        {showMessageConditions && <div className='text-primary'>debe aceptar terminos y condiciones</div>}

        {loadingSt
          ?
          <Spinner/>
          :
          <div className='lg:flex lg:flex-row-reverse lg:items-center'>
            <Button className='font-paragraph font-bold bg-primary text-[#fad7b1] mt-7 lg:w-72 lg:text-lg' type='submit'>
              Seguir con envios
            </Button>
            <div className='text-center text-base text-primary mt-6 cursor-pointer lg:mr-14' onClick={() => navigate('/basket')}>
              <span>{'<'} Volver a la canasta</span>
            </div>
          </div>
        }
      </div>
    </form>
  );
};

interface SubmissionFormProps {
  setData: React.Dispatch<React.SetStateAction<SubmissionFormInterface | undefined>>;
  setIdCustomer: React.Dispatch<React.SetStateAction<string>>;
  changeStep: React.Dispatch<React.SetStateAction<number>>;
}

export default SubmissionForm;
