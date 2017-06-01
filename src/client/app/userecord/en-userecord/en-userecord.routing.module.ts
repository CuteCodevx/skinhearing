/**
 * Created by wQ on 2017/5/31.
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EnUserecordComponent } from './en-userecord.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'en/userecord', component: EnUserecordComponent }
    ])
  ],
  exports: [RouterModule]
})
export class EnUserecordRoutingModule { }
