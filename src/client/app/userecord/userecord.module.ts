/**
 * Created by wQ on 2017/4/17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserecordComponent } from './userecord.component';
import { UserecordRoutingModule } from './userecord.routing-modules';
import { CoreModule } from '../core/core.module';
import {EnUserecordRoutingModule} from './en-userecord/en-userecord.routing.module';
import {EnUserecordComponent} from './en-userecord/en-userecord.component';

@NgModule({
  imports: [CommonModule, UserecordRoutingModule,EnUserecordRoutingModule,CoreModule],
  declarations: [UserecordComponent,EnUserecordComponent],
  exports: [UserecordComponent,EnUserecordComponent]
})
export class UserecordModule { }
