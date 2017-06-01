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

  data:Array<object>=[
    {
      img:'1.jpg',
      title:'测试佩戴皮肤听声器后的反应',
      desc:'2006年2月23日测试佩戴皮肤听声器后的反应，当呼叫学生姓名时学生能马上举手应答，事实上他们是通过皮肤听声器和读唇法同时完成的，也说明皮肤听声器的效果是明显的。'
    },
    {
      img:'2.jpg',
      title:'聋哑学生体验皮肤听声器的效果',
      desc:'2006年2月23日聋哑学生体验皮肤听声器的效果，其他同学年龄相对较大，也通过手语向他们的老师反映，能区分语音，但是他们说不出来。因为长期不说话，发音器官不能协调配合，说话的动作难以完成。看来说话不全是分辨语音的问题，当分辨语音的能力恢复后还应当进行长期的说话训练。'
    },
    {
      img:'3.jpg',
      title:'为聋哑学生佩戴皮肤听声器',
      desc:'2006年2月23日为聋哑学生佩戴皮肤听声器，开始试用时有些学生已开始就感到很乐意，但有些学生明显感到刺痛，经过反复试用，找到合适位置,学生们全部接受'
    },
    {
      img:'4.jpg',
      title:'项目负责人与聋哑学生合影',
      desc:'由项目负责人提议，由于晓明负责联系陕西中医学院的专家教授参加，2008年1月7日在咸阳市特殊教育学校进行了一次试用。2008年1月7日早上9:30开车去往咸阳市特殊教育学校，10:00点左右到达咸阳市特殊教育学校，由韩学军负责提供测试的具体地点，地点定在咸阳市特殊教育学校会议室，由闫润英负责召集聋哑学生。'
    },
    {
      img:'5.jpg',
      title:'聋哑学生们很高兴',
      desc:'2008年1月7日戴着皮肤听声器聋哑学生们很高兴，他们感觉到了外部世界声音的美妙。'
    },
    {
      img:'6.jpg',
      title:'聋哑学生之间相互交流',
      desc:'2008年1月7日聋哑学生之间相互交流佩戴皮肤听声器的方法。'
    },
    {
      img:'7.jpg',
      title:'2008年1月7日聋哑学生体验声音',
      desc:'在咸阳市特殊教育学校教学楼后面，无意中由数码相机拍摄到的佩戴了皮肤听声器的聋哑学生拍手体验声音的高兴场面，聋哑学生戴上皮肤听声器后接收到了外部世界的声音信息,同时也感觉到外部世界声音的美妙,他们拍手制造声音。他们高兴得心情可以在跳跃的动作中得到体现。这能说明皮肤听声器对聋哑学生的作用。'
    },
    {
      img:'8.jpg',
      title:'2008年1月7日皮肤听声器试用合影',
      desc:'其中有6位聋哑学生，1位聋哑教工，咸阳市特殊教育学校副校长韩学军，陕西中医学院的几位专家教授，几位项目组成员。'
    },
    {
      img:'9.jpg',
      title:'老年聋人佩戴皮肤听声器与哥哥丈夫',
      desc:'叶哲文，女，1948年12月28日出生，57岁，小学文化，家住西安南郊，家庭妇女。双耳失聪达3多年，多年前为了一只具有残余听力的耳朵动手术，致使两只耳朵彻底失听，现在听不见任何声音，能识字、可以说话，不太流利，通过写字与正常人交流。'
    },
    {
      img:'10.jpg',
      title:'老年聋人佩戴皮肤听声器与孙子儿媳',
      desc:'患者平时经常佩戴皮肤听声器，能听到人说话，但听不懂说话的意思。只要身边有动静她就能听，她认为皮肤听声器就响。事实上皮肤听声器并没有发出任何声音，仅仅产生音频电流信号，没有感到皮肤被刺痛的感觉。在生活中皮肤听声器给她带来一些方便，如能过听到水开的声音，帮助她料理家务。'
    },
    {
      img:'11.jpg',
      title:'聋哑学生王雪使用皮肤听声器学习说话',
      desc:'聋哑学生王雪使用皮肤听声器学习说话，王雪同学能准确的说出部分汉字，我们反复关断和打开皮肤听声器电源开关进行验证，得到的结论是：王雪同学有明显的残余听力。'
    },
    {
      img:'12.jpg',
      title:'佩戴了皮肤听声器的王雪很喜欢弹琴',
      desc:'佩戴了皮肤听声器的聋哑学生王雪很喜欢弹琴'
    },
    {
      img:'13.jpg',
      title:'佩戴皮肤听声器的老年聋人与女儿',
      desc:'戴上皮肤听声器后，苏玉萍老人能明显地感到别人的说话，但一时还不能明白别人说话的意思。当然要想理解别人说话的意思就必须经过相当长时间的训练。从生理学上来讲，皮肤也能将声音信号传到了大脑皮层，但它与耳朵所传递的大脑皮层的位置有所不同，而且特点也有区别，所以人的大脑必须对它另行建立一套解释程序。'
    },
    {
      img:'14.jpg',
      title:'项目负责人与佩戴皮肤听声器的老年聋人',
      desc:'苏玉萍，女，1936年2月19日出生，中专文化，退休前在西北轻工业学院机械系党总支和系办公室工作。曾因为胆结石手术后遗症（胆囊两个结石手术时未取出），手术后疼痛加重靠吃止痛药，后来止不住痛就靠打阿托品，引起听力急剧下降，语言表达能力很强，但耳鸣非常厉害，以至于她无法听到外界的声音，包括别人说话，直到近几年不能正常交往。'
    },
    {
      img:'15.jpg',
      title:'初次试用12通道皮肤听声器',
      desc:'王雪同学能够比较准确的说汉语“一”、“二”、“三”、“四”，但在不使用12通道皮肤听声器（关闭电源）时不能说出“五”，当使用12通道皮肤听声器（打开电源）时能说出准确的“五”。也说明，王雪同学的耳蜗低频率损失严重。'
    },
    {
      img:'16.jpg',
      title:'佩戴皮肤听声器的聋哑孩子喜欢上了弹琴',
      desc:'2013年3月26日下午约2:30驱车到达咸阳市特殊教育学校，同行的人有李建文教授与三个研究生李沙沙、李岩、张铭，咸阳市特殊教育学校由副校长韩学军和教师闫润英接待。聋哑学生王雪使用皮肤听声器学习说话，当她能够听清别人说话，自己也会简单发音了时，她喜欢上了弹琴，她可以听见美妙的乐曲'
    }
  ];
  constructor(){}
  ngOnInit() {
    this.iconstyle='photo photo_front';
  }
  ngAfterViewInit(){
    this.rsort(this.random([0,this.data.length]));
    let boxstyle=document.getElementById('boxstyle');
    document.onmousewheel=function () {
      if(document.body.scrollTop>1200){
        boxstyle.style.top=0+'px';
        boxstyle.style.transition='1s';
      }
    }
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
      h:document.getElementById('wrap').clientHeight,
      // halfwrapW:Math.ceil(wrap.w/2),
      // halfwrapH:Math.ceil(wrap.h/2)
    };
    var photo:Object={
      w:document.getElementsByClassName('photo')[0].clientWidth,
      h:document.getElementsByClassName('photo')[0].clientHeight,
      // halfimgW:Math.ceil(photo.w/2),
      // halfimgH:Math.ceil(photo.h/2)
    };
    // range.left.x=[0-photo.w,wrap.w/2-photo.w/2];
    // range.left.y=[0-photo.h,wrap.h]
    //
    // range.right.x=[wrap.w/2+photo.w/2,wrap.w+photo.w];
    // range.right.y=range.left.y;
    range.left.x=[0-photo.w/2,wrap.w/2-(photo.w/2)];
    range.left.y=[0-photo.h/2,wrap.h-photo.h/2];
    range.right.x=[wrap.w/2+photo.w/2,wrap.w-photo.w/2];
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
      _photo[s].style['-webkit-transform']='rotate(0deg) scale(1.2)';
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
