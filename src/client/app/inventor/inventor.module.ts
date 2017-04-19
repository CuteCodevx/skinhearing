/**
 * Created by wQ on 2017/4/18.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventorComponent } from './inventor.component';
import { InventorRoutingModule } from './inventor.routing-module';
import { CoreModule } from '../core/core.module';


@NgModule({
  imports: [CommonModule, InventorRoutingModule,CoreModule],
  declarations: [InventorComponent],
  exports: [InventorComponent]
})
export class InventorModule { }
