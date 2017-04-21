/**
 * Created by wQ on 2017/4/20.
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {RegisterComponent} from './shared/index';
import {LoginComponent} from './shared/index';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent}
    ])
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
