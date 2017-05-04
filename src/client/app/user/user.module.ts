/**
 * Created by wQ on 2017/4/20.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UserRoutingModule } from './user.routing-modules';
import { CoreModule } from '../core/core.module';


import {RegisterComponent} from './shared/index';
import {LoginComponent} from './shared/index';
import {FieldComponent} from './shared/index';
import {AlertModule} from 'ngx-bootstrap/alert';

@NgModule({
  imports: [CommonModule, UserRoutingModule,CoreModule,ReactiveFormsModule,AlertModule.forRoot()],
  declarations: [RegisterComponent,LoginComponent,FieldComponent],
  exports: [RegisterComponent,LoginComponent,FieldComponent]
})
export class UserModule { }
