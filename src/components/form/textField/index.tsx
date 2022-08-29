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
  type = 'text',
  disabled = false,
  required = false,
  handleKeyDown
}: TextFieldProps) => (
  <div className={`${className} flex flex-col`}>
    {label && <label className={`${labelClassName ? labelClassName : 'pl-6 mb-3 text-lg font-medium'}`}>{label}</label>}
    <input
      className={`${fieldClassName} px-4 p-2
       focus:ring-1 focus:outline-none
       ${border ? border : 'outline-none rounded-full ring-0 transform transition-all border-0 ring-pixieLightBlue'}
       `}
      placeholder={placeholder}
      pattern={pattern}
      type={type}
      required={required}
      name={name}
      value={value}
      onChange={handler}
      disabled={disabled}
      onKeyDown={handleKeyDown}
    />
    {messageError && <p className='text-primary pl-2 text-xs lg:text-base'>{messageError}</p>}
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
  handleKeyDown?: (e:any) => void
}

export default TextField;
