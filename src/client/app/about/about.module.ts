import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { CoreModule } from '../core/core.module';


@NgModule({
  imports: [CommonModule, AboutRoutingModule,CoreModule],
  declarations: [AboutComponent],
  exports: [AboutComponent]
})
export class AboutModule { }
