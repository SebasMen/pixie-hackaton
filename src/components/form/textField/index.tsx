import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';

import { TextFieldStyle } from './textFieldStyle';

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
  <div className={TextFieldStyle.concat(' ', className || '')}>
    {label && <label>{label}</label>}
    <input
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
