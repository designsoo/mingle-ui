import { InputHTMLAttributes, useState } from 'react';
import { PASSWORD_SHOW_MODE } from '@/constants';
import { useFormContext } from 'react-hook-form';
import ErrorMessage from '@/components/ErrorMessage';

interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  errorMessage?: string;
  isRequired?: boolean;
}

const Input = ({
  name,
  type,
  placeholder,
  errorMessage = '',
  isRequired = false,
  ...rest
}: InputProps & InputHTMLAttributes<HTMLInputElement>) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [isFocused, setIsFocused] = useState(false);
  const borderColor = isFocused ? 'border-yellow-300' : 'border-neutral-700';

  const [passwordShowMode, setPasswordShowMode] = useState(false);
  const { iconEye, showMode, inputType } = passwordShowMode
    ? PASSWORD_SHOW_MODE.on
    : PASSWORD_SHOW_MODE.off;

  const onEyeButtonClick = () => setPasswordShowMode((prev) => !prev);
  const onInputFocus = () => setIsFocused(true);
  const onInputBlur = () => setIsFocused(false);

  return (
    <>
      <div
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        className={`base-transition flex h-11 w-full items-center justify-between rounded-lg border px-4 ${borderColor}`}
      >
        <input
          className='h-full w-full bg-transparent text-base-16 text-neutral-200 outline-none placeholder:text-neutral-700'
          {...register(name, { required: isRequired && errorMessage })}
          id={name}
          type={type === 'password' ? inputType : type}
          placeholder={placeholder}
          {...rest}
        />
        {type === 'password' && (
          <button
            type='button'
            role='switch'
            aria-label={showMode}
            aria-checked={passwordShowMode}
            onClick={onEyeButtonClick}
            className='pl-3'
          >
            <img src={iconEye} alt={showMode} />
          </button>
        )}
      </div>

      {isRequired && errors[name] && (
        <ErrorMessage>{errorMessage}</ErrorMessage>
      )}
    </>
  );
};

export default Input;
