/**
 * Created by wQ on 2017/4/17.
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DownloadComponent } from './download.component';
import {AuthGuard} from '../core/services/auth-guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'download', component: DownloadComponent ,canActivate:[AuthGuard]}
    ])
  ],
  exports: [RouterModule]
})
export class DownloadRoutingModule { }
