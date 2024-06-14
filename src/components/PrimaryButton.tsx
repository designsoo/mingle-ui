type ButtonTheme = 'primary' | 'secondary' | 'stroke';
type ButtonSize = 'sm' | 'md' | 'lg';

interface PrimaryButtonProps {
  children: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  size: ButtonSize;
  variant: ButtonTheme;
  disabled: boolean;
}

const primary = 'button-fill-primary';
const secondary = 'button-fill-secondary';
const stroke = 'button-stroke';

const buttonTheme: Record<ButtonTheme, string> = {
  primary,
  secondary,
  stroke,
};

const sm = 'h-9 px-2';
const md = 'h-11 px-3';
const lg = 'h-12 w-full text-bold-16';

const buttonSize: Record<ButtonSize, string> = {
  sm,
  md,
  lg,
};

const PrimaryButton = ({
  children,
  onClick,
  size = 'lg',
  variant = 'primary',
  disabled = false,
}: PrimaryButtonProps) => {
  return (
    <button
      className={`button-base text-bold-14 ${buttonSize[size]} ${buttonTheme[variant]} button-disabled`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className='min-w-16'>{children}</span>
    </button>
  );
};

export default PrimaryButton;
