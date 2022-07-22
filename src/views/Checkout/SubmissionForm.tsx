import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext, useForm } from '../../hooks';
import validator from 'validator';

import Button from '../../components/common/button';
import Spinner from '../../components/common/spinner';
import CheckField from '../../components/form/checkField';
import TextField from '../../components/form/textField';
import SelectField, { SelectItem } from '../../components/form/selectField';

import { SubmissionFormInterface } from '../../interfaces/checkout';
import { mexicanStates } from '../../@fake/statesFake';
import checkOutService from '../../services/checkOutService';
import useValidator from '../../hooks/useValidator';
import { validatorBody } from '../../interfaces/validator';

const SubmissionForm = ({ setData, changeStep, setIdCustomer, countriesOptions }:SubmissionFormProps) => {
  // Hooks
  const navigate = useNavigate();
  const [loadingSt, setLoadingSt] = useState(false);
  const [acceptConditions, setAcceptConditions] = useState(false);
  const [showMessageConditions, setShowMessageConditions] = useState(false);
  const { deliveryNote } = useAppContext();
  const { form, onSubmit, handleFormChange, handleSelectChange, setForm } = useForm<SubmissionFormInterface>(
    {
      city: '',
      country: countriesOptions ? countriesOptions[0] : { label: '', value: '' },
      countries: countriesOptions ? countriesOptions : [],
      email: '',
      last_name: '',
      name: '',
      phone: '',
      zip_code: '',
      state: { label: '', value: '' },
      states: mexicanStates,
      receive_information: '0',
      reference: '',
      houseNumber: '',
      apartment: '',
      delegation: '',
      address: '',
      colony: '',
      delivery_note: deliveryNote
    },
    form => validateForm()
  );

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
    state: {
      state: false,
      message: ''
    },
  });

  useEffect(() => {
    setForm(old => ({ ...old, countries: countriesOptions ? countriesOptions : [] }));
  }, [countriesOptions]);

  const validateForm = () => {
    // Reset validator
    resetValidate();
    if (!validator.isEmail(form.email)) {
      setShowMessageValidate(old => ({ ...old, email: { state: true, message: 'El texto debe ser un email' } }));
      return;
    }

    if (!validator.isNumeric(form.phone)) {
      setShowMessageValidate(old => ({ ...old, phone: { state: true, message: 'Solo se pueden escribir numeros' } }));
      return;
    }

    if (!validator.isLength(form.phone, { min: 10, max: 10 })) {
      setShowMessageValidate(old => ({ ...old, phone: { state: true, message: 'El celular solo debe tener 10 digitos' } }));
      return;
    }

    if (validator.equals(form.state.value, '')) {
      setShowMessageValidate(old => ({ ...old, state: { state: true, message: 'Se debe seleccionar un estado' } }));
      return;
    }

    if (validator.equals(form.country.value, '')) {
      setShowMessageValidate(old => ({ ...old, country: { state: true, message: 'Se debe seleccionar un país' } }));
      /// eslint-disable-next-line no-useless-return
      return;
    }

    handleSubmit(form);
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
      state: {
        state: false,
        message: ''
      },
    });
  };

  // Methods
  const handleSubmit = async (form: SubmissionFormInterface) => {
    if (!acceptConditions) {
      setShowMessageConditions(true);
      return;
    }

    setLoadingSt(true);
    // Send information to api
    const { data, error } = await checkOutService.sendUserInformation(form);
    if (error)
      console.log(error.map(er => console.log(er.msg)));
    else {
      setData(form);
      setIdCustomer(data.id);
      changeStep(3);
    }

    setLoadingSt(false);
  };

  // Update send infomation to email in the form
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
    <form className='mt-5 px-6 font-subTitles text-sm lg:mt-0 lg:px-0' onSubmit={onSubmit}>
      <div className='flex flex-col gap-[10px] lg:mt-[38px]'>
        <span className='text-base font-titles lg:text-xl mb-1'>Información de contacto</span>
        <TextField
          name='email'
          value={form.email}
          handler={handleFormChange}
          placeholder='Correo electrónico*'
          fieldClassName='py-[0.95rem]'
          messageError={showMessageValidate.email.message}
          showMessageError={showMessageValidate.email.state}
          required
        />
        <TextField
          name='phone'
          value={form.phone}
          handler={handleFormChange}
          placeholder='Celular (10 dígitos)*'
          fieldClassName='py-[0.95rem]'
          messageError={showMessageValidate.phone.message}
          showMessageError={showMessageValidate.phone.state}
          required/>
        <CheckField
          onClick={sendNewsInMyMail}
          label='Enviarme novedades y ofertas por correo electrónico'
          border='border border-primary'
          sizeContainer='w-4 h-4 lg:w-5 lg:h-5 lg:mr-1'
          className='mt-1 ml-1 lg:ml-5'
          labelClassName='text-xs lg:text-sm'
        />
        <span className='text-base mt-3 mb-1 font-titles lg:text-xl lg:mt-6'>Direccion de envío</span>
        <div className='flex flex-col gap-[10px] lg:flex-row lg:gap-3'>
          <TextField
            name='name'
            value={form.name}
            handler={handleFormChange}
            placeholder='Nombre*'
            className='lg:w-1/2'
            fieldClassName='py-[0.95rem]'
            required/>
          <TextField
            name='last_name'
            value={form.last_name}
            handler={handleFormChange}
            placeholder='Apellido*'
            className='lg:w-1/2'
            fieldClassName='py-[0.95rem]'
            required/>
        </div>
        <TextField
          name='address'
          value={form.address}
          handler={handleFormChange}
          placeholder='Nombre de la calle*'
          fieldClassName='py-[0.95rem]'
          required
        />
        <div className='flex flex-col gap-[10px] lg:flex-row lg:gap-3'>
          <TextField
            name='houseNumber'
            value={form.houseNumber}
            handler={handleFormChange}
            placeholder='Número de Condominio, Casa o Edificio*'
            className='lg:w-1/2'
            fieldClassName='py-[0.95rem]'
            required
          />
          <TextField
            name='apartment'
            value={form.apartment}
            handler={handleFormChange}
            placeholder='Número Interior ( Ej: Piso, Oficina, Dpto)'
            className='lg:w-1/2'
            fieldClassName='py-[0.95rem]'
          />
        </div>
        <div className='flex flex-col gap-[10px] lg:flex-row lg:gap-3'>
          <TextField
            name='reference'
            value={form.reference}
            handler={handleFormChange}
            placeholder='Entre calles (Referencias)'
            className='lg:w-1/2'
            fieldClassName='py-[0.95rem]'
          />
          <TextField
            name='zip_code'
            value={form.zip_code}
            handler={handleFormChange}
            placeholder='Código postal'
            className='lg:w-1/2'
            fieldClassName='py-[0.95rem]'
            required
          />
        </div>
        <div className='flex flex-col gap-[10px] lg:flex-row lg:gap-3'>
          <TextField
            name='colony'
            value={form.colony}
            handler={handleFormChange}
            placeholder='Colonia*'
            className='lg:w-1/2'
            fieldClassName='py-[0.95rem]'
            required
          />
          <TextField
            name='delegation'
            value={form.delegation}
            handler={handleFormChange}
            placeholder='Delegación o Municipio*'
            className='lg:w-1/2'
            fieldClassName='py-[0.95rem]'
            required
          />
        </div>
        <div className='flex flex-col gap-[10px] lg:flex-row lg:gap-3'>
          <TextField
            name='city'
            value={form.city}
            handler={handleFormChange}
            placeholder='Ciudad*'
            className='lg:w-1/2'
            fieldClassName='py-[0.95rem]'
            required
          />
          <SelectField
            placeholder='Estado*'
            name='state'
            options={form.states}
            onChange={handleSelectChange}
            borderRadius={true}
            borderColor='#000'
            className='lg:w-1/2'
            paddingY='0.43rem'
            messageError={showMessageValidate.state.message}
            showMessageError={showMessageValidate.state.state}
          />
        </div>
        <SelectField
          placeholder='País*'
          name='country'
          options={form.countries}
          onChange={handleSelectChange}
          borderRadius={true}
          borderColor='#000'
          paddingY='0.43rem'
          messageError={showMessageValidate.country.message}
          showMessageError={showMessageValidate.country.state}
        />
        <CheckField
          onClick={() => console.log('aa')}
          label='Guardar mi información y consultar más rápidamente la próxima vez'
          border='border border-primary'
          sizeContainer='w-4 h-4 lg:w-5 lg:h-5 lg:mr-1'
          className='mt-1 ml-1 lg:ml-5'
          labelClassName='text-xs lg:text-sm'
        />
        <CheckField
          onClick={() => setAcceptConditions(!acceptConditions)}
          label='Acepto los terminos y condiciones y la política de privacidad*'
          border='border border-primary'
          sizeContainer='w-4 h-4 lg:w-5 lg:h-5 lg:mr-1'
          className='mt-1 ml-1 lg:ml-5'
          labelClassName='text-xs lg:text-sm'
        />
        {showMessageConditions && <div className='text-primary'>Debe aceptar terminos y condiciones para continuar</div>}

        {loadingSt
          ?
          <Spinner/>
          :
          <div className='lg:flex lg:flex-row-reverse lg:items-center lg:mt-4'>
            <Button className='w-full font-paragraph font-bold bg-primary text-[#fad7b1] mt-4 lg:w-72 lg:text-lg' type='submit'>
              Seguir con envios
            </Button>
            <div className='font-sanzBold text-sm text-center mt-[1.40rem] text-primary cursor-pointer lg:mt-6 lg:text-base lg:mr-14' onClick={() => navigate('/basket')}>
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
  countriesOptions: SelectItem[] | undefined;
}

export default SubmissionForm;

/// const { validatorBody, handlePutMessageError } = useValidator([
//   {
//     message: '',
//     name: 'country',
//     state: false
//   },
//   {
//     message: '',
//     name: 'email',
//     state: false
//   },
//   {
//     message: '',
//     name: 'phone',
//     state: false
//   },
//   {
//     message: '',
//     name: 'state',
//     state: false
//   },
// ]);
