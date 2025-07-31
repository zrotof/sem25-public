import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Program } from '../../models/program';

@Injectable({
  providedIn: 'root'
})

export class ProgramsService {

  linkRoot = "/le-programme/";

  programs = [
    {
      id: 'reforme_institutionnelle',
      title: '1. Réforme institutionnelle et gouvernance',
      description: 'Organisation d’un référendum en 2026 pour une nouvelle constitution.',
      list: [
        'Offre gratuite des actes de naissances et des cartes nationales d’identité les trois premiers mois du mandat',
        'Redécoupage administratif : partir de 10 régions à 05 ; de 58 départements à 30',
        'État décentralisé',
        'Créer une fonction publique territoriale (100 000 nouveaux emplois directs dans les CTD)',
        '15 ministères',
        'Lutte contre la corruption : Mise en place des institutions fortes (Agence Nationale de lutte contre la corruption au Cameroun qui aura les compétences de toutes les structures existantes actuelles ; la cours des comptes), Amélioration des conditions de vie et de travail des agents publics',
        'Création des juridictions civiles de l’ordre judiciaire (tribunaux de proximité, tribunal d’instance, tribunaux de Grande Instance, Juridictions de travail)',
        'Les juridictions pénales de l’ordre judiciaire (Tribunaux de police et de gendarmerie, Tribunaux correctionnels, Cour d’Assise pour crime, Cour d’Appel, Cour Suprême Judiciaire)',
        'Ordre administratif (Juridiction de l’ordre administratif, Tribunal administratif, Tribunal de l’éthique et de l’anti-corruption, Cour d’Appel Administrative, Cours Suprême Administrative)',
        'Autres juridictions (Cour Constitutionnelle, la Haute Cour de Justice, la Cour de Sureté de l’Etat et les juridictions spécialisées (tribunal militaire et cour des comptes)',
        'Recensement général de la population et adressage du Cameroun'
      ]
    },
    {
      id: 'diplomatie_diaspora',
      title: '2. Diplomatie et diaspora',
      description: 'Diplomatie et diaspora camerounaises deux entités incontournables de la réussite du programme. La nationalité camerounaise sera inaliénable.',
      list: [
        'La politique économique induit la politique de l’emploi...',
        'Ouverture des ambassades dans tous les pays...',
        'Des consulats pour un meilleur encadrement des Camerounais...',
        'La diplomatie camerounaise sera conduite par le Chef de l’Etat...',
        'Une conférence des ambassadeurs se tiendra tous les deux ans...',
        'La gestion de la politique étrangère du Cameroun sous le PURS...',
        'De nombreuses instances développées pour encadrer...',
        'Une conférence tripartite entre le gouvernement, les CTD et la diaspora...',
        'Dans la banque des PMI/PME rénovée et modulée, une unité spéciale sera réservée...'
      ]
    },
    {
      id: 'identite_nationale',
      title: '3. Identité nationale',
      description: 'L’identité nationale est ce qui forge le sentiment d’appartenance à une même communauté...',
      list: [
        'Adopter une langue nationale comme langue officielle',
        'Valoriser les langues et cultures locales...',
        'Promouvoir les langues nationale et locale dans l’éducation...',
        'Créer et améliorer des services des musés',
        'Créer des symboles unificateurs...',
        'Redéfinir la citoyenneté...'
      ]
    },
    {
      id: 'unite_nationale',
      title: '4. Unité nationale',
      description: 'Cohésion des régions et des communautés, gouvernance équitable...',
      list: [
        'Réconcilier les mémoires...',
        'Renforcer la justice sociale...',
        'Encourager la participation citoyenne...',
        'Pas d’anglophone et pas de francophone : Camerounais tout cours',
        'Solidarité entre citoyens'
      ]
    },
    {
      id: 'souverainete',
      title: '5. Souveraineté',
      description: 'C’est le droit pour un peuple de décider librement de son destin...',
      list: [
        '4.5.1 Souveraineté politique',
        'garantir des institutions indépendantes...',
        '4.5.2 Souveraineté économique et industrielle',
        'Industries, entreprises, fiscalité et emploi...',
        'Sortir du Franc CFA et créer une monnaie nationale',
        'développer une industrie locale forte...',
        'maîtriser les ressources naturelles',
        'Créer une raffinerie d’or à l’Est...',
        'Offrir aux agents économiques le meilleur climat d’investissement...',
        'Développer un cadre plus incitatif à la diaspora...',
        'Financer à travers quatre grandes sources...',
        'Créer les conditions propices à l’attractivité du Cameroun',
        'Intensifier l’industrie manufacturée...',
        'Développer la carte industrielle du Cameroun',
        'Créer une raffinerie au Sud-Ouest...',
        'Améliorer la compétitivité des entreprises...',
        'Mettre en place un fond de garanti de souveraineté de 300 Milliards...',
        '4.5.3 Agriculture et sécurité alimentaire :',
        '100 milliard d’investissement dans l’agriculture...',
        '4.5.4 Souveraineté culturelle et éducative',
        'Repenser les programmes scolaires...',
        'Profil d’homme à former...',
        'Redéfinir le calendrier scolaire...',
        'Instaurer une Loi unique de l’orientation...',
        'Redéfinir un cadre d’orientation curriculaire...',
        'Mettre en œuvre de Nouveaux niveaux d’enseignement...',
        'Restaurer les bourses d’État',
        'Décentraliser la gestion de l’éducation...',
        'Créer un fonds pour la recherche et collaboration...',
        'Créer 04 universités techniques et professionnelles',
        'Financement de l’éducation...'
      ]
    },
    {
      id: 'habitat_logement',
      title: '6. Habitat et logement',
      description: 'Un toit sur chaque tête.',
      list: [
        'Refonte foncière avec la remise des terres aux communautés...',
        'Ramener le prix du sac de ciment à 2000...',
        'Construire de 100 000 logements sur le mandat',
        'Provoquer l’exode urbain...',
        'Développer avec les CTD des politiques de dotation...',
        'Recenser les terrains non occupés...',
        'La refonte du régime foncier',
        'Organiser les états généraux du logement...',
        'Instaurer des réformes financières...',
        'Créer une banque de l’habitat...',
        'Créer un office national du logement social...',
        'Soutenir et accompagner la mise en place des unités de production...',
        'Développement d’une éducation à l’usage des matériaux locaux...',
        'Améliorer les capacités de maîtrise d’ouvrage du CTD...',
        'Soutenir et accompagner la mise en place des mutuelles...',
        'La société civile camerounaise sera mise à contribution...'
      ]
    },
    {
      id: 'renforcement_securite',
      title: '7. Renforcement de la sécurité',
      description: 'Lutte contre l’insécurité, réforme des forces de défense et de sécurité.',
      list: [
        'Viabiliser les frontières...',
        'Créer un institut de recherche sur la sécurité',
        'Faire de chaque citoyen un policier',
        'Améliorer les conditions de vie et de travail des agents publics de sécurité et de défense'
      ]
    },
    {
      id: 'sante_sport',
      title: '8. Santé pour tous et sport',
      description: 'Soins accessibles, hôpitaux rénovés, prévention renforcée.',
      list: [
        'Créer la caisse maladie où chaque citoyen cotisera 1000 par mois...',
        'Améliorer le plateau technique et mise en place d’un fonds spécial...',
        'Revoir les accords avec l’OMS...',
        'Pratiquer la médecine de la santé et non de la maladie',
        'Développer la sécurité alimentaire',
        'Maintenir les Camerounais dans un état meilleur...',
        'Renforcer les budgets des unités de recherches...',
        'Systématiser la disponibilité des statistiques médicales...',
        'Lutter contre l’alcoolisme...',
        'Renforcer et développer la médecine communautaire...',
        'Institutionaliser la médecine traditionnelle',
        'Créer les conditions d’accès à l’égalité aux soins...',
        'Créer des laboratoires d’analyse médicale performants...',
        'Développer au sein des CTD des clubs de sport...',
        'Structurer le sport de compétition...',
        'Créer des lycées de sport dans chaque département',
        'Créer des universités de sports',
        'Créer une agence nationale pour les sportifs...',
        'Réformer les fédérations sportives...',
        'Développer les infrastructures sportives locales et nationales...',
        '500 000 emplois directs et indirects par la politique du sport',
        'Le Cameroun compétira pour l’organisation des coupes du monde...',
        'Les fédérations sportives devront s’aligner sur des valeurs de transparence...'
      ]
    },
    {
      id: 'promotion_culturelle',
      title: '9. Promotion culturelle et artistique',
      description: 'Soutien aux artistes, industries culturelles, patrimoine et expressions locales comme levier d’émancipation.',
      list: [
        'Création et mise en œuvre de la carte professionnelle artistique',
        'Création d’un fonds pour l’industrie du cinéma camerounais',
        'Création d’un fonds pour l’art et la culture',
        'Création d’une agence artistique et culturelle',
        'Création d’un lycée artistique et culturel dans chaque département',
        'Valorisation du statut de chaque métier de l’art et de la culture'
      ]
    },
    {
      id: 'inclusion_handicapes',
      title: '10. Inclusion des personnes handicapées',
      description: 'Accessibilité universelle, intégration scolaire et professionnelle, protection juridique renforcée.',
      list: [
        'Faciliter l’accès à la carte d’invalidité...',
        'Allocation pour l’acquisition du matériel d’aide à la mobilité...',
        'Assurer l’insertion professionnelle des personnes handicapées',
        'Encourager les personnes handicapées à accéder aux postes de responsabilité...'
      ]
    },
    {
      id: 'reduction_inegalites',
      title: '11. Réduction des inégalités',
      description: 'État providence garantissant l’accès aux besoins fondamentaux.',
      list: [
        'Offrir de l’eau potable à chaque Camerounaise et Camerounais.'
      ]
    },
    {
      id: 'transition_ecologique',
      title: '12. Énergie de Transition écologique',
      description: 'Énergie renouvelables, lutte contre la pollution, agriculture durable.',
      list: [
        'Réalisation du projet de modernisation de la SONARA...',
        'Offre énergétique à partir des énergies renouvelables...',
        'Développement de grandes centrales hydroélectriques...',
        'Développement des petites centrales...',
        'Offrir de l’eau potable à chaque Camerounaise et Camerounais.',
        'Construction de nouvelles stations de traitement des eaux...',
        'Décentralisation de la gestion de l’eau...',
        'Protection et surveillance des ressources en eau'
      ]
    }
  ];

  getPrograms(): Observable<Program[]> {
    return of(this.programs)
  }

  getProgramById(id: string): Program | undefined {
    return this.programs.find(program => program.id === id)
  }
}