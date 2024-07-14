import { ReactNode } from 'react';

interface ErrorMessageProps {
  children: ReactNode;
}

const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return <p className='text-base-13 text-red-300'>{children}</p>;
};

export default ErrorMessage;
