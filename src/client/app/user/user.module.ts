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

import {EnRegisterComponent} from './shared/register/en-register/en-register.component';
import {EnLoginComponent} from './shared/login/en-login/en-login.component';

@NgModule({
  imports: [CommonModule, UserRoutingModule,CoreModule,ReactiveFormsModule,AlertModule.forRoot()],
  declarations: [EnRegisterComponent,RegisterComponent,EnLoginComponent,LoginComponent,FieldComponent],
  exports: [RegisterComponent,LoginComponent,FieldComponent,EnLoginComponent,EnRegisterComponent]
})
export class UserModule { }
