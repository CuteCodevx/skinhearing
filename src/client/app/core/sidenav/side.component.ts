/**
 * Created by wQ on 2017/5/3.
 */
import { Component ,Input,AfterViewInit} from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../services/user.service';
/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-sidenav',
  templateUrl: 'side.component.html',
  styleUrls: ['side.component.css'],
})
export class SidenavComponent {
  items:Array<any>=[
    {
      title:'主页',
      address:'/'
    },
    {
      title:'图文',
      address:'/about/article0'
    },
    {
      title:'记录',
      address:'/userecord'
    },
    {
      title:'视频',
      address:'/video'
    }];

  constructor(){}
  ngAfterViewInit(){

  }
  movein(ele:any){
    let m=ele.toString();
    document.getElementById('sidenav'+m).style.right= -10+'px';
  }
  moveout(ele:any){
    let m=ele.toString();
    document.getElementById('sidenav'+m).style.right= 0+'px';
  }
}
