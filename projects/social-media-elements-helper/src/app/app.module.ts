import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { SocialMediaModule } from '../../../social-media/src/lib/social-media.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    SocialMediaModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {

  ngDoBootstrap() {
  }

}
