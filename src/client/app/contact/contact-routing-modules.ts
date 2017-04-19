/**
 * Created by wQ on 2017/4/17.
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'contact', component: ContactComponent }
    ])
  ],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
