/**
 * Created by wQ on 2017/4/18.
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'product', component: ProductComponent }
    ])
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
