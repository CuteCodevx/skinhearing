import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import {VideoComponent} from "./video/video.component";
@NgModule({
  imports: [CommonModule, HomeRoutingModule, CoreModule,SharedModule],
  declarations: [HomeComponent,VideoComponent],
  exports: [HomeComponent,VideoComponent],
  providers: []
})
export class HomeModule { }
