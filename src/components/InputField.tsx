import { InputHTMLAttributes } from 'react';
import Input from '@/components/Input';
import Label from '@/components/Label';
import { FieldValues, Path, UseFormReturn } from 'react-hook-form';

interface CustomInputProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  type: string;
  formMethod: UseFormReturn<T>;
  placeholder: string;
  errorMessage?: string;
  isRequired?: boolean;
}

type InputFieldProps<T extends FieldValues> = Omit<InputHTMLAttributes<HTMLInputElement>, keyof CustomInputProps<T>> &
  CustomInputProps<T>;

const InputField = <T extends FieldValues>({
  label,
  name,
  type,
  placeholder,
  formMethod,
  errorMessage,
  isRequired,
  ...rest
}: InputFieldProps<T>) => {
  return (
    <div className='input-field relative'>
      <Label htmlFor={name as string}>{label}</Label>
      <Input
        formMethod={formMethod}
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
