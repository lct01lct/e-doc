import { PropsWithChildren, FC, cloneElement, ReactElement } from 'react';

export interface EDocFormItem {
  label?: string;
  required?: boolean;
  name?: string;
  rules?: [];
}

export const EDocFormItem: FC<PropsWithChildren<EDocFormItem>> = ({
  children,
  label,
  required = false,
  name,
}) => {
  const wrapperChildren = cloneElement(children as ReactElement, {
    name,
  });

  return (
    <div>
      {required && <span className="absolute text-red-600">*</span>}
      <label className="block text-gray-700 font-bold text-base pl-2">{label}</label>
      <div className="relative pt-1">{wrapperChildren}</div>
    </div>
  );
};
