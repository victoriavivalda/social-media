import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialMediaComponent } from './social-media.component';
import { IconComponent } from './icon/icon.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';


@NgModule({
  declarations: [SocialMediaComponent, IconComponent],
  imports: [
    CommonModule,
    AngularFontAwesomeModule
  ],
  exports: [SocialMediaComponent, IconComponent]
})
export class SocialMediaModule { }

