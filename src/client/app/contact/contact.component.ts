/**
 * Created by wQ on 2017/4/17.
 */
import { Component ,AfterViewChecked,OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sd-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.css']
})
export class ContactComponent implements OnInit{
  content:string='请加入皮肤听声交流群：373515541';
  btn:boolean=false;
  click(){
    this.btn=!this.btn;
    return this.btn;
  }
  ngOnInit(){}
}
