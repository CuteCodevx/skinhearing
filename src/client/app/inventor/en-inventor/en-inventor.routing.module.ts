/**
 * Created by wQ on 2017/5/31.
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EnInventorComponent } from './en-inventor.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'en/inventor', component: EnInventorComponent }
    ])
  ],
  exports: [RouterModule]
})
export class EnInventorRoutingModule { }
