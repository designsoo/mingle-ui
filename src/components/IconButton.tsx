import { SVGS } from '@/constants';
const {
  empty: { url, alt },
} = SVGS;

interface IconButtonProps {
  iconAlt: string;
  iconUrl: string;
  variant: 'default' | 'stroke';
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const IconButton = ({
  onClick,
  iconAlt = '',
  iconUrl = '',
  variant = 'default',
}: IconButtonProps) => {
  const strokeTheme = variant === 'stroke' && 'button-stroke';

  return (
    <button
      onClick={onClick}
      className={`icon-button-base size-9 ${strokeTheme}`}
    >
      <img src={iconUrl || url} alt={iconAlt || alt} />
    </button>
  );
};

export default IconButton;
