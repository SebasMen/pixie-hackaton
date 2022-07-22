import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';

export const TextField = ({
  label,
  placeholder,
  className,
  fieldClassName,
  border,
  labelClassName,
  name,
  value,
  pattern,
  handler,
  messageError,
  showMessageError = false,
  type = 'text',
  disabled = false,
  required = false,
}: TextFieldProps) => (
  <div className={`${className} flex flex-col`}>
    {label && <label className={`${labelClassName ? labelClassName : 'pl-6 mb-3 text-lg font-medium'}`}>{label}</label>}
    <input
      className={`${fieldClassName} px-4 p-2
       focus:ring-1 focus:outline-none
       ${border ? border : 'outline-none rounded-full ring-0 transform transition-all border-0 ring-primary'}
       `}
      placeholder={placeholder}
      pattern={pattern}
      type={type}
      required={required}
      name={name}
      value={value}
      onChange={handler}
      disabled={disabled}
    />
    {showMessageError && <p className='text-primary lg:pl-2'>{messageError}</p>}
  </div>
);

interface TextFieldProps {
  name: string;
  value: string | number;
  type?: HTMLInputTypeAttribute;
  className?: string;
  fieldClassName?: string;
  labelClassName?:string;
  border?: string,
  label?: string;
  disabled?: boolean;
  required?: boolean;
  pattern?: string;
  placeholder?: string;
  handler: ChangeEventHandler<HTMLInputElement>;
  messageError?: string;
  showMessageError?: boolean;
}

export default TextField;
