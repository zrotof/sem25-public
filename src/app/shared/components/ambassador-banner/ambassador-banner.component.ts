import { Component, Input } from '@angular/core';
import { AmbassadorBanner } from '../../models/ambassador-banner';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ambassador-banner',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './ambassador-banner.component.html',
  styleUrls: ['./ambassador-banner.component.scss']
})
export class AmbassadorBannerComponent {

  @Input() ambassadorBanner !: AmbassadorBanner;
}
