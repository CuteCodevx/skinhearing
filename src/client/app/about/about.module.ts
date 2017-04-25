import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { CoreModule } from '../core/core.module';
import {Article1Component,Article2Component,Article3Component,Article4Component,Article5Component,Article6Component} from './article/index';


@NgModule({
  imports: [CommonModule, AboutRoutingModule,CoreModule],
  declarations: [AboutComponent,Article1Component,Article2Component,Article3Component,Article4Component,Article5Component,Article6Component],
  exports: [AboutComponent,Article1Component,Article2Component,Article3Component,Article4Component,Article5Component,Article6Component]
})
export class AboutModule { }
