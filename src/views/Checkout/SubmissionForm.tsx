import { useNavigate } from 'react-router-dom';
import { MultiValue, SingleValue } from 'react-select';
import Button from '../../components/common/button';
import CheckField from '../../components/form/checkField';
import SelectField, { SelectItem } from '../../components/form/selectField';
import TextField from '../../components/form/textField';
import { SubmissionFormInterface } from '../../interfaces/checkout';

const SubmissionForm = ({
  onChange,
  onSelectChange,
  onSubmit,
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
    <form className='flex flex-col gap-3'>
      <SelectField
        placeholder='País/región*'
        name='country'
        options={countries}
        onChange={onSelectChange}
      />
      <TextField name='name' className='ring-1 ring-primary' value={names} handler={onChange} placeholder='Nombre*' required />
      <TextField name='name' value={lastNames} handler={onChange} placeholder='Apellido*' required />
      <TextField name='name' value={document} handler={onChange} placeholder='Documento*' required />
      <TextField name='name' value={address} handler={onChange} placeholder='Dirección*' required />
      <TextField name='name' value={apartament} handler={onChange} placeholder='Apartamento, local, etc'/>
      <TextField name='name' value={city} handler={onChange} placeholder='Ciudad*' required/>
      <SelectField
        placeholder='Provincia*'
        name='Province'
        options={provinces}
        onChange={onSelectChange}
      />
      <TextField name='name' value={postalCode} handler={onChange} placeholder='Código postal'/>
      <TextField name='name' value={phone} handler={onChange} placeholder='Teléfono*' required/>
      <TextField name='name' value={email} handler={onChange} placeholder='E-mail*' required/>
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
  );
};

interface SubmissionFormProps {
    onSelectChange: (selected: MultiValue<SelectItem> | SingleValue<SelectItem>, name: string) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    form: SubmissionFormInterface;
    /// setView: React.Dispatch<React.SetStateAction<number>>;
  }

export default SubmissionForm;
