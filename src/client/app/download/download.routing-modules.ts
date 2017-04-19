/**
 * Created by wQ on 2017/4/17.
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DownloadComponent } from './download.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'download', component: DownloadComponent }
    ])
  ],
  exports: [RouterModule]
})
export class DownloadRoutingModule { }
