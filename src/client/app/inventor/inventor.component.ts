/**
 * Created by wQ on 2017/4/18.
 */
import { Component,OnInit } from '@angular/core';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-inventor',
  templateUrl: 'inventor.component.html',
  styleUrls: ['inventor.component.css']
})
export class InventorComponent implements OnInit{
  ngOnInit(){
    // console.log(document.documentElement.scrollTop);
    var mCenter=document.querySelector(".mCenter");
    mCenter.style.animation='2s fold linear';

    mCenter.addEventListener('animationend',function(){
    	//弹性运动走完了，接着让蓝色的圆点运动

      var circles=document.querySelectorAll(".mCenter div:not(.arc)");		//获取到所有的圆点
      var boxs=document.querySelectorAll(".box");			//所有的文字块内容

        //因为只有数组才有sort这个方法，所以需要声明一个数组，存的就是上面获取到的所有元素
      var sortBoxs:Array<any>=[];		//这个数组里存的都是box对象
      for(var i=0;i<boxs.length;i++){
          sortBoxs.push(boxs[i]);
      }
      sortBoxs.sort(function(n1,n2){
            //n1与n2都是传进来的box对象，num1与num2的值就是每个Box里面的数字
            var num1=parseInt(n1.querySelector('.order').innerHTML);
            var num2=parseInt(n2.querySelector('.order').innerHTML);

            return num1-num2;		//按从小到大的顺序排
      });
      var ln:number=0;		//上一个有class的对象对应的下标
        for(var i=0;i<circles.length;i++){
          (function(i){
            setTimeout(function(){
              circles[ln].className='';
              circles[i].className='active';
              ln=i;		//在进行下一次运动前，让他的值更新为i

              //让对应的文字块区域显示出来
              /*
               * 一共有8个文字块
               * i为0-4		第1块显示
               * i为5-9		第2块显示
               * i为10-14		第3块显示
               * i为15-19		第4块显示
               * i为20-24		第5块显示
               *
               */
              sortBoxs[parseInt(i/5)].style.opacity=1;

              //当走完最后一个，让最后一个的class为空
              if(i==circles.length-1){
                setTimeout(function(){
                  circles[ln].className='';
                },100);
              }
            },i*100);
          })(i);
        }

    });
    //鼠标滚动让底下内容显示
    document.onmousewheel=function () {
      if(document.body.scrollTop>1100){
        let img=document.getElementById('img');
        img.style.transform="scale(1) rotate(360deg)";
        img.style.transition='1s';
        let info=document.getElementsByClassName('info');
        info[0].style.transform='translateY(10px)';
        info[0].style.transition='1s';
        info[0].style.opacity=1;
      }
      if(document.body.scrollTop>1500){
        var texts=document.getElementsByClassName('text');
        var texticons=document.getElementsByClassName('texticon');
        var arrtop=[];
        var arrbottom=[];
        var toparr=[];
        var bottomarr=[];
        //把类数组转换成数组，才能进行数组的操作。
        for(let i=0;i<texts.length;i++){
          arrtop.push(texts[i]);
        }
        for(let i=0;i<texts.length;i++){
          arrbottom.push(texticons[i]);
        }
        for(let i=0;i<arrtop.length;i++){
          toparr.push(arrtop.shift());
          toparr.push(arrbottom.shift());
        }
        bottomarr.push(arrbottom.shift());
        bottomarr.push(arrtop.shift());
        bottomarr.push(arrbottom.shift());
        bottomarr.push(arrtop.shift());
        bottomarr.push(arrbottom.shift());
        bottomarr.push(arrtop.shift());
        var textwrap=document.getElementsByClassName('textwrap');

        textwrap[0].style.transform='translateY(30px)';
        textwrap[0].style.opacity=1;
        textwrap[0].style.transition='1s';


        for(var i=0;i<toparr.length;i++){
          let top=toparr[i];
          let bottom=bottomarr[i];
          top.style.animation='tobottom 0.5s ease 0.'+i+'s';
          top.addEventListener('animationend',function(){
            top.style.top=0+'px';
            top.style.opacity=1;
          })
          bottom.style.animation='totop 0.5s ease 0.'+i+'s';
          bottom.addEventListener('animationend',function(){
            bottom.style.top=0+'px';
            bottom.style.opacity=1;
          });
        }
      }
    }

  }

}

















