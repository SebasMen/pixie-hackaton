import Select, { MultiValue, SingleValue } from 'react-select';

export const SelectField = ({
  name,
  value,
  options,
  onChange,
  label,
  className = '',
  placeholder,
  border,
  borderRadius,
  borderColor,
  isMulti = false,
}: SelectFieldProps) => (
  <div className={'w-full flex flex-col items-start ' + className}>
    {label && <h2 className='pl-6 mb-3 text-lg font-medium'>{label}</h2>}
    <Select
      placeholder={placeholder}
      components={{ IndicatorSeparator: () => null }}
      theme={old => ({
        ...old,
        colors: {
          ...old.colors,
          primary: '#DF2F44',
          primary25: '#df2f4422',
        },
      })}
      isMulti={isMulti}
      className='w-full'
      name={name}
      value={value}
      options={options}
      onChange={newValue => onChange(newValue, name)}
      styles={{
        dropdownIndicator: base => ({
          ...base,
          color: '#DF2F44',
        }),
        control: base => ({
          ...base,
          minHeight: 40,
          border: border ? '' : 'none',
          borderRadius: borderRadius ? '9999px' : '',
          paddingLeft: '10px',
          paddingRight: '10px',
        }),
        menu: base => ({
          ...base,
          borderRadius: '15px',
          overflow: 'hidden',
        }),
      }}
    />
  </div>
);

interface SelectFieldProps {
  name: string;
  isMulti?: boolean;
  label?: string;
  className?: string;
  placeholder?: string;
  value?: SelectItem | SelectItem[];
  border?: boolean;
  borderRadius?: boolean;
  borderColor? : string;
  options: SelectItem[];
  onChange: (selected: MultiValue<SelectItem> | SingleValue<SelectItem>, name: string) => void;
}

export interface SelectItem {
  label: string;
  value?: string;
}

export default SelectField;
