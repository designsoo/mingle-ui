import { SVGS } from '@/constants';
const {
  empty: { url, alt },
} = SVGS;

interface IconButtonProps {
  iconAlt: string;
  iconUrl: string;
  iconSize: number;
  variant?: 'default' | 'stroke';
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const IconButton = ({
  onClick,
  iconSize,
  iconAlt = '',
  iconUrl = '',
  variant = 'default',
}: IconButtonProps) => {
  const strokeTheme = variant === 'stroke' && 'button-stroke';

  return (
    <button
      type='button'
      onClick={onClick}
      className={`icon-button-base size-9 ${strokeTheme}`}
    >
      <img
        src={iconUrl || url}
        alt={iconAlt || alt}
        width={iconSize}
        height={iconSize}
      />
    </button>
  );
};

export default IconButton;
