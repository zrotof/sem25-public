import { CommonModule, NgOptimizedImage } from '@angular/common';
import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, Inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Swiper } from "swiper";
import { RouterLink } from '@angular/router';
import { HeroSwiperDirective } from 'src/app/core/directives/hero-swiper/hero-swiper.directive';

import { ButtonPrimaryComponent } from 'src/app/shared/components/button-primary/button-primary.component';

@Component({
  selector: 'app-swiping-hero-banner',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './swiping-hero-banner.component.html',
  styleUrls: ['./swiping-hero-banner.component.scss'],
  imports : [
    RouterLink,
    NgOptimizedImage,
    HeroSwiperDirective,
    CommonModule,
    ButtonPrimaryComponent,    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SwipingHeroBannerComponent implements AfterViewInit{
  swiper !: Swiper;
  @ViewChild('swiperRef') swiperRef: ElementRef | undefined;
  
  constructor(){}
  
  public config = {
    slidesPerView: 1,
    loop : true,
    pagination : {
      el : '.swiper-pagination',
      clickable : true
    }
  }

  ngAfterViewInit(): void {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  onNavigationEvent( param : number) : void {
    param > 0 ? this.swiper.slideNext() : this.swiper.slidePrev();
  }

}
