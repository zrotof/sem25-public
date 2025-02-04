import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { environment } from './environments/environment';
import { appConfig } from './app/app.config';

import { register as registerSwiperElements } from 'swiper/element/bundle';

if (environment.production) {
  enableProdMode();
}

registerSwiperElements();

bootstrapApplication(AppComponent, appConfig)
.catch(err => console.error(err));
