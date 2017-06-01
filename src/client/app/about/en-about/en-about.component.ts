/**
 * Created by wQ on 2017/5/31.
 */
import { Component,OnInit ,AfterViewInit,trigger,state,style,transition,animate} from '@angular/core';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'en-about',
  templateUrl: 'en-about.component.html',
  styleUrls: ['../about.component.css'],

})
export class EnAboutComponent implements OnInit{
  private thumbnails:any[];
  clickrouter:boolean=true;
  font:number=16;
  constructor(){
    this.thumbnails=[
      {
        imgsrc:'滤波图.JPG',
        title:'Voice spectrum and speech analysis ',
        text:'The acoustic technology is closely related to acoustics and mathematics...',
        url:'2',
        number:'0'
      },
      {
        imgsrc:'ear.png',
        title:'The sound of the skin',
        text:'Human skin can be divided into three parts: epidermis, dermis and subcutaneous tissue ...',
        number:'1',
        url:'3',
      },
      {
        imgsrc:'skin_hearing_aid1.png',
        title:'The first generation ',
        text:'The first generation of skin listening devices is the invention of the "transformer skin." ...',
        number:'2',
        url:'4',
      },
      {
        imgsrc:'高性能皮肤听声器1.png',
        title:'High-performance',
        text:'The second generation of skin listening devices mainly USES multichannel bandpass filtering and array ...',
        number:'3',
        url:'5',
      }
    ]
  }
  ngOnInit(){
    var box=document.querySelector('aside');
    document.onmousewheel=function () {
      if(document.body.scrollTop>0){
        box.style.top=0+'px';
        box.style.opacity='1';
        box.style.transition='1s';
      }
    }

  }
  ngAfterViewInit(){
    var thumbnail=document.getElementsByClassName('thumbnail');
    var n=0;
    for(let l=thumbnail.length-1,i=l;i>=0;i--){
      thumbnail[i].style.left='0';
      thumbnail[i].style.transition='left 1s ease 0.'+n+'s';
      n++;
    }
  }
  textchangebig(){
    var aside= document.querySelector('aside');
    if(this.font==26){
      this.font=26;
      aside.style.fontSize=this.font+'px';
      alert('The font has been tuned to the maximum');
    }else{
      this.font=this.font+2;
      aside.style.fontSize=this.font+'px';
    }
  }
  textchangesmall(){
    var aside= document.querySelector('aside');
    if(this.font==14){
      this.font=14;
      aside.style.fontSize=this.font+'px';
      alert('The font can not be shrunk anymore');
    }else{
      this.font=this.font-2;
      aside.style.fontSize=this.font+'px';
    }

  }
  mouseenter(eg:any){
    var imgs=document.getElementsByClassName('img');
    imgs[eg.number].style.transform='rotate(360deg)';
    imgs[eg.number].style.transition='0.5s';
  }
  mouseover(eg:any){
    var imgs=document.getElementsByClassName('img');
    imgs[eg.number].style.transform='rotate(0deg)';
    imgs[eg.number].style.transition='0s';
  }
}
