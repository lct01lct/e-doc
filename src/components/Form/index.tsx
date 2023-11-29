import { FC, FormEvent, PropsWithChildren } from 'react';
import { EDocFormItem } from './FormItem';

export interface EDocFormProps {
  title?: string;
  onFinish?: (value: any) => void;
}

type CompoundedComponent = FC<PropsWithChildren<EDocFormProps>> & {
  Item: typeof EDocFormItem;
};

export const EDocForm: CompoundedComponent = ({ title, children, onFinish }) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data: Record<string, string> = {};

    formData.forEach((value, key) => {
      data[key] = value as string;
    });

    onFinish?.(data);
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        {title && <h1 className="text-2xl font-bold sm:text-3xl">{title}</h1>}
      </div>

      <form className="mx-auto mb-0 mt-8 max-w-md space-y-4" onSubmit={handleSubmit}>
        {children}
      </form>
    </div>
  );
};

EDocForm.Item = EDocFormItem;
