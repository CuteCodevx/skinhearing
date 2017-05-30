/**
 * Created by wQ on 2017/4/18.
 */
import { Component,OnInit } from '@angular/core';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-product',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.css']
})
export class ProductComponent implements OnInit{
  ngOnInit(){
    var topbox=document.getElementById('topbox');
    topbox.style.animation='topmove 1s linear';
    var boxs=document.getElementsByClassName('everybox');
    // console.log(boxs);
    var leftbox=[];
    var rightbox=[];
    for(var i=0;i<boxs.length;i++){
      if(i < boxs.length/2){
        leftbox.push(boxs[i]);
      }else{
        rightbox.push(boxs[i]);
      }
    }
    for(let i=0;i<leftbox.length;i++){
      let left=leftbox[i];
      let right=rightbox[i];
      left.style.animation='lefttocenter 1s linear '+i/2+'s';
      left.addEventListener('animationend',function () {
        left.style.left=0+'px';
        left.style.opacity='1';
      })
      right.style.animation='righttocenter 1s linear '+i/2+'s';
      right.addEventListener('animationend',function () {
        right.style.right=0;
        right.style.opacity='1';
      })
    }

    var arr=[];
    var leftarr=[];
    var rightarr=[];
    var comparebox=document.getElementsByClassName('compare');
    for(let i=0;i<comparebox.length;i++){
      let ps=comparebox[i].querySelectorAll('p')
      arr.push(ps);
    }
    for(let i=0;i<arr.length;i++){
      let l=arr[i].length;
      for(let j=0;j<l;j++){
        if(j<l/2){
          leftarr.push(arr[i][j]);
        }else{
          rightarr.push(arr[i][j]);
        }
      }
    }
    //leftarr  左边的5 6 5 ,rightarr 右边的5 6 5
    // var ps=comparebox[0].querySelectorAll('p');
    // var leftp=[];
    // var rightp=[];
    // for(let i=0;i<ps.length;i++){
    //   if(i<ps.length/2){
    //     leftp.push(ps[i]);
    //   }else{
    //     rightp.push(ps[i]);
    //   }
    // }
    var leftfirst=leftarr.splice(0,5);
    var leftsec=leftarr.splice(0,6);
    var leftthi=leftarr.splice(0,5);
    var rightfirst=rightarr.splice(0,5);
    var rightsec=rightarr.splice(0,6);
    var rightthi=rightarr.splice(0,5);

    document.onmousewheel=function () {
        if(document.body.scrollTop>500){
          for(let i=0;i<leftfirst.length;i++){
            let left=leftfirst[i];
            let right=rightfirst[i];
          left.style.animation='lefttocenter 1s linear '+i/2+'s';
          left.addEventListener('animationend',function () {
            left.style.left=0;
            left.style.opacity=1;
          });
          right.style.animation='righttocenter 1s linear '+i/2+'s';
          right.addEventListener('animationend',function () {
            right.style.right=0;
            right.style.opacity=1;
          });
          }
          // console.log(1);
        }
        if(document.body.scrollTop>1000){
          for(let i=0;i<leftsec.length;i++){
            let left=leftsec[i];
            let right=rightsec[i];
            left.style.animation='lefttocenter 1s linear '+i/2+'s';
            left.addEventListener('animationend',function () {
              left.style.left=0;
              left.style.opacity=1;
            });
            right.style.animation='righttocenter 1s linear '+i/2+'s';
            right.addEventListener('animationend',function () {
              right.style.right=0;
              right.style.opacity=1;
            });
            // console.log('2');
          }
        }
        if(document.body.scrollTop>1800) {
          for (let i = 0; i < leftthi.length; i++) {
            let left = leftthi[i];
            let right = rightthi[i];
            left.style.animation = 'lefttocenter 1s linear ' + i / 2 + 's';
            left.addEventListener('animationend', function () {
              left.style.left = 0;
              left.style.opacity = 1;
            });
            right.style.animation = 'righttocenter 1s linear ' + i / 2 + 's';
            right.addEventListener('animationend', function () {
              right.style.right = 0;
              right.style.opacity = 1;
            });
          }
          // console.log('3');
        }
    }

  }

}

