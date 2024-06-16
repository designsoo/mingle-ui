import { InputHTMLAttributes } from 'react';
import Input from '@/components/Input';
import Label from '@/components/Label';
import { FieldValues, UseFormReturn } from 'react-hook-form';

interface CustomInputProps {
  label: string;
  name: string;
  type: string;
  formMethod: UseFormReturn<FieldValues>;
  placeholder: string;
  errorMessage?: string;
  isRequired?: boolean;
}

type InputFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  keyof CustomInputProps
> &
  CustomInputProps;

const InputField = ({
  label,
  name,
  type,
  formMethod,
  placeholder,
  errorMessage,
  isRequired,
  ...rest
}: InputFieldProps) => {
  return (
    <div className='input-field relative'>
      <Label htmlFor={name}>{label}</Label>
      <Input
        name={name}
        type={type}
        formMethod={formMethod}
        placeholder={placeholder}
        errorMessage={errorMessage}
        isRequired={isRequired}
        {...rest}
      />
    </div>
  );
};

export default InputField;
