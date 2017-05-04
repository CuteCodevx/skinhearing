import { NgModule } from '@angular/core';
import { RouterModule ,Routes} from '@angular/router';
import { HomeComponent } from './home.component';
import {VideoRoutes} from "./video/video.routing.module";

const routes:Routes=[
  {
    path:'',
    component: HomeComponent,
    children:[
      ...VideoRoutes
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
