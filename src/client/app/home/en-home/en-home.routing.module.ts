/**
 * Created by wQ on 2017/5/31.
 */
import { NgModule } from '@angular/core';
import { RouterModule ,Routes} from '@angular/router';
import { EnHomeComponent } from './en-home.component';
// import {VideoRoutes} from "./video/video.routing.module";

const routes:Routes=[
  {
    path:'en',
    component: EnHomeComponent,
    children:[
      // ...VideoRoutes
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnHomeRoutingModule { }
