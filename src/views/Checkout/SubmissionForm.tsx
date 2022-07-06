import { useNavigate } from 'react-router-dom';
import { MultiValue, SingleValue } from 'react-select';
import Button from '../../components/common/button';
import SelectField, { SelectItem } from '../../components/form/selectField';
import TextField from '../../components/form/textField';
import { SubmissionFormInterface } from '../../interfaces/checkout';

const SubmissionForm = ({
  onChange,
  onSelectChange,
  changeStep,
  form: {
    countries,
    country,
    names,
    lastNames,
    document,
    address,
    apartament,
    city,
    states,
    state,
    postalCode,
    phone,
    email
  },
}: SubmissionFormProps) => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col gap-3 lg:mt-6'>
      <div className='flex flex-col gap-2 text-left mt-3'>
        <span className='text-lg font-bold lg:text-xl'>Información de contacto</span>
      </div>
      <TextField name='email' border='border border-primary ring-1 ring-black' value={email} handler={onChange} placeholder='Correo electrónico*' />
      <div className='flex flex-col gap-2 text-left mt-6'>
        <span className='text-lg font-bold lg:text-xl'>Direccion de envío</span>
      </div>
      <SelectField
        placeholder='País/región*'
        name='country'
        options={countries}
        onChange={onSelectChange}
        border={true}
        borderRadius={false}
        borderColor='#000'
      />
      <div className='lg:flex lg:gap-3'>
        <TextField name='names' border='border border-primary ring-1 ring-black' value={names} handler={onChange} placeholder='Nombre*' className='lg:w-1/2'/>
        <TextField name='lastNames' border='border border-primary ring-1 ring-black' value={lastNames} handler={onChange} placeholder='Apellido*' className='lg:w-1/2'/>
      </div>
      <TextField name='document' border='border border-primary ring-1 ring-black' value={document} handler={onChange} placeholder='Documento*' />
      <TextField name='address' border='border border-primary ring-1 ring-black' value={address} handler={onChange} placeholder='Dirección*' />
      <TextField name='apartament' border='border border-primary ring-1 ring-black' value={apartament} handler={onChange} placeholder='Apartamento, local, etc'/>
      <div className='lg:flex lg:gap-3'>
        <TextField name='city' border='border border-primary ring-1 ring-black' value={city} handler={onChange} placeholder='Ciudad*' className='lg:w-1/2'/>
        <SelectField
          placeholder='Estado*'
          name='state'
          options={states}
          onChange={onSelectChange}
          border={true}
          borderRadius={false}
          borderColor='#000'
          className='lg:w-1/2'
        />
      </div>
      <TextField name='postalCode' border='border border-primary ring-1 ring-black' value={postalCode} handler={onChange} placeholder='Código postal' />
      <TextField name='phone' border='border border-primary ring-1 ring-black' value={phone} handler={onChange} placeholder='Teléfono*'/>
      <div className='lg:flex lg:flex-row-reverse lg:items-center'>
        <Button className='bg-primary text-white mt-7 lg:w-72' onClick={() => changeStep(3)}>
          Seguir con envios
        </Button>
        <div className='text-center mt-5 cursor-pointer lg:mx-10' onClick={() => navigate('/basket')}>
          {'<'} Volver a la canasta
        </div>
      </div>
    </div>
  );
};

interface SubmissionFormProps {
    onSelectChange: (selected: MultiValue<SelectItem> | SingleValue<SelectItem>, name: string) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeStep: React.Dispatch<React.SetStateAction<number>>;
    form: SubmissionFormInterface;
  }

export default SubmissionForm;
