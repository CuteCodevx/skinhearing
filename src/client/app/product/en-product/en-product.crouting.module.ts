/**
 * Created by wQ on 2017/5/31.
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EnProductComponent } from './en-product.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'en/product', component: EnProductComponent }
    ])
  ],
  exports: [RouterModule]
})
export class EnProductRoutingModule { }
