/**
 * Created by wQ on 2017/4/17.
 */
import { NgModule } from '@angular/core';
import { RouterModule ,Routes} from '@angular/router';
import { DownloadComponent } from './download.component';
import {AuthGuard} from '../core/services/auth-guard.service';
import {DocRoutes} from "./downloaddoc/doc.routing.module";
import {PageimgRoutes} from "./downloaddoc/pageimg.routing.module";

const routes:Routes=[
  {
    path: 'download',
    component: DownloadComponent ,
    children:[
      ...DocRoutes,
      ...PageimgRoutes
    ],
    canActivate:[AuthGuard]
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class DownloadRoutingModule { }
