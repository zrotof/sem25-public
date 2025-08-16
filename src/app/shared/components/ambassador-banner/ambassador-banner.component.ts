import { Component, Input } from '@angular/core';
import { AmbassadorBanner } from '../../models/ambassador-banner';
import { RouterLink } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'app-ambassador-banner',
    imports: [
        RouterLink,
        InputTextModule
    ],
    templateUrl: './ambassador-banner.component.html',
    styleUrls: ['./ambassador-banner.component.scss']
})
export class AmbassadorBannerComponent {

  @Input() ambassadorBanner !: AmbassadorBanner;
}
