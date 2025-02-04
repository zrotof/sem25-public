import { Component, Input } from '@angular/core';
import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ConvertStringLabelToFontawesomeIconPipe } from '../../pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-secondary-hero',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    NgOptimizedImage,
    RouterLink,
    ConvertStringLabelToFontawesomeIconPipe,
    FontAwesomeModule
  ],
  templateUrl: './secondary-hero.component.html',
  styleUrls: ['./secondary-hero.component.scss']
})
export class SecondaryHeroComponent {

  @Input() hero : any;

}
