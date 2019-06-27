import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { SocialMediaComponent } from './social-media.component';
import { IconComponent } from './icon/icon.component';

@NgModule({
  declarations: [SocialMediaComponent, IconComponent],
  imports: [CommonModule, AngularFontAwesomeModule],
  exports: [SocialMediaComponent, IconComponent],
  entryComponents: [SocialMediaComponent, IconComponent]
})
export class SocialMediaModule {
  constructor(private injector: Injector) {
    const SocialMediaElement = createCustomElement(SocialMediaComponent, { injector });
    // Register the custom element with the browser.
    customElements.define('social-media-element', SocialMediaElement);

    const IconElement = createCustomElement(IconComponent, { injector });
    customElements.define('icon-element', IconElement);
  }

  ngDoBootstrap() {}
}
