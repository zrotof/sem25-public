import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Article } from 'src/app/shared/models/blog';
import { ConvertTimeZoneToDatePipe } from 'src/app/shared/pipes/convertTimeZoneToDate/convert-timezone-to-date.pipe';
import { ConvertStringLabelToFontawesomeIconPipe } from 'src/app/shared/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ArticleVideoPlayerComponent } from '../../../../../../shared/components/article-video-player/article-video-player.component';

@Component({
    selector: 'app-article-data',
    imports: [
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
  @Input() data !: Article | null ;

}
