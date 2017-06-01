/**
 * Created by wQ on 2017/4/20.
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {RegisterComponent} from './shared/index';
import {LoginComponent} from './shared/index';
import {EnRegisterComponent} from './shared/register/en-register/en-register.component';
import {EnLoginComponent} from './shared/login/en-login/en-login.component';
@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent},
      { path: 'en/login', component: EnLoginComponent},
      { path: 'en/register', component: EnRegisterComponent}
    ])
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
