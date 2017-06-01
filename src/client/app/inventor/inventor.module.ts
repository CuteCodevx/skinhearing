/**
 * Created by wQ on 2017/4/18.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventorComponent } from './inventor.component';
import { InventorRoutingModule } from './inventor.routing-module';
import { CoreModule } from '../core/core.module';
import {EnInventorRoutingModule} from './en-inventor/en-inventor.routing.module';
import {EnInventorComponent} from './en-inventor/en-inventor.component';

@NgModule({
  imports: [CommonModule, InventorRoutingModule,EnInventorRoutingModule,CoreModule],
  declarations: [InventorComponent,EnInventorComponent],
  exports: [InventorComponent,EnInventorComponent]
})
export class InventorModule { }
