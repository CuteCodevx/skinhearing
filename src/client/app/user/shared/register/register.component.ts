/**
 * Created by wQ on 2017/4/19.
 */
import {Injectable} from '@angular/core';
import { Component ,OnInit} from '@angular/core';
import {Http} from '@angular/http';


@Component({
  moduleId:module.id,
  selector:'register',
  templateUrl:'register.component.html',
  styleUrls:['register.component.css']
})
export class RegisterComponent{
  username:string;
  password:string;
  constructor(private http:Http){

  }
  register(){
    //提交注册信息
    this.http.post('/api/user/add',{
      username:this.username,
      password:this.password
    })
  }
}
