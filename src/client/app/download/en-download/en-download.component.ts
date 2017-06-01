/**
 * Created by wQ on 2017/5/31.
 */

import {AfterViewInit, Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'en-download',
  templateUrl: 'en-download.component.html',
  styleUrls: ['../download.component.css']
})
export class EnDownloadComponent implements AfterViewInit{
  ngAfterViewInit(){
    var n=0;
    var divs=document.querySelectorAll('article div');
    for(let l=divs.length-1,i=l;i>=0;i--){
      divs[i].style.left='0';
      divs[i].style.transition='left 1s ease 0.'+n+'s';
      n++;
    }
  }

}
