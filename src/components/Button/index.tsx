import { FC, MouseEventHandler, PropsWithChildren } from 'react';
import { Size } from '../types';

export interface EDocButtonProps {
  size?: Size;
  themeColor?: 'black' | 'white' | 'purple';
  type?: 'submit' | 'button';
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const EDocButton: FC<PropsWithChildren<EDocButtonProps>> = ({
  children,
  themeColor = 'black',
  type = 'button',
  onClick,
}) => {
  const classNameList: Record<NonNullable<EDocButtonProps['themeColor']>, string> = {
    white: 'bg-white text-slate-900 border-slate-900 hover:bg-slate-100',
    black: 'bg-slate-900 text-white hover:bg-slate-700 ',
    purple: ' bg-purple-200 text-purple-500 hover:bg-purple-300 border-purple-300',
  };

  const handleClick: MouseEventHandler<HTMLButtonElement> = e => {
    e.stopPropagation();
    if (type !== 'submit') e.preventDefault();
    onClick?.(e);
  };

  return (
    <button
      onClick={handleClick}
      type={type}
      className={
        classNameList[themeColor] +
        ` focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400 border-2`
      }
    >
      {children}
    </button>
  );
};
