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
import { isFormComplete } from '../../helpers/paymentHelper';
import { getCities, getPostalCode } from '../../helpers/formCheckoutHelper';

// Miguel idalgo
const postalCode = [11470, 11360, 11450, 11529, 11489, 11289, 11320, 11320, 11590, 11580, 11100, 11100, 11490, 11830, 11460, 11800, 11800, 11520, 11240, 11500, 11460, 11460, 11410, 11000, 11000, 11000, 11000, 11000, 11000, 11000, 11000, 11460, 11310, 11450, 11040, 11420, 11430, 11490, 11450, 11350, 11510, 11530, 11540, 11550, 11560, 11480, 11400, 11440, 11600, 11290, 11440, 11850, 11850, 11340, 11410, 11870, 11370, 11280, 11330, 11430, 11300];
// Benito Juarez
postalCode.push(3000, 3010, 3020, 3023, 3100, 3100, 3103, 3104, 3200, 3230, 3240, 3300, 3303, 3310, 3320, 3330, 3400, 3410, 3420, 3430, 3440, 3500, 3510, 3520, 3530, 3540, 3550, 3560, 3570, 3580, 3590, 3600, 3610, 3630, 3640, 3650, 3660, 3700, 3710, 3720, 3740, 3800, 3810, 3840, 3900, 3910, 3920, 3930, 3940);
// Alvaron Obregon
postalCode.push(1000, 1060, 1010, 1020, 1030, 1030, 1060, 1070, 1600, 1710, 1900, 1904, 1090, 1490, 1030);
// Coyoacan
postalCode.push(4010, 4310, 4000, 4200, 4120, 4030, 4320, 4320, 4380, 4360, 4360, 4370);
// Cuauhtemoc
postalCode.push(6000, 6010, 6020, 6030, 6060, 6070, 6100, 6140, 6170, 6300, 6350, 6400, 6450, 6470, 6500, 6600, 6700, 6720, 6760, 6780, 6800, 6820, 6840, 6850, 6860, 6870, 6880, 6890);

