import Select, { MultiValue, SingleValue, components as Comps } from 'react-select';

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
  messageError,
  paddingY,
  dropdownIndicatorColor,
  isMulti = false,
  disabled = false,
  colorText,
  isClearable = false,
  backgroundColor,
  colorPlaceholder,
  fontSize
}: SelectFieldProps) => (
  <div className={'w-full flex flex-col items-start ' + className}>
    {label && <h2 className='pl-6 mb-3 text-lg font-medium'>{label}</h2>}
    <Select
      placeholder={placeholder}
      components={{
        IndicatorSeparator: () => null,
        Input: ({ ...rest }) => <Comps.Input {...rest} autoComplete='nope' />,
      }}
      theme={old => ({
        ...old,
        colors: {
          ...old.colors,
          primary: dropdownIndicatorColor ? dropdownIndicatorColor : '#33B5A9',
          primary25: dropdownIndicatorColor ? dropdownIndicatorColor : '#33b5a9b0',
        },
      })}
      isMulti={isMulti}
      className='w-full'
      name={name}
      value={value}
      options={options}
      onChange={newValue => onChange(newValue, name)}
      isClearable={isClearable}
      isDisabled={disabled}
      styles={{
        dropdownIndicator: base => ({
          ...base,
          color: dropdownIndicatorColor ? dropdownIndicatorColor : '#DF2F44',
        }),
        control: base => ({
          ...base,
          minHeight: 40,
          border: border ? '' : 'none',
          borderRadius: borderRadius ? '9999px' : '',
          backgroundColor: backgroundColor ? backgroundColor : 'white',
          paddingLeft: '10px',
          paddingRight: '10px',
          paddingBottom: paddingY ? paddingY : '',
          paddingTop: paddingY ? paddingY : '',
        }),
        menu: base => ({
          ...base,
          borderRadius: '15px',
          overflow: 'hidden',
          color: colorText ? colorText : 'black',
        }),
        singleValue: base => ({
          ...base,
          color: colorText ? colorText : 'black',
        }),
        placeholder: base => ({
          ...base,
          color: colorPlaceholder ? colorPlaceholder : '#616161',
          fontSize: fontSize ? fontSize : '14px'
        })
      }}
    />
    {messageError && <p className='text-primary pl-2 text-xs lg:text-base'>{messageError}</p>}
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
  borderColor?: string;
  paddingY?: string;
  colorPlaceholder? : string;
  options: SelectItem[];
  onChange: (selected: MultiValue<SelectItem> | SingleValue<SelectItem>, name: string) => void;
  messageError?: string;
  dropdownIndicatorColor?: string;
  backgroundColor? : string;
  colorText?: string;
  isClearable?: boolean,
  fontSize? : string;
  disabled?: boolean
}

export interface SelectItem {
  label: string;
  value: string;
}

export default SelectField;
