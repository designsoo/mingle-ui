import { useState } from 'react';

type TabListSize = 'lg' | 'md' | 'sm';

type TabItem<T> = {
  id: T;
  value: string;
};

interface TabProps<T> {
  tabList: TabItem<T>[];
  onClick: (id: T) => void;
  size?: TabListSize;
}

const TabListSize: Record<TabListSize, string> = {
  lg: 'h-[52px] *:px-4 *:min-w-[110px]',
  md: 'h-[48px] *:px-4 *:min-w-[90px]',
  sm: 'h-[44px] *:min-w-[40px]',
};

const TabList = <T,>({ tabList, onClick, size = 'md' }: TabProps<T>) => {
  const [isActive, setIsActive] = useState(tabList[0]?.id);

  const isActivated = (id: T) => id === isActive;

  const handleTabItemClick = (id: T) => {
    setIsActive(id);
    onClick(id);
  };

  return (
    <ul className={`flex ${size === 'sm' && 'gap-8'}`}>
      {tabList.map((tab) => (
        <li key={`tab-${tab.id}`}>
          <button
            type='button'
            className={`flex items-center text-base-16 text-neutral-500 ${TabListSize[size]} ${isActivated(tab.id) && 'relative text-bold-16 *:text-yellow-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-yellow-300 after:content-[attr(before)]'}`}
            onClick={() => handleTabItemClick(tab.id)}
          >
            <span className='inline-block'>{tab.value}</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TabList;
