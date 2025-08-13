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
      title: "ÉDUCATION",
      texts: [
        "Nous refonderons le système éducatif camerounais en repensant les contenus pour qu'ils reflètent notre histoire nationale.",
        "Nous restaurerons les bourses d'État et créerons des universités techniques et professionnelles, ainsi que des centres de services scolaires décentralisés. Notre objectif : une éducation patriotique et inclusive pour tous."
      ]
    },
    {
      title: "SÉCURITÉ",
      texts: [
        "Nous renforcerons la sécurité en viabilisant économiquement et socialement nos frontières et en créant un institut de recherche dédié.",
        "Nous améliorerons les conditions de vie de nos agents de sécurité et de défense, et impliquerons chaque citoyen dans la sécurité nationale."
      ]
    },
    {
      title: "DEVOIR MÉMOIRE",
      texts: [
        "L'exigence d'une reconnaissance officielle et la réparation des crimes coloniaux subis par son peuple camerounais. Ces réparations, qu’elles soient matérielles, symboliques ou mémorielles, seront intégrées à une politique nationale de souveraineté, de justice historique et de renaissance culturelle.", 
        "Cette reconnaissance des crimes coloniaux entrainera l’exigence de rompre avec les structures héritées du colonialisme(CFA, accords inégaux, concessions minières).",
        "Néanmoins, la réparation ne serait pas seulement financière : elle inclurait un volet mémoire et transmission dans l’éducation, les musées, les archives, pour rétablir la vérité historique et restaurer la dignité du peuple camerounais.",
      ]
    },
    {
      title: "SANTÉ",
      texts: [
        "Nous créerons une caisse maladie avec une cotisation de 1000 FCFA par mois, garantissant la gratuité des soins de santé pour tous.",
        "Nous améliorerons le plateau technique de nos hôpitaux, renforcerons la recherche sur les plantes médicinales et institutionnaliserons la médecine traditionnelle."
      ]
    },
    {
      title: "ÉCONOMIE",
      texts: [
        "Nous prônons une industrialisation volontariste et la sortie du Franc CFA pour une monnaie nationale, afin de réduire notre dépendance aux importations.",
        "Nous mettrons en place un fonds de garantie de souveraineté de 300 milliards de FCFA annuel pour soutenir la création d'un million de PME/PMI, générant 5 millions d'emplois directs en 5 ans"
      ]
    }
  ]
}
