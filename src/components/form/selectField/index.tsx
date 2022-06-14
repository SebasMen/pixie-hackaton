import Select, { MultiValue, SingleValue } from 'react-select';

export const SelectField = ({
  name,
  value,
  options,
  onChange,
  label,
  className = '',
  isMulti = false,
}: SelectFieldProps) => (
  <div className={'w-full flex flex-col items-start ' + className}>
    {label && <h2 className='my-1.5'>{label}</h2>}
    <Select
      theme={old => ({
        ...old,
        colors: {
          ...old.colors,
          primary: '#ebd3b8',
          primary25: '#fff6ec',
        },
      })}
      isMulti={isMulti}
      className='w-full'
      name={name}
      value={value}
      options={options}
      onChange={newValue => onChange(newValue, name)}
      styles={{
        control: base => ({
          ...base,
          minHeight: 40,
          border: 'none',
          borderRadius: '9999px',
          paddingLeft: '10px',
          paddingRight: '10px',
        }),
        menu: base => ({
          ...base,
          borderRadius: '15px',
          overflow: 'hidden',
        })
      }}
    />
  </div>
);

interface SelectFieldProps {
  name: string;
  isMulti?: boolean;
  label?: string;
  className?: string;
  value: SelectItem | SelectItem[];
  options: SelectItem[];
  onChange: (selected: MultiValue<SelectItem> | SingleValue<SelectItem>, name: string) => void;
}

export interface SelectItem {
  label: string;
  value?: string;
}

export default SelectField;
