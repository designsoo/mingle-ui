type ButtonTheme = 'primary' | 'secondary' | 'stroke' | 'destructive';
type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonType = 'button' | 'reset' | 'submit';

interface PrimaryButtonProps {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: ButtonType;
  size?: ButtonSize;
  variant?: ButtonTheme;
  disabled?: boolean;
}

const buttonTheme: Record<ButtonTheme, string> = {
  primary: 'button-fill-primary',
  secondary: 'button-fill-secondary',
  stroke: 'button-stroke',
  destructive: 'button-fill-destructive',
};

const buttonSize: Record<ButtonSize, string> = {
  sm: 'h-9 px-2',
  md: 'h-11 px-3',
  lg: 'h-12 w-full text-bold-16',
};

const PrimaryButton = ({
  children,
  onClick,
  type = 'button',
  size = 'md',
  variant = 'primary',
  disabled = false,
}: PrimaryButtonProps) => {
  return (
    <button
      type={type}
      className={`button-base text-bold-14 ${buttonSize[size]} ${buttonTheme[variant]} button-disabled`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className='min-w-16'>{children}</span>
    </button>
  );
};

export default PrimaryButton;
