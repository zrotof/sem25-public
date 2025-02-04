import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Article, ArticleCategory } from 'src/app/shared/models/blog';
import { ConvertTimeZoneToDatePipe } from 'src/app/shared/pipes/convertTimeZoneToDate/convert-timezone-to-date.pipe';
import { ConvertStringLabelToFontawesomeIconPipe } from 'src/app/shared/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavigationExtras, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-article-detail-side-block',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    ConvertTimeZoneToDatePipe,
    ConvertStringLabelToFontawesomeIconPipe,
    FontAwesomeModule,
    RouterLink
  ],
  templateUrl: './article-detail-side-block.component.html',
  styleUrls: ['./article-detail-side-block.component.scss']
})
export class ArticleDetailSideBlockComponent {


  @Input() lastArticles !: Article[];
  @Input() blogCategories !: ArticleCategory[];

  constructor( private router : Router){}

  goToArticlesMenuList(rubricId : string){
    const navigationextras : NavigationExtras = {
      state : {
        id: rubricId
      }
    };

    this.router.navigateByUrl('/articles', navigationextras)
  }
}
