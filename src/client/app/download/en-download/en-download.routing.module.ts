/**
 * Created by wQ on 2017/5/31.
 */
/**
 * Created by wQ on 2017/4/17.
 */
import { NgModule } from '@angular/core';
import { RouterModule ,Routes} from '@angular/router';
import { EnDownloadComponent } from './en-download.component';
import {AuthGuard} from '../../core/services/auth-guard.service';
import {DocRoutes} from "../downloaddoc/doc.routing.module";
import {PageimgRoutes} from "../downloaddoc/pageimg.routing.module";

const routes:Routes=[
  {
    path: 'en/download',
    component: EnDownloadComponent ,
    children:[
      ...DocRoutes,
      ...PageimgRoutes
    ],
    // canActivate:[AuthGuard]
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class EnDownloadRoutingModule { }
