/**
 * Created by wQ on 2017/4/20.
 */
export class FieldBase<T>{
  value:T;
  key:string;
  label:string;
  icon:string;
  required:boolean;
  pattern:string;
  order:number;
  controlType:string;
  constructor(options: {
                value?: T,
                key?: string,
                label?: string,
                required?: boolean,
                icon?:string,
                pattern?: string,
                order?: number,
                controlType?: string
              } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.pattern = options.pattern || '';
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.icon=options.icon || '';
  }
}
