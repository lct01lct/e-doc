import {
  FC,
  PropsWithChildren,
  ReactElement,
  ReactEventHandler,
  cloneElement,
  useRef,
} from 'react';

export interface EDocUploadProps {
  onChange?: (file: File) => void;
}

export const EDocUpload: FC<PropsWithChildren<EDocUploadProps>> = ({ children, onChange }) => {
  const wrappedChlldren = cloneElement(children as ReactElement, {
    onClick() {
      fileIptRef.current?.click();
    },
  });

  const fileIptRef = useRef<HTMLInputElement>(null);
  const handleChange: ReactEventHandler<HTMLInputElement> = e => {
    const fileIpt = e.target as HTMLInputElement;
    const file = fileIpt?.files?.[0];
    if (file) {
      onChange?.(file);
    }
  };

  return (
    <>
      {wrappedChlldren}
      <input type="file" className="hidden" ref={fileIptRef} onChange={handleChange} />
    </>
  );
};
