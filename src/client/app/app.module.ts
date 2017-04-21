import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { ContactModule } from './contact/contact.module';
import { DownloadModule } from './download/download.modules';
import { UserecordModule } from './userecord/userecord.module';
import { ProductModule } from './product/product.module';
import { InventorModule } from './inventor/inventor.module';
import {UserModule} from './user/user.module';

@NgModule({
  imports: [BrowserModule, HttpModule, AppRoutingModule, AboutModule, HomeModule,CoreModule, SharedModule,ContactModule,DownloadModule,UserecordModule,ProductModule,InventorModule,UserModule],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
