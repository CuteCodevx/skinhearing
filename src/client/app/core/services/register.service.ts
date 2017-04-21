/**
 * Created by wQ on 2017/4/20.
 */
import {Injectable} from '@angular/core';
import {Http,Headers,RequestOptions,Response} from '@angular/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {SITE_HOST_URL} from '../../shared/index';
import {FieldBase} from '../../user/shared/field/field-base';
import {FieldValidators} from '../../user/shared/field/field-validators';
import {FieldText} from '../../user/shared/field/field.text';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class RegisterService{
  private registerUrl=`${SITE_HOST_URL}user/add`;
  constructor(private http:Http){ }
  //添加注册需要的内容
  getFields(){
    let fields: FieldBase<any>[] = [
      new FieldText({
        key: 'username',
        label: '用户名',
        value: '',
        required: true,
        pattern: 'username',
        order: 1
      }),
      new FieldText({
        key: 'password',
        label: '密码',
        type: 'password',
        value: '',
        required: true,
        pattern: 'password',
        order: 2
      }),
    ];
    return fields.sort((a, b) => a.order - b.order);
  }
  toFormGroup(fields:FieldBase<any>[]){
    let group: any = {};

    fields.forEach(field => {
      group[field.key] =
        field.pattern ?
          new FormControl(field.value || '', (<any>FieldValidators)[field.pattern]) :
          field.required ?
            new FormControl(field.value || '', Validators.required) :
            new FormControl(field.value || '');
    });
    return new FormGroup(group);
  }
  addUser(data : Object):Observable<Object>{
    let body = JSON.stringify(data);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(SITE_HOST_URL + 'user/add', body, { headers });
  }
}
