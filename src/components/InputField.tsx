import { InputHTMLAttributes } from 'react';
import Input from '@/components/Input';
import Label from '@/components/Label';

interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  errorMessage: string;
  isRequired?: boolean;
}

const InputField = ({
  label,
  name,
  type,
  placeholder,
  errorMessage,
  isRequired,
  ...rest
}: InputFieldProps & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className='input-field relative'>
      <Label htmlFor={name}>{label}</Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        errorMessage={errorMessage}
        isRequired={isRequired}
        {...rest}
      />
    </div>
  );
};

export default InputField;