// Queretaro
postalCode.push(76000, 76010, 76017, 76020, 76024, 76025, 76026, 76027, 76028, 76030, 76036, 76037, 76040, 76046, 76047, 76048, 76049, 76050, 76057, 76058, 76059, 76060, 76063, 76067, 76069, 76070, 76074, 76078, 76079, 76080, 76085, 76086, 76087, 76090, 76093, 76099, 76100, 76110, 76113, 76114, 76115, 76116, 76117, 76118, 76120, 76121, 76125, 76127, 76130, 76134, 76135, 76136, 76137, 76138, 76139, 76140, 76144, 76146, 76147, 76148, 76149, 76150, 76154, 76155, 76156, 76157, 76158, 76159, 76160, 76164, 76165, 76166, 76168, 76169, 76170, 76175, 76176, 76177, 76178, 76179, 76180, 76185, 76190, 76197, 76199, 76210, 76211, 76212, 76213, 76214, 76215, 76216, 76217, 76218, 76219, 76220, 76221, 76223, 76224, 76225, 76226, 76227, 76228, 76229, 76230, 76233, 76235, 76237, 76238, 76240, 76243, 76244, 76245, 76246, 76247, 76248, 76249, 76250, 76251, 76252, 76253, 76254, 76255, 76256, 76257, 76258, 76259, 76260, 76261, 76262, 76263, 76264, 76265, 76266, 76267, 76268, 76269, 76270, 76272, 76273, 76274, 76276, 76277, 76278, 76279, 76280, 76281, 76282, 76283, 76284, 76286, 76288, 76289, 76290, 76293, 76294, 76295, 76296, 76297, 76298, 76299, 76300, 76303, 76304, 76309, 76310, 76313, 76314, 76315, 76316, 76317, 76318, 76319, 76320, 76321, 76323, 76324, 76325, 76326, 76327, 76330, 76333, 76334, 76335, 76336, 76337, 76340, 76342, 76344, 76345, 76346, 76347, 76348, 76350, 76353, 76354, 76355, 76356, 76357, 7635876359, 76360, 76367, 76368, 76370, 76372, 76373, 76378, 76379, 76380, 76382, 76383, 76384, 76385, 76386, 76388, 76390, 76392, 76393, 76394, 76395, 76396, 76399, 76400, 76401, 76402, 76410, 76411, 76413, 76414, 76417, 76420, 76421, 76424, 76425, 76426, 76427, 76434, 76436, 76440, 76450, 76453, 76454, 76460, 76463, 76464, 76465, 76470, 76471, 76474, 76476, 76477, 76478, 76483, 76484, 76485, 76486, 76489, 76490, 76492, 76493, 76494, 76495, 76496, 76499, 76500, 76503, 76504, 76505, 76506, 76510, 76513, 76514, 76515, 76516, 76517, 76520, 76523, 76525, 76526, 76527, 76528, 76529, 76530, 76534, 76535, 76536, 76537, 76538, 76539, 76540, 76543, 76544, 76545, 76546, 76547, 76548, 76550, 76553, 76554, 76555, 76556, 76557, 76558, 76560, 76563, 76564, 76565, 76566, 76567, 76568, 76570, 76573, 76574, 76575, 76600, 76605, 76610, 76613, 76614, 76615, 76616, 76617, 76618, 76620, 76623, 76624, 76626, 76627, 76628, 76630, 76631, 76632, 76633, 76634, 76636, 76637, 76640, 76643, 76644, 76646, 76647, 76649, 76650, 76651, 76654, 76655, 76656, 76657, 76663, 76664, 76665, 76666, 76667, 76670, 76674, 76675, 76676, 76677, 76680, 76681, 76683, 76685, 76686, 76687, 76688, 76690, 76693, 76694, 76697, 76700, 76703, 76704, 76705, 76707, 76708, 76709, 76710, 76713, 76714, 76715, 76720, 76721, 76722, 76723, 76724, 76725, 76726, 76729, 76740, 76741, 76743, 76746, 76750, 76753, 76754, 76755, 76756, 76757, 76773, 76774, 76775, 76776, 76780, 76781, 76783, 76785, 76786, 76790, 76791, 76794, 76795, 76796, 76799, 76800, 76803, 76804, 76805, 76806, 76807, 76810, 76812, 76813, 76814, 76815, 76820, 76821, 76823, 76824, 76826, 76827, 76828, 76829, 76830, 76833, 76835, 76837, 76838, 76840, 76842, 76843, 76844, 76845, 76846, 76847, 76848, 76849, 76850, 76860, 76861, 76862, 76863, 76870, 76874, 76875, 76876, 76877, 76878, 76879, 76880, 76883, 76884, 76885, 76886, 76887, 76888, 76889, 76890, 76893, 76894, 76895, 76896, 76897, 76900, 76902, 76903, 76904, 76905, 76906, 76907, 76908, 76910, 76912, 76915, 76920, 76922, 76923, 76924, 76925, 76926, 76927, 76928, 76930, 76950, 76951, 76952, 76953, 76955, 76956, 76957, 76958, 76963, 76964, 76965, 76970, 76973, 76974, 76975, 76976, 76980, 76981, 76983, 76984, 76985, 76990, 76992, 76993, 76994, 76995, 76997, 76998);

