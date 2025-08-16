import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-program-banner',
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
      title: "RÉPARATION",
      texts: [
        "L'exigence d'une reconnaissance officielle et la réparation des crimes coloniaux subis par son peuple camerounais. Ces réparations, qu’elles soient matérielles ou mémorielles, seront intégrées à une politique nationale de souveraineté, de justice historique et de renaissance culturelle.",
        "Cette reconnaissance des crimes coloniaux entrainera l’exigence de rompre avec les structures héritées du colonialisme(CFA, accords inégaux, concessions minières).",
        "<b>RÉCUPÉRONS CE QUI NOUS A ÉTÉ VOLÉ, BÂTISSONS L’AVENIR !</b>",
        "- Exiger auprès de la France et de l’Europe des excuses officielles pour l’esclavage et les crimes coloniaux.",
        "- Des réparations, y compris financières – ces fonds serviront à construire des écoles, des hôpitaux et des routes.",
        "- Une éducation de qualité pour nos enfants grâce aux réparations",
        "- La restitution de tous nos biens culturels et la création d’un Musée National de la Dignité Africaine"
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
        "<b>Notre propre monnaie = notre souveraineté !<b>",
        "Sortie de la zone du franc CFA et lancement d’une monnaie nationale. Cela contribuera la création d’emplois et l’augmentation des salaires. Stabilité garantie : toutes les économies des citoyens seront conservées à taux 1:1",
        "Nous mettrons en place un fonds de garantie de souveraineté de 300 milliards de FCFA annuel pour soutenir la création d'un million de PME/PMI, générant 5 millions d'emplois directs en 5 ans"
      ]
    }
  ]
}
