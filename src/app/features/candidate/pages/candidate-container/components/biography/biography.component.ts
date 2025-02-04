import { Component } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-biography',
  standalone: true,
  imports: [
    NgFor,
    NgClass
  ],
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.scss']
})
export class BiographyComponent {

  biographyBlocs = [
    {
      date : "2006 - 2013",
      title:"Economiste de classe exceptionnelle",
      altImg:"",
      texts : [
        {text : "Économiste de formation, Amadou Bâ est un Inspecteur principal des Impôts et des Domaines de classe exceptionnelle. Il est aussi Professeur associé à l’École nationale d’Administration (ENA) et au Centre de formation de la BCEAO (Banque centrale des États de l’Afrique de l’ouest). Ayant gravi tous les échelons de l’Administration fiscale, il dirige la Direction générale des Impôts et des Domaines de 2006 à 2013. Durant cette période, il apporte de grandes réformes qui conduisent à la modernisation du service."},
      ]
    },
    {
      date: "2013",
      title:"Révision, Réformes et rénovation",
      altImg:"",
      texts : [
        {text : "La modernisation de la Direction générale des Impôts et des Domaines entreprise par Amadou Bâ se traduit aussi par l’adoption des outils modernes de management basés sur la gestion axée sur les résultats. C’est ainsi que le Plan de développement stratégique de l’administration fiscale, préparé entièrement en interne, est adopté. Il est complété par le Contrat de performance, le premier dans l’administration publique sénégalaise, un contrat d’objectifs et de moyens avec la tutelle. "},
        {text : "Les résultats de toutes ces réformes ne se font pas attendre : les recettes fiscales connaissent une augmentation fulgurante ; les agents sont motivés, leur lieu et outils de travail sont modernisés ; des profils diversifiés sont recrutés."},
      ]
    },
    {
      date: "2013",
      title:"Modernisation de la DGID",
      altImg:"",
      texts : [
        {text : "En plus de la rénovation des bâtiments administratifs, il entreprend un vaste chantier d’informatisation, en équipant tous les bureaux et tous les agents de matériel informatique de dernière génération, et de digitalisation avec le lancement intégral de SYGTAS (le Système de gestion des impôts et des taxes). Sa réforme des structures aboutit à la segmentation de la population fiscale : les centres des grandes entreprises, des moyennes entreprises et la direction chargée de la Coopération internationale sont créés. Il lance en même temps la révision en profondeur du système fiscal à travers la refonte totale du Code général des impôts."},
      ]
    },
    {
      date : "2013-2017",
      title:"La matérialisation du Plan Sénégal Émergent",
      altImg:"",
      texts : [
        {text : "Après sept années de dur labeur à la tête de la Direction générale, le Président de la République Macky Sall lui renouvelle sa confiance. Il le nomme Ministre de l’Économie et des Finances pendant deux ans, puis Ministre de l’Économie, des Finances et du Plan pendant quatre ans. Dès son entrée dans le gouvernement, il prend en main aussitôt la matérialisation de la vision du Chef de l’État qui a été élu un an auparavant. C’est ainsi qu’il prend à bras-le-corps le chantier du Plan Sénégal émergent (PSE). Il mobilise une équipe jeune et dynamique autour de lui. Le rythme est infernal, les délais serrés, mais un excellent document de planification stratégique est produit. Une large concertation est ouverte aux niveaux national et international. Un consensus se dégage autour du PSE et de son financement. Un véritable succès s’ensuit. Les chantiers colossaux sont entrepris et finalisés tambour battant : l’autoroute « ila Touba », le Train express régional, la nouvelle ville de Diamniadio (le stade omnisport, l’arène national, l’hôtel 5 étoiles, le Centre de conférence international, les sphères administratives, etc.). La mise en œuvre du PSE, notamment le premier plan d’action prioritaire, créée une dynamique de croissance forte et soutenue sur cinq années consécutives."},
      ]
    },
    {
      date : "2019",
      title:"Ministre des Affaires étrangères et des Sénégalais de l’Extérieur",
      altImg:"",
      texts : [
        {text : "En 2019, au lendemain de la réélection du Président Macky Sall à la tête de l’État, il nomme Amadou Bâ Ministre des Affaires étrangères et des Sénégalais de l’Extérieur, poste qu’il occupe pendant deux ans. Il travaille à l’approfondissement de la coopération avec les partenaires stratégiques traditionnels et contribue à la diversification des partenaires du Sénégal, conformément à la doctrine du partenariat « sans exclusive, ni exclusivité » voulue par le Chef de l’Etat, dans le seul but d’attirer les investissements étrangers, créateurs d’emplois et de richesse partagée. Amadou BA joue aussi un grand rôle dans la gestion de la COVID-19. Il coordonne l’acquisition de produits de prévention et de matériels sanitaires, prend en charge les ressortissants sénégalais en Chine, le rapatriement des personnes décédées à l’étranger, l’assistance des Sénégalais vivant à l’extérieur. Le Sénégal est cité parmi les pays qui ont mieux réussi la gestion de la pandémie."},
      ]
    },
    {
      date: "2022",
      title:"Premier Ministre",
      altImg:"",
      texts : [
        {text : "Deux ans après être sorti du gouvernement, le Président de la République Macky Sall fait appel à nouveau à Amadou BA en le nommant Premier Ministre. Le contexte n’est pas facile : les effets de la pandémie et de la guerre en Ukraine se font lourdement sentir au Sénégal, en Afrique et dans le monde entier. Les mesures d’allègement du coût de la vie et de soutien à l’emploi et l’entreprenariat des jeunes, la lutte contre les inondations, la cherté du loyer constituent ses principales priorités. Mais de façon plus globale, Amadou Bâ met en œuvre la politique de redynamisation de l'économie nationale pour créer de nouveaux emplois. Il a pour principale mission de rebâtir l’économie pour éviter de perdre les acquis du PSE. Il engage aussitôt l’amélioration de la gestion des finances publiques dans le but de renforcer le système économique et asseoir les bases d’une croissance forte et de dégager des marges de manœuvre budgétaires fortes."},
      ]
    },
    {
      date: "2023",
      title:"Premier Ministre, Ministre de l’Élevage et des Productions animales et Ministre des Sports",
      altImg:"",
      texts : [
        {text : "Sept mois après sa nomination à la tête du Gouvernement, le Président de la République nomme Amadou BA Ministre de l’Élevage et des Productions animales et Ministre des Sports, cumulativement avec ses fonctions de Premier Ministre. En tant que ministre des Sports, il met l’accent particulièrement sur le développement et la gestion performante des infrastructures et des équipements sportifs. Il coordonne la préparation et la présentation de la candidature du Sénégal pour l’organisation de la Coupe d’Afrique de Nations de football de 2027 que le pays n’a abrité qu’une seule fois en 2012. En outre, il maintient la dynamique de victoire que le Sénégal n’a jamais connue que sous l’ère du Président Macky Sall. C’est ainsi que la Coupe d’Afrique de football U 17 est remportée pour la première, à la suite de la Coupe d’Afrique des Nations et la Coupe d’Afrique U 20. Les Lioncelles remportent le tournoi de Basket lors des Jeux de la Francophonie de Kinshasa, alors que la délégation sénégalaise gagne 25 médailles au total. Cette culture de la « gagne » insufflée par le Chef de l’Etat se manifeste également dans les autres disciplines sportives. Comme ministre de l’Elevage, Amadou Bâ pose les jalons pour l’atteinte de la souveraineté alimentaire dans le secteur et fait de la création d’emplois durables et la génération de revenus décents son combat. Il matérialise la volonté du Chef de l’Etat d’améliorer la valeur génétique et la productivité du cheptel, à travers la réception de taurillons importés du Brésil. Il réussit également à placer la sécurité alimentaire du bétail et la santé animale au cœur des priorités des politiques publiques."},
      ]
    },
    {
      date : "2023",
      title:"Candidat de Benno Bokk Yaakaar pour les élections présidentielles",
      altImg:"",
      texts : [
        {text : "Sur le plan politique, Amadou BA rejoint le parti du Président de la République Macky Sall en 2014. Il gravit vite les échelons. Il intègre le Secrétariat exécutif national. Il choisit de militer à la base, en s’investissant aux Parcelles Assainies, dans la proche banlieue dakaroise, secteur réputé le plus difficile, politiquement ; quartier le plus populeux du pays. De grands dignitaires du parti au pouvoir et des leaders forts de l’opposition y ont élu domicile. Mais il se fait vite adopter par les populations qui reconnaissent que c’est son fief. Amadou BA est choisi par le Président Macky Sall pour diriger la liste départementale de Dakar aux élections législatives de 2017. Il remporte largement les élections à Dakar et aux Parcelles Assainies que le parti au pouvoir n’a pas réussi à gagner jusque-là. Il est élu député à l’Assemblée nationale sur la liste départementale. En 2019, le président le désigne Coordonnateur de la région de Dakar. Amadou Bâ contribue largement à la réélection du Président de la République, en gagnant la région. En 2021, il dirige la campagne des législatives comme second sur la liste nationale, aux côtés d’Aminata Touré. Il est élu à nouveau député. Il démissionne du Parlement, comme en 2017, lorsqu’il est nommé Premier Ministre."},
      ]
    }
  ]
}
