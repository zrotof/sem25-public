import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Article } from '../../models/blog';
import { ConvertTimeZoneToDatePipe } from '../../pipes/convertTimeZoneToDate/convert-timezone-to-date.pipe';
import { ConvertStringLabelToFontawesomeIconPipe } from '../../pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BlogType } from '../../enums/blog-type';

@Component({
  selector: 'app-new-item-no-descritpion',
  standalone: true,
  imports: [
    RouterLink,
    ConvertTimeZoneToDatePipe,
    ConvertStringLabelToFontawesomeIconPipe,
    FontAwesomeModule,
    NgIf
  ],
  templateUrl: './new-item-no-descritpion.component.html',
  styleUrls: ['./new-item-no-descritpion.component.scss']
})
export class NewItemNoDescritpionComponent {

  @Input() article !: Article;
  videoTypeEnum = BlogType.Video;

}
