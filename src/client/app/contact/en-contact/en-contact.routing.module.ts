/**
 * Created by wQ on 2017/5/31.
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EnContactComponent } from './en-contact.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'en/contact', component: EnContactComponent }
    ])
  ],
  exports: [RouterModule]
})
export class EnContactRoutingModule { }
