/**
 * Created by wQ on 2017/4/18.
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InventorComponent } from './inventor.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'inventor', component: InventorComponent }
    ])
  ],
  exports: [RouterModule]
})
export class InventorRoutingModule { }
