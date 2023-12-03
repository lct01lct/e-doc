import { Rule } from './FormItem';

export interface Entity {
  name: string;
  value: any;
  validator?: <Data>() => Promise<ValidatorSucceededResult<Data> | ValidatorFailedResult>;
}

export interface ValidatorSucceededResult<Data> {
  status: true;
  data: Data;
}

export interface ValidatorFailedResult {
  status: false;
  reason: Reason;
}

export interface Reason {
  field: string;
  rule: Rule;
}

export class FormStore {
  private store: Record<string, Entity> = {};
  private fields: string[] = [];

  registerField(field: string, entity: Entity) {
    this.fields.push(field);
    this.store[field] = entity;
  }

  getFieldValue(field: string) {
    return this.store[field].value;
  }

  setFieldValue(field: string, val: string) {
    this.store[field].value = val;
  }

  getAllFieldAndValue() {
    return this.fields.reduce((prev, field) => {
      return (prev[field] = this.getFieldValue(field)), prev;
    }, {} as Record<string, any>);
  }

  async onSubmit() {
    return new Promise(async (resolve, reject) => {
      let isAllPass = true;
      const reasonList: Reason[] = [];

      await Promise.all(
        this.fields.map(async field => {
          await this.store[field].validator?.().then(null, (result?: ValidatorFailedResult) => {
            if (result?.status === false) {
              isAllPass = false;
              reasonList.push(result.reason);
            }
          });
        })
      );

      if (isAllPass) {
        resolve(this.getAllFieldAndValue());
      } else {
        reject(reasonList);
      }
    });
  }
}
