/**
 * Created by wQ on 2017/4/17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing-modules';
import { CoreModule } from '../core/core.module';
import {EnContactComponent} from './en-contact/en-contact.component';
import {EnContactRoutingModule} from './en-contact/en-contact.routing.module';

@NgModule({
  imports: [CommonModule, ContactRoutingModule,EnContactRoutingModule,CoreModule],
  declarations: [ContactComponent,EnContactComponent],
  exports: [ContactComponent,EnContactComponent]
})
export class ContactModule { }
