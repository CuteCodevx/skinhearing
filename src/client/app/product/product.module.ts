/**
 * Created by wQ on 2017/4/18.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product.routing-module';
import { CoreModule } from '../core/core.module';
import {EnProductComponent} from './en-product/en-product.component';
import {EnProductRoutingModule} from './en-product/en-product.crouting.module';

@NgModule({
  imports: [CommonModule, ProductRoutingModule,CoreModule,EnProductRoutingModule],
  declarations: [ProductComponent,EnProductComponent],
  exports: [ProductComponent,EnProductComponent]
})
export class ProductModule { }
