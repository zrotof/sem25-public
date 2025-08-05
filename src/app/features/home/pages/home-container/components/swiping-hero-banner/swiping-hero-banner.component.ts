import { CommonModule, isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild, ViewEncapsulation, inject } from '@angular/core';
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
  imports: [
    RouterLink,
    NgOptimizedImage,
    HeroSwiperDirective,
    CommonModule,
    ButtonPrimaryComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SwipingHeroBannerComponent implements AfterViewInit {
  @ViewChild('swiperRef') swiperRef: ElementRef | undefined;
  @ViewChild('progressBar') progressBar!: ElementRef<HTMLDivElement>;
  private platformId = inject(PLATFORM_ID);
  swiper !: Swiper;

  public config = {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    allowTouchMove: true
  }

  private swiperInstance: any;
  private autoplayDelay = this.config.autoplay.delay;

  ngAfterViewInit(): void {
    this.swiper = this.swiperRef?.nativeElement.swiper;

    if (isPlatformBrowser(this.platformId)) {

      if (this.swiperRef && this.swiperRef.nativeElement) {
        const swiperEl = this.swiperRef.nativeElement;

        Object.assign(swiperEl, this.config);

        // Initialiser le Custom Element Swiper (crée l'instance Swiper interne)
        swiperEl.initialize();

        // Récupérer l'instance Swiper pour interagir avec elle
        this.swiperInstance = swiperEl.swiper;

        // Configuration des écouteurs d'événements et démarrage de la barre de progression
        if (this.swiperInstance) {
          this.setupSwiperEvents();
          this.startProgressBar(); // Démarrer la barre dès que le Swiper est prêt
        }
      }
    }
  }

  onNavigationEvent(param: number): void {
    param > 0 ? this.swiper.slideNext() : this.swiper.slidePrev();
  }

  private setupSwiperEvents(): void {
    if (this.swiperInstance) {
      this.swiperInstance.on('slideChangeTransitionEnd', () => {
        this.resetProgressBar();
        this.startProgressBar();
      });

      this.swiperInstance.on('autoplayStop', () => {
        this.resetProgressBar(); // Arrête la barre si l'autoplay s'arrête
      });

      this.swiperInstance.on('autoplayStart', () => {
        this.startProgressBar(); // Redémarre la barre si l'autoplay reprend
      });

      if (this.config.autoplay.disableOnInteraction) {
        this.swiperInstance.on('touchStart', () => {
          this.resetProgressBar(); // Arrête la barre immédiatement si l'utilisateur touche
        });
      }
    }
  }

  private startProgressBar(): void {
    // Vérifier si nous sommes sur le navigateur et si les éléments existent
    if (isPlatformBrowser(this.platformId) && this.progressBar && this.autoplayDelay > 0) {
      const barElement = this.progressBar.nativeElement;
      barElement.style.width = '0%';
      barElement.style.animation = 'none'; // Effacer l'animation précédente

      // Petit délai pour forcer le "reflow" et s'assurer que l'animation redémarre bien de zéro
      setTimeout(() => {
        barElement.style.animation = `fillProgressBar ${this.autoplayDelay / 1000}s linear forwards`;
      }, 10);
    }
  }

  private resetProgressBar(): void {
    // Vérifier si nous sommes sur le navigateur et si les éléments existent
    if (isPlatformBrowser(this.platformId) && this.progressBar) {
      const barElement = this.progressBar.nativeElement;
      barElement.style.animation = 'none'; // Arrêter l'animation en cours
      barElement.style.width = '0%'; // Réinitialiser la largeur
    }
  }

}
