import { FC, memo } from 'react';

export interface EDocInputProps {
  type?: 'email' | 'password' | 'text';
  placeholder?: string;
  name?: string;
}

export const EDocInput: FC<EDocInputProps> = memo(({ type = 'text', placeholder, name }) => {
  return (
    <input
      type={type}
      name={name}
      className="w-full rounded-lg border-gray-200 border-2 p-4 pe-12 text-sm shadow-sm"
      placeholder={placeholder}
    />
  );
});
