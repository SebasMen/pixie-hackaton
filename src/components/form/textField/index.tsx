import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';

export const TextField = ({
  label,
  placeholder,
  className,
  fieldClassName,
  name,
  value,
  pattern,
  handler,
  type = 'text',
  disabled = false,
  required = false,
}: TextFieldProps) => (
  <div className={`${className} flex flex-col`}>
    {label && <label className='pl-6 mb-3 text-lg font-medium'>{label}</label>}
    <input
      className={`${fieldClassName} outline-none rounded-full px-4 p-2 ring-0 transform transition-all border-0 ring-primary focus:ring-1 focus:outline-none`}
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
  fieldClassName?: string;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  pattern?: string;
  placeholder?: string;
  handler: ChangeEventHandler<HTMLInputElement>;
}

export default TextField;
