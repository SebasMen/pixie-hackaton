import { SubmissionFormInterface } from '../../interfaces/checkout';
import { MultiValue, SingleValue } from 'react-select';
import { SelectItem } from '../../components/form/selectField';

const ShippingSection = ({
  onChange,
  onSelectChange,
  changeStep,
  form: {
    country,
    address,
    apartament,
    city,
    postalCode,
    email,
    typeShipping
  },
}: SubmissionFormProps) => {
  console.log('Shipping');

  return (
    <>
      <div className="pt-6 font-paragraph">
        <div className="border border-primary p-2.5">
          <div className="border-b border-primary grid grid-flow-col pb-5">
            <div className="text-left flex flex-col">
              <span className="text-xs">Contacto</span>
              <span className="text-sm mt-1">{email}</span>
            </div>
            <div className="text-right text-xs text-[#7D7D7D]">
              <span>Cambiar</span>
            </div>
          </div>
          <div className="grid grid-flow-col pt-2">
            <div className="text-left flex flex-col">
              <span className="text-xs">Enviar a</span>
              <span className="text-sm mt-1 leading-4">
                <a>{postalCode}, </a>
                <a>{address}, </a>
                <a>{apartament}, </a>
                <a>{city}, </a>
                <a>{country.label}</a>
              </span>
            </div>
            <div className="text-right text-xs text-[#7D7D7D]">
              <span>Cambiar</span>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5">
        <div><span className="font-bold">Envios</span></div>
        <div className="border border-primary px-2.5">
          <div className="border-b border-primary grid grid-flow-col py-5">
            <div className="text-left text-sm">
              <input type="radio" value={typeShipping} name="shipping" /> Envio estándar
            </div>
            <div className="text-right font-bold">
              <span>$12.000</span>
            </div>
          </div>
          <div className="grid grid-flow-col py-5">
            <div className="text-left text-sm">
              <input type="radio" value={typeShipping} name="shipping" /> Envio rápido
            </div>
            <div className="text-right font-bold">
              <span>$20.000</span>
            </div>
          </div>
        </div>
      </div>
    </>
);
};

interface SubmissionFormProps {
    onSelectChange: (selected: MultiValue<SelectItem> | SingleValue<SelectItem>, name: string) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeStep: React.Dispatch<React.SetStateAction<number>>;
    form: SubmissionFormInterface;
  }

export default ShippingSection;
