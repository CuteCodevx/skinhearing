/**
 * Created by wQ on 2017/4/17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadComponent } from './download.component';
import { DownloadRoutingModule } from './download.routing-modules';
import { CoreModule } from '../core/core.module';
import {AuthGuard} from '../core/services/auth-guard.service';
import {DocComponent} from "./downloaddoc/doc.component";
import {PageimgComponent} from "./downloaddoc/pageimg.component";
import {EnDownloadComponent} from './en-download/en-download.component';
import {EnDownloadRoutingModule} from './en-download/en-download.routing.module';
@NgModule({
  imports: [CommonModule, DownloadRoutingModule,EnDownloadRoutingModule,CoreModule],
  declarations: [EnDownloadComponent,DownloadComponent,DocComponent,PageimgComponent],
  providers:[AuthGuard],
  exports: [EnDownloadComponent,DownloadComponent,DocComponent,PageimgComponent]
})
export class DownloadModule { }
