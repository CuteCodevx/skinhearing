import { NgModule } from '@angular/core';
import { RouterModule,Routes,Route} from '@angular/router';
import { AboutComponent } from './about.component';

import {Article1Routes} from './article/index';
import {Article2Routes} from './article/index';
import {Article3Routes} from './article/index';
import {Article4Routes} from './article/index';
import {Article5Routes} from './article/index';
import {Article6Routes} from './article/index';

const routes:Routes=[
  {
    path:'about',
    component:AboutComponent,
    children:[
      ...Article1Routes,
      ...Article2Routes,
      ...Article3Routes,
      ...Article4Routes,
      ...Article5Routes,
      ...Article6Routes

    ]
  }
];
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
// @NgModule({
//   imports: [
//     RouterModule.forChild([
//       { path: 'about', component: AboutComponent }
//     ])
//   ],
//   exports: [RouterModule]
// })
export class AboutRoutingModule{}

