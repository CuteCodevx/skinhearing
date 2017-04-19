/**
 * Created by wQ on 2017/3/28.
 */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { NavbarComponent } from './navbar/index';
import { FooterComponent } from './footer/index';
/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ NavbarComponent,FooterComponent],
  exports: [ NavbarComponent,FooterComponent,
    CommonModule, FormsModule, RouterModule]
})
export class CoreModule {


}
