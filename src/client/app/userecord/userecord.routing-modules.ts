/**
 * Created by wQ on 2017/4/17.
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserecordComponent } from './userecord.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'userecord', component: UserecordComponent }
    ])
  ],
  exports: [RouterModule]
})
export class UserecordRoutingModule { }
