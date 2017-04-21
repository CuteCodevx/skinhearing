/**
 * Created by wQ on 2017/3/28.
 */
import { NgModule, ModuleWithProviders,Optional,SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { NavbarComponent } from './navbar/index';
import { FooterComponent } from './footer/index';
import {RegisterService} from './services/register.service';
import {UserService} from './services/user.service';
import {LoginService} from './services/login.service';


@NgModule({
  imports: [CommonModule, RouterModule],
  providers:[RegisterService,UserService,LoginService],
  declarations: [ NavbarComponent,FooterComponent],
  exports: [ NavbarComponent,FooterComponent,
    CommonModule, FormsModule, RouterModule]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule:CoreModule){
    if(parentModule){
      throw new Error(
        'CoreModule is already loaded.Import it in the AppModule only'
      );
    }
  }

}
