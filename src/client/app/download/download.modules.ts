/**
 * Created by wQ on 2017/4/17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadComponent } from './download.component';
import { DownloadRoutingModule } from './download.routing-modules';
import { CoreModule } from '../core/core.module';


@NgModule({
  imports: [CommonModule, DownloadRoutingModule,CoreModule],
  declarations: [DownloadComponent],
  exports: [DownloadComponent]
})
export class DownloadModule { }
