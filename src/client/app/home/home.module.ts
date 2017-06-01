import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {EnHomeComponent} from './en-home/en-home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import {VideoComponent} from "./video/video.component";
import {EnHomeRoutingModule} from './en-home/en-home.routing.module';
@NgModule({
  imports: [CommonModule, HomeRoutingModule, CoreModule,SharedModule,EnHomeRoutingModule],
  declarations: [HomeComponent,VideoComponent,EnHomeComponent],
  exports: [HomeComponent,VideoComponent,EnHomeComponent],
  providers: []
})
export class HomeModule { }
