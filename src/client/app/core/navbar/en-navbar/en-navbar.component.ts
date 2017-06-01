/**
 * Created by wQ on 2017/5/31.
 */
import { Component ,Input,OnInit,AfterViewInit} from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../../services/user.service';
// import {isEnlish} from '../changeLanguage';
/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'en-navbar',
  templateUrl: 'en-navbar.component.html',
  styleUrls: ['../navbar.component.css'],
})
export class EnNavbarComponent implements OnInit{

  star:Array<any>=[{img:'zuanshi1.png'},{img:'zuanshi2.png'},{img:'zuanshi5.png'},{img:'zuanshi3.png'},{img:'zuanshi4.png'},{img:'zuanshi6.png'}];

  constructor(
    private userService:UserService,
    private router:Router){

  }
  ngOnInit(){
    // this.stars=document.getElementById('stars');
  }
  ngAfterViewInit(){
    this.rsort();
  }
  //随机生成一个值
  random(range:Array<any>){
    var max=Math.max(range[0],range[1]);
    var min=Math.min(range[0],range[1]);
    var diff=max-min;
    var number=Math.floor(Math.random()*diff)+min;
    return number;
  }
  //计算范围，返回一个对象
  range(){
    var range:Object={
      x:[],
      y:[]
    }
    var starsize:Object={
      w:document.querySelector('nav').clientWidth,
      h:document.querySelector('nav').clientHeight
    }
    range.x=[350,starsize.w-50];
    range.y=[0,starsize.h-30];
    return range;
  }
  //随机排序
  rsort(){
    var _star=document.getElementsByClassName('stars');
    var stars=[];
    var ranges=this.range();
    for(var s=0;s<_star.length;s++){
      stars.push(_star[s]);
    }
    for(let i in stars){
      let star=stars[i];
      star.style.left=this.random(ranges.x)+'px';
      star.style.top=this.random(ranges.y)+'px';
      star.style.animation='starbling 10s linear '+i+'s infinite';
    }
  }

  logout() {
    this.userService.isLogin = false;
    this.userService.userInfo = null;
    this.router.navigate(['']);
  }
}
