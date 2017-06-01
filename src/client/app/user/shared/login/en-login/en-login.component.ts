/**
 * Created by wQ on 2017/6/1.
 */
/**
 * Created by wQ on 2017/4/20.
 */
import {Component,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Response } from '@angular/http';

import { FieldBase } from '../../field/field-base';
import { LoginService } from '../../../../core/services/login.service';
import { UserService } from '../../../../core/services/user.service';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Component({
  moduleId: module.id,
  selector: 'en-login',
  templateUrl: 'en-login.component.html',
  styleUrls: ['../login.component.css']
})
export class EnLoginComponent implements OnInit{
  form:FormGroup;
  fields:FieldBase<any>[]=[];
  registered=false;
  returnUrl:string='';
  alert:any={msg:'登录成功',type:'success',closable:true,src:'success.png'};
  constructor(private us:UserService,
              private router:Router,
              private activeRoute: ActivatedRoute,
              private ls:LoginService){
    this.fields = ls.getFields();
    this.activeRoute.queryParams.subscribe(params => {
      this.returnUrl = params['returnUrl'];
    });
  }
  ngOnInit(){
    this.form=this.ls.toFormGroup(this.fields);
    document.querySelector('section').style.height=document.documentElement.clientHeight+'px';
  }
  login(){
    this.ls.login(this.form.value).subscribe((res:Response)=>{
      let body=res.json();
      this.registered=true;
      new Observable((observer:Observer<any>)=>{
        this.alert.msg= body.message || '您已成功登录';
        this.alert.type=body.success ? "success" : "danger";
        this.alert.src=body.success ? "success.png" : "fail.png";
        this.registered=true;
        observer.next(true);
      }).subscribe(data => {  //操作提示，1.5秒后跳转到首页 有.subscribe()函数，bosy.seccess,this.alert.type,this.alert.mag值正确，没有的话会出错(注册过的用户名还会注册成功)
        var This=this;
        setTimeout(function () {
          if(body&&body.success){
            This.us.isLogin=true;
            This.us.userInfo={username:This.form.value.username,createDate:new Date().toLocaleDateString()};
            This.router.navigateByUrl(This.returnUrl ? This.returnUrl:'/');
          }
          This.registered=false;
        },1500);

      });

    },error=>{
      console.error(error);
    });

  }
}
