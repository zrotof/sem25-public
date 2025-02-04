import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProgramsService } from 'src/app/shared/services/programs/programs.service';
import { Program } from 'src/app/shared/models/program';
import { Observable, map } from 'rxjs';
import { HeroBannerService } from 'src/app/shared/services/hero-banner/hero-banner.service';
import { SecondaryHeroBanner } from 'src/app/shared/models/secondar-hero-banner';
import { SecondaryHeroComponent } from "../../../../shared/components/secondary-hero/secondary-hero.component";

@Component({
    selector: 'app-program-details',
    standalone: true,
    templateUrl: './program-details.component.html',
    styleUrls: ['./program-details.component.scss'],
    imports: [
      AsyncPipe,
      SecondaryHeroComponent]
})
export class ProgramDetailsComponent implements OnInit{

  secondaryHeroBannerData$ !: Observable<SecondaryHeroBanner>;

  program$ !: Observable<Program>;

  heroBannerId !: string;

  breadcrumbList : string[] = [
    "Agrigulture",
    "Santé",
    "Économie",
    "Éducation",
    "Transport",
    "Travail",
    "Technologie",
    "Famille",
    "Formation"
  ]
  constructor(
    private activateRoute: ActivatedRoute,
    private programService : ProgramsService,
    private heroService : HeroBannerService
  ) {}

  ngOnInit(): void {
    this.getHeroBannerId();
    this.getSencondaryHeroBannerData(this.heroBannerId);
    this.getProgramData();
  }

  private getHeroBannerId() : void{
    const param = this.activateRoute.snapshot.url[0].path;
    this.heroBannerId = "program-"+param;
  }

  getSencondaryHeroBannerData(id : string) : void {
    this.secondaryHeroBannerData$ = this.heroService.getSecondaryHeroData(id).pipe(
      map((hero: SecondaryHeroBanner) => {

        const isAlreadyIncludes = hero.menus.some((menu) => this.breadcrumbList.includes(menu.label as string))
        
        //We set the route param if not setted before
        if(isAlreadyIncludes === false){
          hero.menus.push({
            label: hero.title,
            url: ""
          });
        }

        return hero;
      })
    );
  }

  getProgramData(){
    
    const theme = this.activateRoute.snapshot.paramMap.get('theme')

    if(theme){
      this.program$ = this.programService.getProgramByTheme(theme)
    }

    else{

    }

  }

}
