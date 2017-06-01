/**
 * Created by wQ on 2017/5/31.
 */
import { NgModule } from '@angular/core';
import { RouterModule,Routes,Route} from '@angular/router';
import { EnAboutComponent } from './en-about.component';

import {EnArticle0Routes,EnArticle2Routes,EnArticle3Routes,EnArticle4Routes,EnArticle5Routes,EnArticle6Routes} from './en-article/index';

const routes:Routes=[
  {
    path:'en/about',
    component:EnAboutComponent,
    children:[
      ...EnArticle0Routes,
      ...EnArticle2Routes,
      ...EnArticle3Routes,
      ...EnArticle4Routes,
      ...EnArticle5Routes,
      ...EnArticle6Routes,

    ]
  }
];
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class EnAboutRoutingModule{}

