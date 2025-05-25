import React from 'react';
import type { InputHTMLAttributes } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  name: string;
  type?: React.HTMLInputTypeAttribute; 
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  readOnly?: boolean;
  containerClassName?: string;
  inputClassName?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  readOnly = false,
  containerClassName = '',
  inputClassName = '',
  ...props
}) => {
  return (
    <div className={`mb-4 ${containerClassName}`}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        className={`mt-1 block w-full px-3 py-2 border ${
          error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
        } rounded-md shadow-sm sm:text-sm ${
          readOnly ? 'bg-gray-50 cursor-not-allowed' : 'bg-white'
        } ${inputClassName}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default InputField;