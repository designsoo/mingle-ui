import { InputHTMLAttributes, useState } from 'react';
import { PASSWORD_SHOW_MODE } from '@/constants';
import ErrorMessage from '@/components/ErrorMessage';
import { FieldValues, Path, UseFormReturn } from 'react-hook-form';

interface CustomInputProps<T extends FieldValues> {
  name: Path<T>;
  type: string;
  formMethod: UseFormReturn<T>;
  placeholder: string;
  errorMessage?: string;
  isRequired?: boolean;
}

type InputProps<T extends FieldValues> = Omit<InputHTMLAttributes<HTMLInputElement>, keyof CustomInputProps<T>> &
  CustomInputProps<T>;

const Input = <T extends FieldValues>({
  name,
  type,
  placeholder,
  formMethod,
  errorMessage = '',
  isRequired = false,
  ...rest
}: InputProps<T>) => {
  const {
    register,
    formState: { errors },
  } = formMethod;

  const [isFocused, setIsFocused] = useState(false);
  const borderColor = isFocused ? 'border-yellow-300' : 'border-neutral-700';

  const [passwordShowMode, setPasswordShowMode] = useState(false);
  const { iconEye, showMode, inputType } = passwordShowMode ? PASSWORD_SHOW_MODE.on : PASSWORD_SHOW_MODE.off;

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
          className='h-full w-full bg-transparent pr-3 text-base-16 text-neutral-200 outline-none placeholder:text-neutral-700'
          {...register(name, { required: isRequired && errorMessage })}
          id={name as string}
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
            className='flex size-6 shrink-0 items-center justify-center'
          >
            <img src={iconEye} alt={showMode} width={20} height={20} />
          </button>
        )}
      </div>

      {isRequired && errors[name] && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </>
  );
};

export default Input;
