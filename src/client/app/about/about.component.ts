import { Component,OnInit ,AfterViewInit,trigger,state,style,transition,animate} from '@angular/core';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css'],
  // animations:[
  //   trigger('imgStatus',[
  //     state('on',style({
  //       color:'red',
  //       transform:'rotate(0deg)'
  //     })),
  //     state('off',style({
  //       color:'#000',
  //       transform:'rotate(360deg)'
  //     })),
  //     transition('off=>on',animate('100ms ease-in')),
  //     transition('on=>off',animate('100ms ease-out')),
  //   ])
  // ]
})
export class AboutComponent implements OnInit{
  private thumbnails:any[];
  clickrouter:boolean=true;
  font:number=16;
  constructor(){
    this.thumbnails=[
      {
        imgsrc:'滤波图.JPG',
        title:'语音频谱图与语音辨析',
        text:'皮肤听声技术与声学、数学关系极为密切...',
        url:'2',
        number:'0'
        // style:'rotateY(180deg)'
      },
      {
        imgsrc:'ear.png',
        title:'皮肤构造与皮肤听声',
        text:'人体皮肤可分为表皮、真皮和皮下组织三部分...',
        number:'1',
        url:'3',
      },
      {
        imgsrc:'skin_hearing_aid1.png',
        title:'第一代皮肤听声器',
        text:'第一代皮肤听声器以发明专利“变压式皮肤听声器”...',
        number:'2',
        url:'4',
      },
      {
        imgsrc:'高性能皮肤听声器1.png',
        title:'高性能皮肤听声器',
        text:'第二代皮肤听声器主要使用多通道带通滤波与阵列...',
        number:'3',
        url:'5',
      }
    ]
  }
  ngOnInit(){
    var box=document.querySelector('aside');
    // console.log(box)
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
      alert('字体已经调到最大了');
    }else{
      this.font=this.font+2;
      aside.style.fontSize=this.font+'px';
    }
  }
  textchangesmall(){
    // console.log(this.font);
    var aside= document.querySelector('aside');
    if(this.font==14){
      this.font=14;
      aside.style.fontSize=this.font+'px';
      alert('字体不能再缩小了');
    }else{
      this.font=this.font-2;
      aside.style.fontSize=this.font+'px';
    }

  }
  mouseenter(eg:any){
    // this.addQuestionRequest.emit(eg.style);
    // this.status=(this.status === 'on')?'off':'on';
    var imgs=document.getElementsByClassName('img');
    // this.status=(this.status === 'on')?'off':'on';
    imgs[eg.number].style.transform='rotate(360deg)';
    imgs[eg.number].style.transition='0.5s';
  }
  //鼠标移走时，需要让this.deg为0deg。
  mouseover(eg:any){
    var imgs=document.getElementsByClassName('img');
    imgs[eg.number].style.transform='rotate(0deg)';
    imgs[eg.number].style.transition='0s';
  }
}
