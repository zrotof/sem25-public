import { Component } from '@angular/core';
import { CampainAmbassadorBannerComponent } from './components/campain-ambassador-banner/campain-ambassador-banner.component';
import { CampainAmbassadorProcessComponent } from './components/campain-ambassador-process/campain-ambassador-process.component';
import { CampainAmbassadorFormComponent } from './components/campain-ambassador-form/campain-ambassador-form.component';

@Component({
  selector: 'app-campain-ambassador-container',
  standalone: true,
  imports: [
    CampainAmbassadorBannerComponent,
    CampainAmbassadorProcessComponent,
    CampainAmbassadorFormComponent
  ],
  templateUrl: './campain-ambassador-container.component.html',
  styleUrls: ['./campain-ambassador-container.component.scss']
})
export class CampainAmbassadorContainerComponent {

}
