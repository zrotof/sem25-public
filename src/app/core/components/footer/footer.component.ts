import { Component, OnInit } from '@angular/core';
import { Network } from 'src/app/shared/models/network';
import { UtilsService } from 'src/app/shared/services/utils/utils.service';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: true,
    imports: [NgFor, RouterLink]
})
export class FooterComponent implements OnInit {

  constructor( private utilsService: UtilsService){}

  networks !: Network[] ;

  apps : Network[] = [
    {
      sourceImg : "../../../assets/img/apps/app-store.webp",
      link : "",
      name : "App store"
    },
    {
      sourceImg : "../../../assets/img/apps/android.webp",
      link : "",
      name : "Android"
    }
  ]

  actLinks = [
    {
      label : "Nous contacter",
      link : "/contact"
    },
    {
      label : "Ambassadeur de campagne",
      link : "/devenir-ambassadeur-de-campagne"
    },
    {
      label : "Faire un don",
      link : "/dons"
    }
  ]

  informLinks = [
    {
      label : "Accueil",
      link : ""
    },
    {
      label : "Agenda",
      link : "/agenda"
    },
    {
      label : "Dernières actualités",
      link : "/articles"
    },
    {
      label : "Le candidat",
      link : "/le-candidat"
    },
    {
      label : "Le programme",
      link : "/le-programme"
    },
    {
      label : "Live / Replays",
      link : "/lives"
    }
  ]

  ngOnInit(): void {
      this.getSocialMediaNetworks();
  }


  getSocialMediaNetworks(){
    this.networks = this.utilsService.getSocialMediaNetWorks();
  }


}
