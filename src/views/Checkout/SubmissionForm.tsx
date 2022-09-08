import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext, useForm } from '../../hooks';
import validator from 'validator';
import useValidator from '../../hooks/useValidator';

import Button from '../../components/common/button';
import CheckField from '../../components/form/checkField';
import TextField from '../../components/form/textField';
import SelectField, { SelectItem } from '../../components/form/selectField';

import { SubmissionFormInterface, SubmissionFormValidate } from '../../interfaces/checkout';
import { mexicanStates } from '../../@fake/statesFake';
import checkOutService from '../../services/checkOutService';
import { useLoading } from '../../hooks/useLoading';

const SubmissionForm = ({ setData, changeStep, setIdCustomer, countriesOptions }:SubmissionFormProps) => {
  // Hooks
  const navigate = useNavigate();
  const { loadingTrue, loadingFalse } = useLoading();
  const [acceptConditions, setAcceptConditions] = useState(false);
  const [showMessageConditions, setShowMessageConditions] = useState(false);
  const { toast, dataFormCheckOut, updateContext } = useAppContext();
  const { form, onSubmit, handleFormChange, handleSelectChange, setForm } = useForm<SubmissionFormInterface>(
    {
      city: dataFormCheckOut.city,
      country: dataFormCheckOut.country,
      countries: countriesOptions ? countriesOptions : dataFormCheckOut.countries,
      email: dataFormCheckOut.email,
      last_name: dataFormCheckOut.last_name,
      name: dataFormCheckOut.name,
      phone: dataFormCheckOut.phone,
      zip_code: dataFormCheckOut.zip_code,
      state: dataFormCheckOut.state,
      states: mexicanStates,
      receive_information: dataFormCheckOut.receive_information,
      reference: dataFormCheckOut.reference,
      houseNumber: dataFormCheckOut.houseNumber,
      apartment: dataFormCheckOut.apartment,
      delegation: dataFormCheckOut.delegation,
      address: dataFormCheckOut.address,
      colony: dataFormCheckOut.colony,
      delivery_note: dataFormCheckOut.delivery_note
    },
    form => validateForm()
  );

  const { handlePutMessageError, validatorBody, resetValidator } = useValidator<SubmissionFormValidate>({
    country: {
      message: ''
    },
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

  // Set countries in select
  useEffect(() => {
    setForm(old => ({ ...old, countries: countriesOptions ? countriesOptions : [] }));
  }, [countriesOptions]);

  const validateForm = () => {
    // Clear all errors
    resetValidator();
    let error = false;
    if (!validator.isEmail(form.email)) {
      handlePutMessageError('email', 'El texto debe ser un email');
      error = true;
    }

    if (!validator.isNumeric(form.phone)) {
      handlePutMessageError('phone', 'Solo se pueden escribir números');
      error = true;
    }

    if (!validator.isLength(form.phone, { min: 10, max: 10 })) {
      handlePutMessageError('phone', 'El celular solo debe tener 10 digitos');
      error = true;
    }

    if (!validator.isAlpha(form.name, 'es-ES', { ignore: ' ' })) {
      handlePutMessageError('name', 'Solo se debe escribir letras');
      error = true;
    }

    if (!validator.isAlpha(form.last_name, 'es-ES', { ignore: ' ' })) {
      handlePutMessageError('last_name', 'Solo se debe escribir letras');
      error = true;
    }

    if (!validator.isLength(form.houseNumber, { min: 4 })) {
      handlePutMessageError('houseNumber', 'El número de la casa debe ser mayor a 3 caracteres');
      error = true;
    }

    if (!validator.isLength(form.apartment, { min: 2 }) && form.apartment.length > 0) {
      handlePutMessageError('apartment', 'El número de apartamento debe ser mayor a 1 carácter');
      error = true;
    }

    if (!validator.isLength(form.reference, { min: 4 }) && form.reference.length > 0) {
      handlePutMessageError('reference', 'El número de apartamento debe ser mayor a 4 caracteres');
      error = true;
    }

    if (!validator.isLength(form.zip_code, { min: 3 })) {
      handlePutMessageError('zip_code', 'El codigo postal debe ser mayor a 2 caracteres');
      error = true;
    }

    if (!validator.isLength(form.colony, { min: 4 })) {
      handlePutMessageError('colony', 'La colonia debe contener mas de 4 caracteres');
      error = true;
    }

    if (!validator.isLength(form.delegation, { min: 4 })) {
      handlePutMessageError('delegation', 'La colonia debe contener mas de 4 caracteres');
      error = true;
    }

    if (validator.equals(form.state.value, '')) {
      handlePutMessageError('state', 'Se debe seleccionar un estado');
      error = true;
    }

    if (validator.equals(form.country.value, '')) {
      handlePutMessageError('country', 'Se debe seleccionar un país');
      error = true;
    }

    if (!error)
      handleSubmit(form);
  };

  // Methods
  const handleSubmit = async (form: SubmissionFormInterface) => {
    if (!acceptConditions) {
      setShowMessageConditions(true);
      return;
    }

    loadingTrue();
    // Send information to api
    const { data, error } = await checkOutService.sendUserInformation(form);
    if (error)
      toast.fire({
        icon: 'warning',
        title: error.map(er => er.msg),
      });
    else {
      updateContext(old => ({ ...old, dataFormCheckOut: form }));
      setData(form);
      setIdCustomer(data.id);
      changeStep(3);
    }

    loadingFalse();
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
          messageError={validatorBody.email.message}
          required
        />
        <TextField
          name='phone'
          value={form.phone}
          handler={handleFormChange}
          placeholder='Celular (10 dígitos)*'
          fieldClassName='py-[0.95rem]'
          messageError={validatorBody.phone.message}
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
            messageError={validatorBody.name.message}
            required/>
          <TextField
            name='last_name'
            value={form.last_name}
            handler={handleFormChange}
            placeholder='Apellido*'
            className='lg:w-1/2'
            fieldClassName='py-[0.95rem]'
            messageError={validatorBody.last_name.message}
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
            messageError={validatorBody.houseNumber.message}
            required
          />
          <TextField
            name='apartment'
            value={form.apartment}
            handler={handleFormChange}
            placeholder='Número Interior ( Ej: Piso, Oficina, Dpto)'
            className='lg:w-1/2'
            fieldClassName='py-[0.95rem]'
            messageError={validatorBody.apartment.message}
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
            messageError={validatorBody.reference.message}
          />
          <TextField
            name='zip_code'
            value={form.zip_code}
            handler={handleFormChange}
            placeholder='Código postal*'
            className='lg:w-1/2'
            fieldClassName='py-[0.95rem]'
            messageError={validatorBody.zip_code.message}
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
            messageError={validatorBody.colony.message}
            required
          />
          <TextField
            name='delegation'
            value={form.delegation}
            handler={handleFormChange}
            placeholder='Delegación o Municipio*'
            className='lg:w-1/2'
            fieldClassName='py-[0.95rem]'
            messageError={validatorBody.delegation.message}
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
            value={form.state.value ? form.state : undefined}
            onChange={handleSelectChange}
            borderRadius={true}
            borderColor='#000'
            className='lg:w-1/2'
            paddingY='0.43rem'
            messageError={validatorBody.state.message}
          />
        </div>
        <SelectField
          placeholder='País*'
          name='country'
          options={form.countries}
          value={form.country.value ? form.country : undefined}
          onChange={handleSelectChange}
          borderRadius={true}
          borderColor='#000'
          paddingY='0.43rem'
          messageError={validatorBody.country.message}
        />
        <CheckField
          onClick={() => console.log('Hi')}
          label='Guardar mi información y consultar más rápidamente la próxima vez'
          border='border border-primary'
          sizeContainer='w-4 h-4 lg:w-5 lg:h-5 lg:mr-1'
          className='mt-1 ml-1 lg:ml-5'
          labelClassName='text-xs lg:text-sm'
        />
        <CheckField
          onClick={() => setAcceptConditions(old => !old)}
          label='Acepto los terminos y condiciones y la política de privacidad*'
          border='border border-primary'
          sizeContainer='w-4 h-4 lg:w-5 lg:h-5 lg:mr-1'
          className='mt-1 ml-1 lg:ml-5'
          labelClassName='text-xs lg:text-sm'
        />
        {showMessageConditions && <div className='text-primary text-xs lg:text-base'>Debe aceptar terminos y condiciones para continuar</div>}

        <div className='lg:flex lg:flex-row-reverse lg:items-center lg:mt-4'>
          <Button className='w-full font-paragraph font-bold bg-primary text-[#fad7b1] mt-4 lg:w-72 lg:text-lg' type='submit'>
            Seguir con envios
          </Button>
          <div className='font-sanzBold text-sm text-center mt-[1.40rem] text-primary cursor-pointer lg:mt-6 lg:text-base lg:mr-14' onClick={() => navigate('/basket')}>
            <span>{'<'} Volver a la canasta</span>
          </div>
        </div>
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
