import { FC, FormEventHandler, memo, useContext } from 'react';
import { FormItemCtx } from '../Form/FormItem';

export interface EDocInputProps {
  type?: 'email' | 'password' | 'text';
  placeholder?: string;
  name?: string;
  value?: string | number;
}

export const EDocInput: FC<EDocInputProps> = memo(({ type = 'text', placeholder, name, value }) => {
  const formItemCtx = useContext(FormItemCtx);

  const onInput: FormEventHandler<HTMLInputElement> = e => {
    formItemCtx.setFieldValue((e.target as HTMLInputElement)?.value);
  };

  return (
    <input
      type={type}
      name={name}
      className="w-full rounded-lg border-gray-200 border-2 p-4 pe-12 text-sm shadow-sm"
      placeholder={placeholder}
      value={value}
      onInput={onInput}
    />
  );
});
