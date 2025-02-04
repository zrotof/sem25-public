import { Component, inject, Input, OnInit } from '@angular/core';
import { AsyncPipe} from '@angular/common';
import { Observable, of } from 'rxjs';
import { SecondaryHeroBanner } from 'src/app/shared/models/secondar-hero-banner';
import { BlogService } from 'src/app/shared/services/blog/blog.service';
import { HeroBannerService } from 'src/app/shared/services/hero-banner/hero-banner.service';
import { SecondaryHeroComponent } from 'src/app/shared/components/secondary-hero/secondary-hero.component';
import { ActivatedRoute } from '@angular/router';
import { ArticleDataComponent } from './components/article-data/article-data.component';
import { Article, ArticleCategory } from 'src/app/shared/models/blog';
import { ArticleDetailSideBlockComponent} from './components/article-detail-side-block/article-detail-side-block.component';

@Component({
  selector: 'app-article-detail-container',
  standalone: true,
  imports: [
    AsyncPipe,
    SecondaryHeroComponent,
    ArticleDataComponent,
    ArticleDetailSideBlockComponent
  ],
  templateUrl: './article-detail-container.component.html',
  styleUrls: ['./article-detail-container.component.scss']
})
export class ArticleDetailContainerComponent implements OnInit {
  
  @Input() id !: string;

  private readonly blogService = inject(BlogService);

  secondaryHeroBannerData$ !: Observable<SecondaryHeroBanner>;
  heroBannerId: string = "actualites";
  articleData$ = this.blogService.getArticleById(this.id);
  lastArticles$ !: Observable<Article[]>
  blogCategories$ = this.blogService.getBlogCategoryList();
  
  ngOnInit(): void {
    this.getSencondaryHeroBannerData(this.heroBannerId);
    this.getLastCreatedArticles();
  }

  getSencondaryHeroBannerData(id : string) : void {

    const heroBannerData : SecondaryHeroBanner = {
        id: "",
        image : "../../../../../assets/img/hero-banner/secondary/articles.jpg",
        title : "Dernières Actualités",
        menus : [
          {
            icon : "faHome",
            label : "Accueil",
            url : ""
          },
          {
            label : "Articles",
            url : "/articles"
          },
          {
            label : "..."
          }
        ]
      }

      this.secondaryHeroBannerData$ = of(heroBannerData)
    }

  getLastCreatedArticles() : void {
    const queryParams= "limit=5"
    this.lastArticles$ = this.blogService.getBlogArticlesByRubricId(queryParams);
  }
}
