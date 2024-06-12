import Input from './Input';
import ErrorMessage from './ErrorMessage';

interface InputFieldProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  errorMessage: string;
  isError: boolean;
}

const InputField = ({
  id,
  name,
  type,
  placeholder,
  errorMessage,
  isError = false,
}: InputFieldProps) => {
  return (
    <div className='input-field relative'>
      <Input id={id} name={name} type={type} placeholder={placeholder} />
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};

export default InputField;
