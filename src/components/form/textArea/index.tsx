import { ChangeEventHandler } from 'react';

export const TextArea = ({
  label,
  placeholder,
  className,
  fieldClassName,
  border,
  labelClassName,
  name,
  value,
  handler,
  disabled = false,
  required = false,
}: TextAreaProps) => (
  <div className={`${className} flex flex-col`}>
    {label && <label className={`${labelClassName ? labelClassName : 'pl-6 mb-3 text-lg font-medium'}`}>{label}</label>}
    <textarea
      className={`${fieldClassName} px-4 p-2
      focus:ring-1 focus:outline-none
      ${border ? border : 'outline-none rounded-full ring-0 transform transition-all border-0 ring-primary'}
      `}
      placeholder={placeholder}
      required={required}
      name={name}
      value={value}
      onChange={handler}
      disabled={disabled}
    />
  </div>
);

interface TextAreaProps {
  name: string;
  value: string | number;
  className?: string;
  fieldClassName?: string;
  labelClassName?:string;
  border? :string,
  label?: string;
  disabled?: boolean;
  required?: boolean;
  placeholder?: string;
  handler: ChangeEventHandler<HTMLTextAreaElement>;
}

export default TextArea;