const SubmissionForm = ({ setData, changeStep, setIdCustomer, countriesOptions }:SubmissionFormProps) => {
  // Hooks
  const navigate = useNavigate();
  const { loadingTrue, loadingFalse } = useLoading();
  const [acceptConditions, setAcceptConditions] = useState(false);
  const [showMessageConditions, setShowMessageConditions] = useState(false);
  const [formFull, setFormFull] = useState(false);
  const { toast, dataFormCheckOut, updateContext } = useAppContext();
  const { form, onSubmit, handleFormChange, handleSelectChange, setForm } = useForm<SubmissionFormInterface>(
    {
      city: dataFormCheckOut.city,
      cities: dataFormCheckOut.cities,
      country: dataFormCheckOut.country,
      countries: countriesOptions ? countriesOptions : dataFormCheckOut.countries,
      email: dataFormCheckOut.email,
      last_name: dataFormCheckOut.last_name,
      name: dataFormCheckOut.name,
      phone: dataFormCheckOut.phone,
      zip_code: dataFormCheckOut.zip_code,
      zipcodes: dataFormCheckOut.zipcodes,
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
    city: {
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

  useEffect(() => {
    setFormFull(isFormComplete(form, acceptConditions));
  }, [form, acceptConditions]);

  useEffect(() => {
    if (form.zip_code.value) {
      // Validate zip code
      if (!postalCode.includes(parseInt(form.zip_code.value, 10)))
        handlePutMessageError('zip_code', 'El codigo postal no se encuentra en nuestra lista');
      return () => {};
    }
  }, [form.zip_code]);

  useEffect(() => {
    if (form.state.value)
      setForm(old => ({ ...old, cities: getCities(form.state.value) }));
    if (form.city.value)
      setForm(old => ({ ...old, zipcodes: getPostalCode(form.city.value) }));
  }, [form.state, form.city]);

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

    if (!validator.isLength(form.houseNumber, { min: 1 })) {
      handlePutMessageError('houseNumber', 'El número de la casa debe ser mayor o igual a 1 caracter');
      error = true;
    }

    if (!validator.isLength(form.apartment, { min: 1 }) && form.apartment.length > 0) {
      handlePutMessageError('apartment', 'El número de apartamento debe ser mayor a 1 carácter');
      error = true;
    }

    if (!validator.isLength(form.reference, { min: 1 }) && form.reference.length > 0) {
      handlePutMessageError('reference', 'la referencia debe ser mayor a 1 caracteres');
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

    if (validator.equals(form.city.value, '')) {
      handlePutMessageError('city', 'Se debe seleccionar una ciudad');
      error = true;
    }

    if (!postalCode.includes(parseInt(form.zip_code.value, 10))) {
      handlePutMessageError('zip_code', 'El codigo postal no se encuentra en nuestra lista');
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

    if (!formFull)
      return;

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
      localStorage.setItem('dataFormCheckOut', JSON.stringify(form));
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
            placeholder='Número exterior, Casa o Edificio*'
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
            name='colony'
            value={form.colony}
            handler={handleFormChange}
            placeholder='Colonia*'
            className='lg:w-1/2'
            fieldClassName='py-[0.95rem]'
            messageError={validatorBody.colony.message}
            required
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
        <div className='flex flex-col gap-[10px] lg:flex-row lg:gap-3'>
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
          <SelectField
            name='city'
            options={form.cities}
            value={form.city.value ? form.city : undefined}
            placeholder='Ciudad*'
            onChange={handleSelectChange}
            borderRadius={true}
            borderColor='#000'
            className='lg:w-1/2'
            paddingY='0.43rem'
            messageError={validatorBody.city.message}
          />
        </div>
        <div className='flex flex-col gap-[10px] lg:flex-row lg:gap-3'>
          <SelectField
            name='zip_code'
            options={form.zipcodes}
            value={form.zip_code.value ? form.zip_code : undefined}
            placeholder='Código postal*'
            onChange={handleSelectChange}
            borderRadius={true}
            borderColor='#000'
            className='lg:w-1/2'
            paddingY='0.43rem'
            messageError={validatorBody.zip_code.message}
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
          <Button className={`w-full font-paragraph font-bold  mt-4 
          lg:w-72 lg:text-lg ${formFull ? 'bg-primary text-[#fad7b1]' : ' bg-[#dbb2b7] text-white cursor-not-allowed'}`} type='submit'
          >
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
