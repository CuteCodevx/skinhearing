/**
 * Created by wQ on 2017/4/17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing-modules';
import { CoreModule } from '../core/core.module';


@NgModule({
  imports: [CommonModule, ContactRoutingModule,CoreModule],
  declarations: [ContactComponent],
  exports: [ContactComponent]
})
export class ContactModule { }
