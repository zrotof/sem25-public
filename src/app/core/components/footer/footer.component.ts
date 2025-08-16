import { Component, inject } from '@angular/core';
import { Network } from 'src/app/shared/models/network';
import { UtilsService } from 'src/app/shared/services/utils/utils.service';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from 'src/app/shared/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    imports: [
        NgOptimizedImage,
        RouterLink,
        FontAwesomeModule,
        ConvertStringLabelToFontawesomeIconPipe
    ]
})

export class FooterComponent {

  private readonly utilsService = inject(UtilsService);

  networks = this.utilsService.getSocialMediaNetWorks();

  actLinks = [
    /*
      {
        label : "Nous contacter",
        link : "/contact"
      },
    */
    {
      label: "Ambassadeur de campagne",
      link: "/devenir-ambassadeur-de-campagne"
    },
    {
      label: "Faire un don",
      link: "/dons"
    }
  ]

  informLinks = [
    {
      label: "Accueil",
      link: ""
    },
    {
      label: "Agenda",
      link: "/agenda"
    },
    {
      label: "Dernières actualités",
      link: "/articles"
    },
    {
      label: "Le candidat",
      link: "/le-candidat"
    },
    {
      label: "Le programme",
      link: "/le-programme"
    },
    {
      label: "Live / Replays",
      link: "/lives"
    }
  ]

  apps: Network[] = [
    {
      sourceImg: "../../../assets/img/apps/app-store.webp",
      link: "",
      name: "App store",
      icon: ""
    },
    {
      sourceImg: "../../../assets/img/apps/android.webp",
      link: "",
      name: "Android",
      icon: ""
    }
  ];
}
