/**
 * Created by wQ on 2017/4/17.
 */
import { Component,OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sd-userecord',
  templateUrl: 'userecord.component.html',
  styleUrls: ['userecord.component.css']
})
export class UserecordComponent implements OnInit{
  ngOnInit(){
    let divs=document.querySelectorAll('.imgwraped div');
    let imgs=document.querySelectorAll('.imgWrap img');
    let divsarr=[],arr=[];
    for(let i=0;i<divs.length;i++) {
      if (i % 2 == 0) {
        divsarr.push(divs[i]);
      } else {
        arr.push(divs[i]);
      }
    }

    divsarr=divsarr.concat(arr);
    for(let i =0;i<divsarr.length;i++){
      divsarr[i].style.animation='showimgWrap 1s ease-out 0.'+i+'s';
      divsarr[i].addEventListener('animationend',function () {
        divsarr[i].style.transform = 'rotateX(0deg)';
        divsarr[i].style.opacity = '1';
      })
    };


  }
}
