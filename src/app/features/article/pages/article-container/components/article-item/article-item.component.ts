import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { Article } from 'src/app/shared/models/blog';
import { BlogType } from 'src/app/shared/enums/blog-type';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from 'src/app/shared/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';
import { RouterLink } from '@angular/router';
import { ConvertTimeZoneToDatePipe } from 'src/app/shared/pipes/convertTimeZoneToDate/convert-timezone-to-date.pipe';

@Component({
  selector: 'app-article-item',
  standalone: true,
  imports: [
    NgIf,
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe,
    ConvertTimeZoneToDatePipe,
    RouterLink
  ],
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss']
})
export class ArticleItemComponent {

  @Input() article !: Article;
  videoTypeEnum = BlogType.Video;

}
