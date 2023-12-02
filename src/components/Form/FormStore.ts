export interface Entity {
  name: string;
  value: any;
  validator?: () => Promise<
    | {
        status: true;
        data: any;
      }
    | {
        status: false;
        reason: {
          field: string;
          rule: { rule: (val: string) => boolean; message: string };
        };
      }
  >;
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
    return new Promise((resolve, reject) => {
      this.fields.forEach(field => {
        this.store[field]
          .validator?.()
          .then(null, result => {
            if (result) {
              if (result.status === false) {
                reject(result);
              }
            }
          })
          .finally(() => {
            resolve(this.getAllFieldAndValue());
          });
      });
    });
  }
}
