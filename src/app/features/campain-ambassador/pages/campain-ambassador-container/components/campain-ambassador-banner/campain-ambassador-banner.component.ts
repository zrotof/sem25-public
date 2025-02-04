import { Component } from '@angular/core';

@Component({
  selector: 'app-campain-ambassador-banner',
  standalone: true,
  templateUrl: './campain-ambassador-banner.component.html',
  styleUrls: ['./campain-ambassador-banner.component.scss']
})
export class CampainAmbassadorBannerComponent {

  scrollToAnchor() : void {
    const anchor = "ambassador-campain-form"
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
