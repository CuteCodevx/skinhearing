/**
 * Created by wQ on 2017/4/18.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product.routing-module';
import { CoreModule } from '../core/core.module';


@NgModule({
  imports: [CommonModule, ProductRoutingModule,CoreModule],
  declarations: [ProductComponent],
  exports: [ProductComponent]
})
export class ProductModule { }
