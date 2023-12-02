import {
  PropsWithChildren,
  FC,
  memo,
  useContext,
  useEffect,
  createContext,
  useMemo,
  useState,
} from 'react';
import { FormCtx } from '.';
import { Entity } from './FormStore';

export interface EDocFormItem {
  label?: string;
  required?: string;
  className?: string;
  name?: string;
  rules?: { rule: (val: string) => boolean | Promise<boolean>; message: string }[];
}

export interface IFormItemCtx {
  status: boolean;
  setFieldValue: (val: any) => void;
}

export const FormItemCtx = createContext<IFormItemCtx>({} as IFormItemCtx);

export const EDocFormItem: FC<PropsWithChildren<EDocFormItem>> = memo(
  ({ children, label, required, name, rules, className }) => {
    const ctx = useContext(FormCtx);
    const [status, setStatus] = useState(true);
    const [message, setMessage] = useState<string | undefined>(void 0);
    const formItemCtx = useMemo(() => {
      return {
        status: status,
        setFieldValue: (value: any) => {
          if (name) {
            ctx.setFieldValue(name, value);
          }
        },
      };
    }, [ctx, name, status]);

    useEffect(() => {
      if (name) {
        const entity: Entity = {
          name,
          value: void 0,
        };

        const _rules = rules || [];
        if (required)
          _rules.unshift({
            rule: val => !!val,
            message: required,
          });

        if (_rules.length) {
          entity.validator = async () => {
            // eslint-disable-next-line no-async-promise-executor
            return new Promise(async (resolve, reject) => {
              const value = ctx.getFieldValue(name);
              let isPauseValidate = false;

              const resList = await Promise.all(
                _rules.map(async item => {
                  const isPass = !!(value && (await item.rule(value)));
                  if (!isPass && !isPauseValidate) {
                    isPauseValidate = true;
                    setStatus(false);
                    setMessage(item.message);
                    reject({
                      status: false,
                      reason: {
                        field: name,
                        ...item,
                      },
                    });
                    formItemCtx.status = false;
                  }

                  return isPass;
                })
              );

              if (!resList.includes(false)) {
                setStatus(true);
                setMessage(void 0);
                resolve({ status: true, data: value });
              }
            });
          };
        }

        ctx.registerField(name, entity);
      }
    }, [ctx, formItemCtx, name, required, rules, status]);

    return (
      <div>
        {required && <span className="absolute text-red-600">*</span>}
        <label className="block text-gray-700 font-bold text-base pl-2">{label}</label>
        <div className={'relative pt-1 ' + className}>
          <FormItemCtx.Provider value={formItemCtx}>{children}</FormItemCtx.Provider>
        </div>
        <div className="error text-red-600 text-xs pl-2 h-4">{!status && message}</div>
      </div>
    );
  }
);
