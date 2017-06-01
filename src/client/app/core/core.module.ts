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
import { SidenavComponent } from './sidenav/index';
import {RegisterService} from './services/register.service';
import {UserService} from './services/user.service';
import {LoginService} from './services/login.service';
import {EnNavbarComponent} from './navbar/en-navbar/en-navbar.component';
import {EnFooterComponent} from './footer/en-footer/en-footer.component';
@NgModule({
  imports: [CommonModule, RouterModule],
  providers:[RegisterService,UserService,LoginService],
  declarations: [ NavbarComponent,FooterComponent,SidenavComponent,EnNavbarComponent,EnFooterComponent],
  exports: [ NavbarComponent,FooterComponent,SidenavComponent,
    CommonModule, FormsModule, RouterModule,EnNavbarComponent,EnFooterComponent]
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
