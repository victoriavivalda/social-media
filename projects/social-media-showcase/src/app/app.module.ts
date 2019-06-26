import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { SocialMediaModule } from '../../../social-media/src/lib/social-media.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    SocialMediaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
