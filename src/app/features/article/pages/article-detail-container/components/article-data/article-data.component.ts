import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NgIf } from '@angular/common';
import { Article } from 'src/app/shared/models/blog';
import { BlogType } from 'src/app/shared/enums/blog-type';
import { ConvertTimeZoneToDatePipe } from 'src/app/shared/pipes/convertTimeZoneToDate/convert-timezone-to-date.pipe';
import { ConvertStringLabelToFontawesomeIconPipe } from 'src/app/shared/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ArticleVideoPlayerComponent } from '../../../../../../shared/components/article-video-player/article-video-player.component';

@Component({
  selector: 'app-article-data',
  standalone: true,
  imports: [
    NgIf,
    ConvertTimeZoneToDatePipe,
    ConvertStringLabelToFontawesomeIconPipe,
    FontAwesomeModule,
    ArticleVideoPlayerComponent
  ],
  templateUrl: './article-data.component.html',
  styleUrls: ['./article-data.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleDataComponent {
  @Input() data !: Article;

}
