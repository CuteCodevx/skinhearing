/**
 * Created by wQ on 2017/5/31.
 */

import { Component,OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'en-userecord',
  templateUrl: 'en-userecord.component.html',
  styleUrls: ['../userecord.component.css']
})
export class EnUserecordComponent implements OnInit{
  ngOnInit(){
    let divs=document.querySelectorAll('.imgwraped div');
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
