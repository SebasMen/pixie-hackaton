import { ChangeEventHandler } from 'react';

export const TextArea = ({
  label,
  placeholder,
  className,
  fieldClassName,
  name,
  value,
  handler,
  disabled = false,
  required = false,
}: TextAreaProps) => (
  <div className={`${className} flex flex-col`}>
    {label && <label className='pl-6 mb-3 text-lg font-medium'>{label}</label>}
    <textarea
      className={`${fieldClassName} outline-none rounded-full px-4 p-2 ring-0 transform transition-all border-0 ring-primary focus:ring-1 focus:outline-none`}
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
  label?: string;
  disabled?: boolean;
  required?: boolean;
  placeholder?: string;
  handler: ChangeEventHandler<HTMLTextAreaElement>;
}

export default TextArea;
