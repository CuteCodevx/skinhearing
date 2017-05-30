/**
 * Created by wQ on 2017/4/17.
 */
import {AfterViewInit, Component, OnInit} from '@angular/core';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-download',
  templateUrl: 'download.component.html',
  styleUrls: ['download.component.css']
})
export class DownloadComponent implements AfterViewInit{
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
