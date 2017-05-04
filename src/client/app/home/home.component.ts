import { Component, OnInit ,AfterViewInit} from '@angular/core';
/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {
  content:string='请加入皮肤听声交流群：373515541';
  btn:boolean=false;
  iconstyle:string='';
  click(){
    this.btn=!this.btn;
    return this.btn;
  }

  slides:Array<any> = [];
  slogan:Array<string> = [
    '免费简约的问卷系统',
    '简单 好用，在线调查网站',
    '多方式创建编辑问卷'
  ];
  data:Array<object>=[
    {
      img:'1.jpg',
      title:'测试佩戴皮肤听声器后的反应',
      desc:'2006年2月23日测试佩戴皮肤听声器后的反应'
    },
    {
      img:'2.jpg',
      title:'聋哑学生体验皮肤听声器的效果',
      desc:'2006年2月23日聋哑学生体验皮肤听声器的效果'
    },
    {
      img:'3.jpg',
      title:'为聋哑学生佩戴皮肤听声器',
      desc:'2006年2月23日为聋哑学生佩戴皮肤听声器'
    },
    {
      img:'4.jpg',
      title:'项目负责人与聋哑学生合影',
      desc:'2006年2月23日项目负责人与聋哑学生合影'
    },
    {
      img:'5.jpg',
      title:'聋哑学生们很高兴',
      desc:'2008年1月7日戴着皮肤听声器聋哑学生们很高兴'
    },
    {
      img:'6.jpg',
      title:'聋哑学生之间相互交流',
      desc:'2008年1月7日聋哑学生之间相互交流佩戴皮肤听声器的方法'
    },
    {
      img:'7.jpg',
      title:'聋哑学生体验声音',
      desc:'2008年1月7日佩戴了皮肤听声器的聋哑学生拍手体验声音的高兴场面,旁边是副校长韩学军与医学专家讨论问题'
    },
    {
      img:'8.jpg',
      title:'2008年1月7日皮肤听声器试用合影',
      desc:'2008年1月7日皮肤听声器试用合影'
    },
    {
      img:'9.jpg',
      title:'老年聋人佩戴皮肤听声器与哥哥丈夫',
      desc:'老年聋人佩戴皮肤听声器与哥哥丈夫'
    },
    {
      img:'10.jpg',
      title:'老年聋人佩戴皮肤听声器与孙子儿媳',
      desc:'老年聋人佩戴皮肤听声器与孙子儿媳'
    },
    {
      img:'11.jpg',
      title:'聋哑学生王雪使用皮肤听声器学习说话',
      desc:'聋哑学生王雪使用皮肤听声器学习说话'
    },
    {
      img:'12.jpg',
      title:'佩戴了皮肤听声器的王雪很喜欢弹琴',
      desc:'佩戴了皮肤听声器的聋哑学生王雪很喜欢弹琴'
    },
    {
      img:'13.jpg',
      title:'佩戴皮肤听声器的老年聋人与女儿',
      desc:'佩戴皮肤听声器的老年聋人与女儿'
    },
    {
      img:'14.jpg',
      title:'项目负责人与佩戴皮肤听声器的老年聋人',
      desc:'项目负责人与佩戴皮肤听声器的老年聋人'
    },
    {
      img:'15.jpg',
      title:'初次试用12通道皮肤听声器',
      desc:'初次试用12通道皮肤听声器'
    },
    {
      img:'16.jpg',
      title:'佩戴皮肤听声器的聋哑孩子喜欢上了弹琴',
      desc:'佩戴皮肤听声器的聋哑孩子喜欢上了弹琴'
    }
  ];
  // html:Array<any>=[];
  constructor(){}
  ngOnInit() {
    this.iconstyle='photo photo_front';
  }
  ngAfterViewInit(){
    this.rsort(this.random([0,this.data.length]));
  }
  //随机生成一个值
  random(range:Array<any>){
    var max=Math.max(range[0],range[1]);
    var min=Math.min(range[0],range[1]);
    var diff=max-min;
    var number=Math.floor(Math.random()*diff)+min;
    return number;
  }
  //计算左右分区的范围  返回一个对象{left:{x:[min,max],y:[]},right:{}}
  range(){
    var range:Object={
      left:{
        x:[],
        y:[]
      },
      right:{
        x:[],
        y:[]
      }
    }
    var wrap:Object={
      w:document.getElementById('wrap').clientWidth,
      h:document.getElementById('wrap').clientHeight
    };
    var photo:Object={
      w:document.getElementsByClassName('photo')[0].clientWidth,
      h:document.getElementsByClassName('photo')[0].clientHeight
    };
    // console.log(range.left)
    range.left.x=[0-photo.w,wrap.w/2-photo.w/2];
    range.left.y=[0-photo.h,wrap.h]

    range.right.x=[wrap.w/2+photo.w/2,wrap.w+photo.w];
    range.right.y=range.left.y;

    return range;
  }
  //排序海报
  rsort(n:number){
    //_代表临时变量  不重复添加photo_center 并且及时删除
    var _photo=document.getElementsByClassName('photo');
    //获取到的_photo是一个类数组，不是真正的数组，所以需要用photos
    var photos=[];
    for(var s=0;s<_photo.length;s++){
      _photo[s].className=_photo[s].className.replace(/\s*photo_center\s*/,' ');
      //中间的图片无法居中，除去他本身的样式，以及style中的left top rotate，然后重新给他样式
      _photo[s].className=_photo[s].className.replace(/\s*photo_front\s*/,' ');
      _photo[s].className=_photo[s].className.replace(/\s*photo_back\s*/,' ');
      _photo[s].className+=' photo_front';
      _photo[s].style.left='';
      _photo[s].style.top='';
      _photo[s].style['-webkit-transform']='rotate(0deg)';
      photos.push(_photo[s]);
    }
    var m=n.toString();
    var template=document.getElementById(m);
    //获取到这个标签
    template.className += ' photo_center';
    var _template=photos.splice(n,1)[0];
    //把海报分为左右两个区域

    var photo_left=photos.splice(0,Math.ceil(photos.length/2));
    var photo_right=photos;
    var ranges=this.range();
    for(let s in photo_left){
      var photo=photo_left[s];
      photo.style.left=this.random(ranges.left.x)+'px';
      photo.style.top=this.random(ranges.left.y)+'px';

      photo.style['transform']='rotate('+this.random([-30,30])+'deg)';
    }
    for(let s in photo_right){
      var photo=photo_right[s];
      photo.style.left=this.random(ranges.right.x)+'px';
      photo.style.top=this.random(ranges.right.y)+'px';

      photo.style['transform']='rotate('+this.random([-30,30])+'deg)';
    }
    var navs=document.getElementsByClassName('i');
    for(let i=0;i<navs.length;i++){
      navs[i].className = navs[i].className.replace(/\s*i_current\s*/,' ');
      navs[i].className = navs[i].className.replace(/\s*i_back\s*/,' ');
    }
    var navss=document.getElementById('nav'+m);

    navss.className += ' i_current';
  }
  //翻转
  turn(ele:any){
    var j=ele.toString();
    var elem=document.getElementById(j); //3
    let cls=elem.className;
    // console.log(cls);
    if(!/photo_center/.test(cls)){
      return this.rsort(ele);
    }

    if(/photo_front/.test(cls)){
      cls=cls.replace(/photo_front/,'photo_back');
      document.getElementById('nav'+ele).className += ' i_back';
    }else{
      cls=cls.replace(/photo_back/,'photo_front');
      document.getElementById('nav'+ele).className = document.getElementById('nav'+ele).className.replace(/\s*i_back\s*/,' ');
    }
    return elem.className=cls;

  }

}
