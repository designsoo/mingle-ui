import { useState } from 'react';
import { SVGS } from '@/constants';
import useTogglePopup from '@/hooks/useTogglePopup';

const {
  arrow: {
    down: { url, alt },
  },
} = SVGS;

type DropdownSize = 'md' | 'sm';

type SelectList<T> = {
  id: T;
  value: string;
};

interface DropdownProps<T> {
  selectList: SelectList<T>[];
  onClick: (id: T) => void;
  size?: DropdownSize;
}

const DropdownTheme: Record<DropdownSize, string> = {
  md: 'h-11 px-4',
  sm: 'h-9 px-3',
};

const Dropdown = <T,>({
  selectList,
  onClick,
  size = 'md',
}: DropdownProps<T>) => {
  const [selectedItem, setSeletedItem] = useState(selectList[0]?.value);
  const { isOpen, popupRef, buttonRef, togglePopup, setIsOpen } =
    useTogglePopup();

  const handleSelectItemClick = (id: T, value: string) => {
    setSeletedItem(value);
    onClick(id);
    setIsOpen(false);
  };

  return (
    <div className='flex w-full flex-col gap-2'>
      <div
        className={`base-transition flex items-center justify-between rounded-lg border border-neutral-700 bg-neutral-950 hover:border-neutral-200 focus:border-yellow-300 ${DropdownTheme[size]} ${isOpen && 'border-yellow-300 hover:border-yellow-300'}`}
      >
        <span className='min-w-16 grow text-base-14 text-neutral-200'>
          {selectedItem}
        </span>

        <button className='pl-3' type='button' ref={buttonRef}>
          <img
            src={url}
            alt={alt}
            width={16}
            onClick={togglePopup}
            className={`base-transition transform ${isOpen ? 'rotate-180' : '-rotate-0'}`}
          />
        </button>
      </div>
      {isOpen && (
        <div ref={popupRef}>
          <ul className='dropdown-shadow flex w-full flex-col rounded-lg border border-neutral-700 bg-neutral-950 p-1 *:text-base-14 *:text-neutral-500'>
            {selectList.map((item) => (
              <li key={`dropdown-key-${item.id}`}>
                <button
                  type='button'
                  className='base-transition h-9 w-full rounded-md px-2 py-[6px] text-start hover:text-neutral-200 hover:color-background-opacity-white-5'
                  onClick={() => handleSelectItemClick(item.id, item.value)}
                >
                  {item.value}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
