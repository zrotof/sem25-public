import { Component } from '@angular/core';
import { NgClass, NgFor, NgOptimizedImage } from '@angular/common';
import { Network } from 'src/app/shared/models/network';
import { UtilsService } from 'src/app/shared/services/utils/utils.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from 'src/app/shared/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';

@Component({
  selector: 'app-biography',
  standalone: true,
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.scss'],
  imports: [
    NgFor,
    NgClass,
    NgOptimizedImage,
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe
  ],
})

export class BiographyComponent {

  networks !: Network[];

  constructor(private utilsService: UtilsService) { }


  ngOnInit(): void {
    this.getSocialMediaNetworks();
  }

  getSocialMediaNetworks() {
    this.networks = this.utilsService.getSocialMediaNetWorks();
  }

  biographyBlocs = [
    {
      date: "2006 - 2013",
      title: "Parcours Entrepreneurial : Vision et Audace",
      altImg: "",
      image: "../../../../../../../assets/img/candidate/serge-espoir-matomba-entrepreneur-a-succes-for-you-media-thon-super.jpg",
      texts: [
        { text: "À seulement 17 ans, Serge Espoir Matomba fonde sa première entreprise, Espoir LDA, un cabinet d'études et d'import-export. Son ambition le mène ensuite au Portugal au début des années 2000, où il crée Ton Super, spécialisée dans l'intermédiation en hydrocarbures, avant d'étendre ses activités au Cameroun en 2009. Il est également le fondateur du Groupe de Media FOR YOU MEDIA AFRICA, qui regroupe cinq médias." },
      ]
    },
    {
      date: "2013",
      title: "Débuts et Carrière Politique",
      altImg: "",
      image: "../../../../../../../assets/img/candidate/elections-presidentielles-2018-serge-espoir-matomba.jpg",

      texts: [
        { text: "En 2008, Serge Espoir Matomba retourne au Cameroun et, après avoir envisagé une ONG, fonde en 2010 le parti politique Peuple Uni pour la Rénovation Sociale (PURS), dont il est élu Premier Secrétaire. Son engagement se concrétise en 2013 et 2020 par son élection en tant que Conseiller municipal de l'arrondissement de Douala 4e, et Grand Conseiller à la Mairie de la Ville de Douala." },
      ]
    },
    {
      date: "2013",
      title: "Actions et Prises de Position Clés",
      altImg: "",
      image: "../../../../../../../assets/img/candidate/serge-espoir-matomba-homme-de-terrain-pres-des-populations.jpg",

      texts: [
        { text: "Serge Espoir Matomba s'est distingué par des actions fortes, comme sa grève de la faim en juillet 2014 pour protester contre l'augmentation du prix des hydrocarbures et la ratification des Accords de Partenariat Économique, qu'il jugeait préjudiciables. Concernant la crise anglophone, il a constamment appelé à un dialogue inclusif, à la libération des prisonniers et a proposé la création d'une 'force tampon' pour la médiation. Il a également, à plusieurs reprises, demandé la démission du président Paul Biya." },
      ]
    },
    {
      date: "2019",
      title: "Candidatures Présidentielles",
      altImg: "",
      image: "../../../../../../../assets/img/candidate/elections-presidentielles-2018-serge-espoir-matomba.jpg",

      texts: [
        { text: "Investi par son parti, Serge Espoir Matomba a été candidat à l'élection présidentielle camerounaise de 2018, utilisant activement les réseaux sociaux pour sa campagne. Il est de nouveau candidat à l'éélection présidentielle de 2025, où il prône notamment la sortie du Cameroun du Franc CFA pour une plus grande souveraineté économique." },
      ]
    },
    {
      date: "2022",
      title: "Distinctions et Reconnaissances",
      altImg: "",
      image: "../../../../../../../assets/img/candidate/distinctions-et-reconnaissance-de-serge-espoir-matomba.jpg",

      texts: [
        { text: "Le dynamisme et l'engagement de Serge Espoir Matomba ont été reconnus à plusieurs reprises. Il a été désigné Meilleur jeune leader politique et étoile montante du management en 2013, a reçu la palme d’or de l’Homme Politique de l’année 2018, et a été primé Meilleur homme politique et prix du dynamisme politique en 2020, ainsi que Meilleur homme politique 2022 et prix de l'excellence Africain du Mérite Patriotique en 2023." },
      ]
    }
  ]
}
