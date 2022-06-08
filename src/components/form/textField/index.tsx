import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';

/// import { TextFieldStyle } from './textFieldStyle';

export const TextField = ({
  label,
  placeholder,
  className,
  name,
  value,
  pattern,
  handler,
  type = 'text',
  disabled = false,
  required = false,
}: TextFieldProps) => (
  <div className={`${className} flex flex-col`}>
    {label && <label>{label}</label>}
    <input
      className='outline-none rounded-full px-4 p-2 ring-0 ring-red-500 transform transition-all focus:ring-2 focus:outline-none'
      placeholder={placeholder}
      pattern={pattern}
      type={type}
      required={required}
      name={name}
      value={value}
      onChange={handler}
      disabled={disabled}
    />
  </div>
);

interface TextFieldProps {
  name: string;
  value: string | number;
  type?: HTMLInputTypeAttribute;
  className?: string;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  pattern?: string;
  placeholder?: string;
  handler: ChangeEventHandler<HTMLInputElement>;
}

export default TextField;
