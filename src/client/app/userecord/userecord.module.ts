/**
 * Created by wQ on 2017/4/17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserecordComponent } from './userecord.component';
import { UserecordRoutingModule } from './userecord.routing-modules';
import { CoreModule } from '../core/core.module';


@NgModule({
  imports: [CommonModule, UserecordRoutingModule,CoreModule],
  declarations: [UserecordComponent],
  exports: [UserecordComponent]
})
export class UserecordModule { }
