/**
 * Created by wQ on 2017/4/20.
 */
import {Component,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Response } from '@angular/http';

import { FieldBase } from '../field/field-base';
import { LoginService } from '../../../core/services/login.service';
import { UserService } from '../../../core/services/user.service';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit{
  form:FormGroup;
  fields:FieldBase<any>[]=[];
  returnUrl:string='';
  constructor(private us:UserService,
              private route:Router,
              private activeRoute: ActivatedRoute,
              private ls:LoginService){
    this.fields = ls.getFields();
    this.activeRoute.queryParams.subscribe(params => {
      this.returnUrl = params['returnUrl'];
    });
  }
  ngOnInit(){
    this.form=this.ls.toFormGroup(this.fields);
  }
  login(){
    this.ls.login(this.form.value).subscribe((res:Response)=>{
      let body=res.json();
      if(body && body.success){
        this.us.isLogin=true;
        this.us.userInfo={username:this.form.value.username,createDate:new Date().toLocaleDateString()};
        this.route.navigateByUrl(this.returnUrl ? this.returnUrl:'/');
      }
    },error=>{
      console.log(error);
    });
  }
}
