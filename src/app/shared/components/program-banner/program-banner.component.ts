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
      title : "Santé",
      text: "Le domaine de la santé au Cameroun est à un niveau très basique. Nous déplorons le manque d’infrastructures adéquates à l’administration des soins aux populations. L’inexistence des centres de santé dans les villages reculés, l’insuffisance de ces centres dans les villes et surtout le manque de matériels nécessaires aux soins à prodiguer aux patients. Outre le problème d’infrastructure, nous déplorons également la non qualification des auxiliaires de santé",
      link : "/le-projet/sante"
    },
    {
      image : "../../../../../assets/img/purs/work.png",
      title : "Création d’Emploi",
      text: "Le taux de chômage se rapportant à la population urbaine est de 76%. Le nombre moyen de jeunes qui arrivent sur le marché de l’emploi est de 70% chaque année. Notre objectif est de réduire totalement ce taux exorbitant, et pour atteindre cet objectif, nous avons comme plan de créer 5 000 000 d’emplois sur une période de 5 ans grâce aux mesures d’accompagnement des PME/PMI désireuses de s’installer sur le territoire",
      link : "/le-projet/creation-d-emploi"
    },
    {
      image : "../../../../../assets/img/purs/education.png",
      title : "Éducation",
      text: "Tout comme la santé, l’éducation est un secteur très amoché par les différents systèmes mis en place. Nous déplorons le manque d’infrastructure et surtout l’accentuation des formations techniques garantissant la dépendance dès obtention des diplômes",
      link : "/le-projet/education"
    },
    {
      image : "../../../../../assets/img/purs/social-security.png",
      title : "Sécurité Et Protection Sociale",
      text: "Tout camerounais travailleur ou non, a le droit à une assurance, une couverture minimale de base pour chaque citoyen camerounais. Cette mesure comme instaurée sous d’autres cieux a permis de réduire considérablement le niveau de pauvreté des populations et favorise ainsi leur meilleure insertion dans un climat de marche vers le développement. Nous disposons présentement des branches ci-après reliés au secteur formel. Nous rappelons que le secteur formel couvre ses acteurs par des régimes de soins de santé différents en fonction de leurs statuts. (Employés du secteur public, privé, membres des forces armés)",
      link : "/le-projet/securite-sociale-et-protection-sociale"
    }
  ]
}
