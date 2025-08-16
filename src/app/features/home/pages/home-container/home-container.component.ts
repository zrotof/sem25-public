import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/shared/models/blog';
import { BlogService } from 'src/app/shared/services/blog/blog.service';
import { AsyncPipe } from '@angular/common';
import { HomeLastNewsComponent } from './components/home-last-news/home-last-news.component';
import { HomeCampainAbassadorComponent } from './components/home-campain-abassador/home-campain-abassador.component';
import { HomePactComponent } from './components/home-pact/home-pact.component';
import { ProgramBannerComponent } from '../../../../shared/components/program-banner/program-banner.component';
import { AboutCandidateComponent } from './components/about-candidate/about-candidate.component';
import { CampainCounterEventComponent } from './components/campain-counter-event/campain-counter-event.component';
import { SwipingHeroBannerComponent } from './components/swiping-hero-banner/swiping-hero-banner.component';
import { SeoService } from 'src/app/shared/services/seo/seo.service';
import { SEO_DATA } from '../../../../shared/constants/seo.constants';

@Component({
    selector: 'app-home-container',
    templateUrl: './home-container.component.html',
    styleUrls: ['./home-container.component.scss'],
    standalone: true,
    imports: [
      AsyncPipe,
      SwipingHeroBannerComponent, 
      CampainCounterEventComponent, 
      AboutCandidateComponent, 
      ProgramBannerComponent, 
      HomePactComponent, 
      HomeCampainAbassadorComponent, 
      HomeLastNewsComponent
    ]
})
export class HomeContainerComponent implements OnInit {

  
  private blogService = inject(BlogService);
  private seoService = inject(SeoService);

  lastNews$ !: Observable<Article[]>;

  ngOnInit(): void {
    this.setSeoTags();
    this.getLastNews();
  }

  getLastNews() : void {
    const queryParams = "limit=7";
    this.lastNews$ = this.blogService.getBlogArticlesByRubricId(queryParams);
  }

  setSeoTags() {
    const seo = SEO_DATA['home'];
    console.log(seo);
  }
}
