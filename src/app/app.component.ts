import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import * as AOS from 'aos';
import { FooterComponent } from './core/components/footer/footer.component';
import { HeaderComponent } from './core/components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [
        RouterOutlet,
        HeaderComponent,
        FooterComponent
    ]
})

export class AppComponent implements OnInit {

  constructor( @Inject(PLATFORM_ID) private platformId : Object){}
  
  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)){
      AOS.init();
    }
  }
}
