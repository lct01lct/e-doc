import { FC, FormEvent, PropsWithChildren, createContext, memo } from 'react';
import { EDocFormItem } from './FormItem';
import { FormStore } from './FormStore';

export interface EDocFormProps {
  title?: string;
  onFinish?: (value: any) => void;
  onFailed?: (reason: any) => void;
}

type CompoundedComponent = FC<PropsWithChildren<EDocFormProps>> & {
  Item: typeof EDocFormItem;
};

// eslint-disable-next-line react-refresh/only-export-components
export const FormCtx = createContext<FormStore>({} as FormStore);

const InternalForm: FC<PropsWithChildren<EDocFormProps>> = memo(
  ({ title, children, onFinish, onFailed }) => {
    const formStore = new FormStore();

    const handleSubmit = (e: FormEvent) => {
      e.stopPropagation();
      e.preventDefault();
      formStore.onSubmit().then(
        value => {
          onFinish?.(value);
        },
        reason => {
          onFailed?.(reason);
        }
      );
    };

    return (
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          {title && <h1 className="text-2xl font-bold sm:text-3xl">{title}</h1>}
        </div>

        <form className="mx-auto mb-0 mt-8 max-w-md" onSubmit={handleSubmit}>
          <FormCtx.Provider value={formStore}>{children}</FormCtx.Provider>
        </form>
      </div>
    );
  }
);

export const EDocForm = InternalForm as CompoundedComponent;

EDocForm.Item = EDocFormItem;
