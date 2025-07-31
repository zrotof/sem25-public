import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-program-banner',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './program-banner.component.html',
  styleUrls: ['./program-banner.component.scss']
})
export class ProgramBannerComponent {

    figths = [
    {
      image : "../../assets/img/purs/health.png",
      title : "Éducation",
      text: "Nous refonderons le système éducatif camerounais en repensant les contenus pour qu'ils reflètent notre histoire nationale. Nous restaurerons les bourses d'État et créerons des universités techniques et professionnelles, ainsi que des centres de services scolaires décentralisés. Notre objectif : une éducation patriotique et inclusive pour tous.",
      link : "/le-projet/sante"
    },
    {
      image : "../../../../../assets/img/purs/work.png",
      title : "Sécurité",
      text: "Nous renforcerons la sécurité en viabilisant économiquement et socialement nos frontières et en créant un institut de recherche dédié. Nous améliorerons les conditions de vie de nos agents de sécurité et de défense, et impliquerons chaque citoyen dans la sécurité nationale.",
      link : "/le-projet/creation-d-emploi"
    },
    {
      image : "../../../../../assets/img/purs/education.png",
      title : "Économie",
      text: "Nous prônons une industrialisation volontariste et la sortie du Franc CFA pour une monnaie nationale, afin de réduire notre dépendance aux importations. Nous mettrons en place un fonds de garantie de souveraineté de 300 milliards de FCFA annuel pour soutenir la création d'un million de PME/PMI, générant 5 millions d'emplois directs en 5 ans.",
      link : "/le-projet/education"
    },
    {
      image : "../../../../../assets/img/purs/social-security.png",
      title : "Santé",
      text: "Nous créerons une caisse maladie avec une cotisation de 1000 FCFA par mois, garantissant la gratuité des soins de santé pour tous. Nous améliorerons le plateau technique de nos hôpitaux, renforcerons la recherche sur les plantes médicinales et institutionnaliserons la médecine traditionnelle.",
      link : "/le-projet/securite-sociale-et-protection-sociale"
    }
  ]
}
