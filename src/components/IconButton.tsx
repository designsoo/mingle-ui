import { SVGS } from '@/constants';
import React, { forwardRef, Ref } from 'react';

const {
  empty: { url, alt },
} = SVGS;

interface IconButtonProps {
  iconUrl: string;
  iconAlt: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  iconSize?: number;
  variant?: 'default' | 'stroke';
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      iconUrl,
      iconAlt,
      onClick,
      iconSize = 24,
      variant = 'default',
    }: IconButtonProps,
    ref: Ref<HTMLButtonElement>,
  ) => {
    const strokeTheme = variant === 'stroke' && 'button-stroke';

    return (
      <button
        ref={ref}
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
  },
);

export default IconButton;
