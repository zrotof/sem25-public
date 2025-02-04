import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AmbassadorBanner } from 'src/app/shared/models/ambassador-banner';
import { CampainTeam } from 'src/app/shared/models/campain-team';
import { SecondaryHeroBanner } from 'src/app/shared/models/secondar-hero-banner';
import { CandidateService } from 'src/app/shared/services/candidate/candidate.service';
import { HeroBannerService } from 'src/app/shared/services/hero-banner/hero-banner.service';
import { AsyncPipe } from '@angular/common';
import { AmbassadorBannerComponent } from '../../../../shared/components/ambassador-banner/ambassador-banner.component';
import { ProgramBannerComponent } from '../../../../shared/components/program-banner/program-banner.component';
import { CampainVideoComponent } from './components/campain-video/campain-video.component';
import { BiographyComponent } from './components/biography/biography.component';
import { TopAboutComponent } from './components/top-about/top-about.component';
import { SecondaryHeroComponent } from '../../../../shared/components/secondary-hero/secondary-hero.component';

@Component({
    selector: 'app-candidate-container',
    templateUrl: './candidate-container.component.html',
    styleUrls: ['./candidate-container.component.scss'],
    standalone: true,
    imports: [SecondaryHeroComponent, TopAboutComponent, BiographyComponent, CampainVideoComponent, ProgramBannerComponent, AmbassadorBannerComponent, AsyncPipe]
})
export class CandidateContainerComponent implements OnInit {

  secondaryHeroBannerData$ !: Observable<SecondaryHeroBanner>;
  
  ambassadorBanner !: AmbassadorBanner;

  //campainTeam$ !: Observable<CampainTeam[]>; 

  heroBannerId: string = "candidat";

  constructor(
    //private candidateService : CandidateService,
    private heroService : HeroBannerService
  ){}

  ngOnInit(): void {
    this.getSencondaryHeroBannerData(this.heroBannerId);
    this.initAmbassadorBanner();
    //this.getCampainTeam();
  }

  getSencondaryHeroBannerData(id : string) : void {
    this.secondaryHeroBannerData$ = this.heroService.getSecondaryHeroData(id);
  }

  initAmbassadorBanner() : void {
    this.ambassadorBanner = {
      text : "Passez à l'action et devenez un Ambassadeur de Campagne. Rejoignez notre communauté passionnée, partagez notre vision, soyez le moteur du changement.",
      image : "../../../../../assets/img/campain-ambassador/crowded.jpeg",
      alt : ''
    }
  }

/*
  getCampainTeam() : void{
    this.campainTeam$ = this.candidateService.getCampainTeam();
  }
*/
}
