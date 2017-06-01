import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { CoreModule } from '../core/core.module';
import {Article0Component,Article1Component,Article2Component,Article3Component,Article4Component,Article5Component,Article6Component} from './article/index';
import {EnArticle0Component,EnArticle2Component,EnArticle3Component,EnArticle4Component,EnArticle5Component,EnArticle6Component} from './en-about/en-article/index';
import {EnAboutRoutingModule} from './en-about/en-about.rouring.module';
import {EnAboutComponent} from './en-about/en-about.component';

@NgModule({
  imports: [CommonModule, AboutRoutingModule,EnAboutRoutingModule,CoreModule],
  declarations: [Article0Component,AboutComponent,EnAboutComponent,Article1Component,Article2Component,Article3Component,Article4Component,Article5Component,Article6Component,EnArticle0Component,EnArticle2Component,EnArticle3Component,EnArticle4Component,EnArticle5Component,EnArticle6Component],
  exports: [Article0Component,AboutComponent,Article1Component,Article2Component,Article3Component,Article4Component,Article5Component,Article6Component,EnAboutComponent,EnArticle0Component,EnArticle2Component,EnArticle3Component,EnArticle4Component,EnArticle5Component,EnArticle6Component]
})
export class AboutModule { }
