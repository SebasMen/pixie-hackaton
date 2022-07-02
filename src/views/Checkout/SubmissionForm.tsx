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
    provinces,
    province,
    postalCode,
    phone,
    email
  },
}: SubmissionFormProps) => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col gap-3'>
      <div className='flex flex-col gap-2 text-left mb-2 mt-3'>
        <span className='text-lg font-bold'>Información de contacto</span>
      </div>
      <TextField name='email' border='border border-primary ring-1 ring-black' value={email} handler={onChange} placeholder='Correo electrónico*' />
      <div className='flex flex-col gap-2 text-left mb-3 mt-7'>
        <span className='text-lg font-bold'>Direccion de envío</span>
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
      <TextField name='names' border='border border-primary ring-1 ring-black' value={names} handler={onChange} placeholder='Nombre*' />
      <TextField name='lastNames' border='border border-primary ring-1 ring-black' value={lastNames} handler={onChange} placeholder='Apellido*' />
      <TextField name='document' border='border border-primary ring-1 ring-black' value={document} handler={onChange} placeholder='Documento*' />
      <TextField name='address' border='border border-primary ring-1 ring-black' value={address} handler={onChange} placeholder='Dirección*' />
      <TextField name='apartament' border='border border-primary ring-1 ring-black' value={apartament} handler={onChange} placeholder='Apartamento, local, etc'/>
      <TextField name='city' border='border border-primary ring-1 ring-black' value={city} handler={onChange} placeholder='Ciudad*' />
      <SelectField
        placeholder='Provincia*'
        name='Province'
        options={provinces}
        onChange={onSelectChange}
        border={true}
        borderRadius={false}
        borderColor='#000'
      />
      <TextField name='postalCode' border='border border-primary ring-1 ring-black' value={postalCode} handler={onChange} placeholder='Código postal'/>
      <TextField name='phone' border='border border-primary ring-1 ring-black' value={phone} handler={onChange} placeholder='Teléfono*'/>
      <Button className='bg-primary text-white mt-7' onClick={() => changeStep(3)}>
        Seguir con envios
      </Button>
      <div className='text-center mt-5 cursor-pointer' onClick={() => navigate('/basket')}>
        {'<'} Volver a la canasta
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
