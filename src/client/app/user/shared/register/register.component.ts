/**
 * Created by wQ on 2017/4/19.
 */
import { Component ,OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import {Http} from '@angular/http';
import {FormGroup} from "@angular/forms";
import {Router} from '@angular/router';

import {RegisterService} from '../../../core/services/register.service';
import {UserService} from '../../../core/services/user.service';
import {FieldBase} from '../field/field-base';

import { Response } from '@angular/http';

@Component({
  moduleId:module.id,
  selector:'register',
  templateUrl:'register.component.html',
  styleUrls:['register.component.css']
})
export class RegisterComponent implements OnInit{
  form:FormGroup;
  registered=false;
  fields:FieldBase<any>[]=[];
  alert:any={msg:'注册成功',type:'success',closable:true};
  username:string;
  password:string;

  constructor(private rs:RegisterService,
              private router:Router,
              private us:UserService,
              private http:Http){
    this.fields=rs.getFields();
  }
  //组件初始化
  ngOnInit(){
    this.form=this.rs.toFormGroup(this.fields);
  }
  showPassword(){
    this.fields.forEach((field:any)=>{
      if(field.key === 'password'){
        field.type=field.type === 'password' ? 'text' : 'password';
      }
    });
  }
  //表单重置
  resetForm(){
    this.form.reset();
  }

  register(){
    // this.http.post('/api/user/add',{
    //   username:this.username,
    //   password:this.password
    // });
    //提交注册信息  subscribe()方法的第二个参数来处理错误信息
    this.rs.addUser(this.form.value).subscribe((res:Response) => {
      //json()方法把服务器返回的数据转换成JSON对象
      let body=res.json();
      this.registered=true;
      new Observable((observer:Observer<any>)=>{
        this.alert.msg=body.message || '注册成功';
        this.alert.type=body.success?'success':'danger';
        this.registered=true;
        observer.next(true);
      }).subscribe(data => {  //操作提示，2秒后跳转到首页
        if(body.success){
          this.us.isLogin=true;
          this.router.navigate(['']); //跳到首页
          this.us.userInfo = { username: this.form.value.username,createDate:new Date().toLocaleString()}  // 缓存用户信息，显示在导航栏上
        }
        this.registered=false;
      });
    },error=>{
      console.error(error);
    });
  }
}
