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
    "id": "identite_nationale",
    "title": "Identité nationale",
    "description": "L’identité nationale est ce qui forge le sentiment d’appartenance à une même communauté. Au Cameroun, cette identité reste fragmentée, héritière d’un passé colonial complexe (français et britannique), avec plus de 250 groupes ethniques et deux langues officielles imposées. Pour construire une véritable identité camerounaise, il faut :",
    "list": [
      "Adopter une langue nationale comme langue officielle",
      "Valoriser les langues et cultures locales, coutumes et symboles camerounais",
      "Promouvoir les langues nationales et locales dans l’éducation, les médias et l’administration",
      "Créer et améliorer des services des musés",
      "Créer des symboles unificateurs : une histoire commune enseignée à l’école, des héros nationaux représentatifs de toutes les régions.",
      "Redéfinir la citoyenneté : au-delà des origines ethniques ou linguistiques, être Camerounais doit être une fierté partagée, fondée sur des valeurs communes."
    ],
    "summary": "Au Cameroun, construire une identité nationale unifiée est une priorité. Cela passe par l'adoption d'une langue officielle nationale, la valorisation des cultures locales et la création de symboles fédérateurs. L'objectif est que chaque citoyen ressente une fierté partagée, au-delà des divisions ethniques et coloniales."
  },
  {
    "id": "education_decolonisee",
    "title": "Éducation décolonisée et patriotique",
    "description": "Repenser les programmes scolaires pour qu’ils reflètent l’histoire, les valeurs et les aspirations camerounaises.",
    "list": [
      "Profil d’homme à former : homme réel ou une image cible. Il s’agit d’un homme qui est maître de lui-même, ouvert à tous les échanges, critiques et non conformiste, c’est-à-dire capable de dire non ; un homme inséré dans son époque, insatisfait et constamment en quête de dépassement. Eternel insatisfait c’est-à-dire en train de se remettre en question, de douter, de ne prendre rien pour acquis.",
      "Redéfinir le calendrier scolaire pour l’adapter à la réalité environnementale du Cameroun.",
      "Instaurer une Loi unique de l’orientation de l’éducation et de la formation.",
      "Redéfinir un cadre d’orientation curriculaire et définir un socle commun de compétences.",
      "Mettre en œuvre de Nouveaux niveaux d’enseignement : Education et protection de la petite enfance (0 à 3 ans) ; réforme du niveau post-primaire non secondaire ; enseignement post-secondaire non supérieur.",
      "Restaurer les bourses d’État.",
      "Décentraliser la gestion de l’éducation et améliorer la collaboration (création des centres des services scolaires).",
      "Créer un fonds pour la recherche et la collaboration entre les laboratoires universitaires et les structures institutionnelles publiques pour les études et autres prestations intellectuelles.",
      "Créer 04 universités techniques et professionnelles.",
      "Financement de l’éducation : taxation des produits manufacturés et agroalimentaires, taxation à l’unité de vente des ressources naturelles."
    ],
    "summary": "Une éducation décolonisée et patriotique est mise en place au Cameroun. Les programmes scolaires sont repensés pour former des citoyens critiques et autonomes, avec un calendrier adapté à la réalité locale. Le système éducatif est financé par la taxation des produits manufacturés et des ressources naturelles."
  },
  {
    "id": "culture_patrimoine",
    "title": "Culture et patrimoine",
    "description": "Soutien aux artistes, industries culturelles, patrimoine et expressions locales comme levier d’émancipation.",
    "list": [
      "Création et mise en œuvre de la carte professionnelle artistique.",
      "Création d’un fonds pour national pour promouvoir notre industrie à travers les projets musicaux, cinématographiques en vue de valoriser et mettre en lumière les jeunes talents dans les quartiers ou les zones rurales.",
      "Mise en place des initiatives de revalorisation de nos danses traditionnelles adaptées ou pas à la modernisation, nos traditions orales, la musique moderne par nos langues locales.",
      "Création d’une agence artistique et culturelle.",
      "Création d’un lycée artistique et culturel dans chaque département administratif (chaque lycée portera le nom d’une icône de l’art ou de la culture camerounais).",
      "Valorisation du statut de chaque métier de l’art et de la culture."
    ],
    "summary": "La culture et le patrimoine sont des leviers d'émancipation. Un fonds national soutient les artistes et les industries culturelles, notamment les projets musicaux et cinématographiques. Des lycées artistiques sont créés dans chaque département pour valoriser les métiers de l'art et les expressions locales."
  },
  {
    "id": "sport_jeunesse",
    "title": "Sport et jeunesse",
    "description": "",
    "list": [
      "Développer au sein des collectivités territoriales décentralisées (CTD) des clubs de sport dont la gestion et le fonctionnement seront définis en fonction des réalités conjoncturelles.",
      "Structurer le sport de compétition en commençant par la détection des talents. Celle-ci s’opère lors de la pratique de sport dans les établissements scolaires et universitaires. Le principe de base sera la détection des talents entre le primaire et le premier cycle du secondaire c’est-à-dire le collège.",
      "Pour assurer un meilleur encadrement et suivi de ces talents détectés, des lycées de sport seront créés dans chaque département du Cameroun.",
      "Ces lycées porteront les noms des icônes du sport camerounais. Ceux qui ont porté le nom Cameroun au panthéon africain et surtout mondial dans leur discipline respective. Il y aura par exemples les lycées Roger Milla, Samuel Eto’o, Patrick Mboma, Jérémi Sorel Njitap, Françoise Mbango, Sara Etonde, Aboudi Onguené, etc. Cette attribution de nom porte aussi une logique de parrainage.",
      "Des universités de sports seront créées pour accueillir et continuer l’encadrement et le suivi des jeunes bacheliers. Le même esprit retrouvé au lycée sera aussi développé au sein de ces universités.",
      "Pour assurer la transition entre l’école et le milieu professionnel des sportifs, une agence nationale sera créée avec une représentation au niveau de chaque région. Un ordre national des managers sportifs par discipline sportive (ou par fédération) sera créé pour servir d’agent sportif. L’organisation et le fonctionnement de ces institutions seront discutés avec les professionnels du milieu de sport avant leur mise en place.",
      "La politique des infrastructures sportives prend en compte le niveau des CTD, des lycées et universités sportifs, les autres institutions scolaires et académiques ainsi que le niveau national.",
      "Développement des éléments qui facilitent la pratique du sport, de la tenue des compétitions sportives et l’économie du sport. Les communes et les régions relativement à leur environnement vont construire des complexes sportifs, des stades et autres infrastructures pour faciliter la politique sportive du PURS. Celles-ci se feront avec le partenariat de l’initiative privée (les promoteurs physiques ou moraux de clubs), la coopération décentralisée, la diaspora, les ressortissants de ces CTD ayant réussi dans le domaine du sport, les populations, etc. Chaque région et commune, au bout du mandat présidentiel, développeront ces infrastructures.",
      "Au niveau des lycées et universités de sports, les parrains, l’Etat, les fédérations, les gains des compétitions, les CTD, les projets de coopération avec les clubs sportifs, les anciens élèves ou étudiants, etc., faciliteront la construction des infrastructures nécessaires à la réalisation de l’action pédagogique ici.",
      "Pour ce qui est des écoles primaires, lycées et universités dits ordinaires, le développement des infrastructures se fera avec le fruit des impôts pour l’éducation, les CTD, les fruits des compétitions auxquelles prennent part le Cameroun.",
      "Au niveau national, il s’agira de développer des infrastructures sportives de qualités et de hautes factures. L’Etat à travers la politique du partenariat public privé (PPP), les emprunts, les gains des compétitions sportives auxquelles prennent part le Cameroun.",
      "500 000 emplois directs et indirects seront générés par la politique du sport. Ceux-ci se comptent à travers les sportifs issus du processus de préparation à la compétition tel que présenté ci-hauts (étant entendu qu’un sportif en activité ou pas génère une moyenne minimale de vingt emplois), de l’agence de sport (agents sportifs), les infrastructures (construction et management de ceux-ci), le personnel de sport au sein des organisations publiques et privées), les personnels des lycées et universités sportives, les activités générées par les compétitions organisées par le Cameroun, les clubs sportifs (compétition et pratique du sport), etc.",
      "Le Cameroun compétira pour l’organisation des coupes du monde de football, de volleyball, de handball et des sports individuels.",
      "Les instances dirigeantes du sport notamment les fédérations des diverses disciplines seront réformées afin de ne laisser que le contrôle de l’Etat et non plus la tutelle. Elles devront donc s’arrimer à l’exigence de transparence, d’efficience, de gouvernance et de démocratie qui seront les valeurs cardinales de la gestion des affaires publiques ou reconnues comme telles sous le gouvernement du PURS."
    ],
    "summary": "Une politique sportive complète est mise en place, de la détection de talents dès le primaire à la transition vers le milieu professionnel. Cela inclut la création de lycées et d'universités sportives, la réforme des fédérations, et le développement d'infrastructures. L'objectif est de stimuler l'économie du sport et de générer 500 000 emplois directs et indirects."
  },
  {
    "id": "rassembler_diversite",
    "title": "Rassembler notre diversité : Cohésion nationale et justice sociale",
    "description": "Pour bâtir une unité solide et durable, il faut :",
    "list": [
      "Réconcilier les mémoires : reconnaître les blessures du passé (colonisation, guerre civile, marginalisation) et engager un dialogue national sincère.",
      "Renforcer la justice sociale : garantir une répartition équitable des ressources et des opportunités entre toutes les régions.",
      "Encourager la participation citoyenne : donner à chaque Camerounais, quelle que soit son origine, une voix dans la construction de la Nation.",
      "Pas d’anglophone et pas de francophone : Camerounais tout cours",
      "Solidarité entre citoyens : mutualiser les efforts et les assistances.",
      "État providence garantissant l’accès à l’éducation, santé, logement, eau."
    ],
    "summary": "La cohésion nationale et la justice sociale sont renforcées par la réconciliation des mémoires et une répartition équitable des ressources. La participation citoyenne est encouragée pour que chaque Camerounais, quelle que soit son origine, se sente solidaire et fier de contribuer à l'unité de la nation."
  },
  {
    "id": "decentralisation_equitable",
    "title": "Décentralisation équitable et Justice sociale",
    "description": "",
    "list": [
      "Redécoupage administratif : partir de 10 régions à 05 ; de 58 départements à 30.",
      "État véritablement décentralisé.",
      "Créer une fonction publique territoriale (100 000 nouveaux emplois directs dans les CTD).",
      "15 ministères."
    ],
    "summary": "L'État se décentralise de manière équitable et renforce la justice sociale. Cela passe par un redécoupage administratif (de 10 à 5 régions, de 58 à 30 départements), une réduction à 15 ministères et la création d'une fonction publique territoriale qui générera 100 000 emplois directs."
  },
  {
    "id": "habitat_logement",
    "title": "Habitat et logement : Un toit sur chaque tête",
    "description": "",
    "list": [
      "Refonte foncière avec la remise des terres aux communautés et non à l’État. Plus de vente des terres au Cameroun mais des locations par les communautés.",
      "Ramener le prix du sac de ciment à 2000 fcfa pour permettre aux Camerounais de construire un logement à 3 000 000 fcfa. Ceci grâce à la reprise du gisement du clinker de Figuil et l’industrialisation des carrières de pouzzolane.",
      "Construire plus de 100 000 logements sur le mandat.",
      "Provoquer l’exode urbain pour limiter le grand nombre de déplacés du village vers la ville, en dotant les villages de programmes d’insertion à la vie économique afin de créer des emplois dans ces zones rurales et offrir de meilleures conditions de vie aux populations ;",
      "Développer avec les CTD des politiques de dotation des infrastructures de base telles que l’eau, l’électricité et les structures sanitaires, l’éducation de qualité ;",
      "Recenser les terrains non occupés et facilement aménageables afin de désengorger les villes et ainsi limiter l’insécurité, la trop forte concentration des personnes, chose entraînant des répercussions directes sur le développement.",
      "Refonder le régime foncier du Cameroun.",
      "Organiser les états généraux du logement et de l’habitat dans notre pays afin de prendre les bonnes décisions.",
      "Instaurer des réformes financières obligeant les banques à soutenir l’habitat et les questions de logement, en octroyant des prêts à l’habitat aux populations camerounaises même à faibles revenus.",
      "Créer une banque de l’habitat pour soutenir et accompagner des programmes de logement sociaux promus par l’ensemble des acteurs du secteur.",
      "Créer un office national du logement social et un fonds national chargé d’accompagner les promoteurs des programmes de logements sociaux à toutes les étapes du processus à savoir la définition des priorités, la mise en œuvre, le suivi et l’évaluation. Le fonds national de l’habitat sera alimenté entre autres par des ressources issues de la remise de la dette, les taxes sur les matériaux de construction et de grandes exploitations industrielles.",
      "Soutenir et accompagner la mise en place des unités de production des matériaux de construction, des unités de construction en matériaux locaux, des centrales d’achat pour faciliter la gestion durable des programmes locaux de construction et de mobilisation des ressources nécessaires ;",
      "Développer une éducation à l’usage des matériaux locaux dans la construction des logements dans certaines aires géographiques.",
      "Améliorer les capacités de maîtrise d’ouvrage du CTD afin qu’elles puissent mieux conduire des processus de planification et d’aménagement des territoires intégrant l’amélioration de l’habitat, l’octroi des parcelles et de la constitution des réserves foncières destinées aux programmes des logements sociaux ;",
      "Soutenir et accompagner la mise en place des mutuelles et coopératives d’habitat au niveau des villages, quartiers et communes pour faciliter l’accès aux travailleurs au logement décent ;",
      "Mettre à contribution la société civile camerounaise pour l’organisation des états généraux de l’habitat dont les résultats permettront de prendre des options légitimes et inclusives pour une véritable politique de logement. Ceux-ci se tiendront dès la première année du mandat."
    ],
    "summary": "Assurer un toit sur chaque tête passe par une refonte foncière, la réduction du prix du ciment à 2000 FCFA et la construction de plus de 100 000 logements. Des banques et des fonds de l'habitat sont créés pour financer des projets de logements sociaux et soutenir les communautés rurales."
  },
  {
    "id": "inclusion_handicapes",
    "title": "Inclusion des personnes handicapées",
    "description": "",
    "list": [
      "Faciliter l’accès à la carte d’invalidité à tous les milieux de vie et promouvoir l’accès aux services de base.",
      "Rendre disponible une allocation pour l’acquisition du matériel d’aide à la mobilité des personnes handicapées.",
      "Assurer l’insertion professionnelle des personnes handicapées.",
      "Encourager les personnes handicapées à accéder aux postes de responsabilité administrative et politique (Une personne handicapée sera nommée membre du gouvernement)."
    ],
    "summary": "Une meilleure inclusion des personnes handicapées est garantie par la facilitation de l'accès à la carte d'invalidité et à des allocations pour le matériel de mobilité. Le programme encourage leur insertion professionnelle et leur accès aux postes de responsabilité, avec l'engagement de nommer une personne handicapée au gouvernement."
  },
  {
    "id": "souverainete_politique",
    "title": "Souveraineté politique et institutionnelle",
    "description": "Réforme institutionnelle et gouvernance : Organisation d’un référendum en 2026 pour une nouvelle constitution.",
    "list": [
      "Délivrance gratuite des actes de naissance et des cartes nationales d’identité au cours des trois premiers mois du mandat.",
      "Lutte contre la corruption.",
      "Mise en place des institutions fortes (une seule Agence Nationale de Lutte contre la Corruption au Cameroun qui aura les compétences de toutes les structures existantes actuelles ; une cour des comptes active).",
      "Amélioration des conditions de vie, de travail et de rémunération des agents publics.",
      "Création des juridictions civiles de l’ordre judiciaire (tribunaux de proximité, tribunal d’instance, tribunaux de Grande Instance, Juridictions de travail).",
      "Les juridictions pénales de l’ordre judiciaire (Tribunaux de police et de gendarmerie, Tribunaux correctionnels, Cour d’Assise pour crime, Cour d’Appel, Cour Suprême Judiciaire).",
      "Ordre administratif (Juridiction de l’ordre administratif, Tribunal administratif, Tribunal de l’éthique et de l’anti-corruption, Cour d’Appel Administrative, Cour Suprême Administrative).",
      "Autres juridictions (Cour Constitutionnelle, la Haute Cour de Justice, la Cour de Sureté de l’Etat et les juridictions spécialisées (tribunal militaire et cour des comptes)",
      "Recensement général de la population et adressage du Cameroun."
    ],
    "summary": "La souveraineté politique et institutionnelle est renforcée par un référendum pour une nouvelle constitution. Une agence nationale de lutte contre la corruption est mise en place, les conditions des agents publics sont améliorées, et un nouveau système judiciaire est créé pour des institutions fortes."
  },
  {
    "id": "souverainete_economique",
    "title": "Souveraineté économique et industrielle",
    "description": "Industries, entreprises, fiscalité et emploi : la production comme levier de l’économie traduit par une industrialisation volontariste, courageuse et plurielle.",
    "list": [
      "Sortir du Franc CFA et créer une monnaie nationale.",
      "Développer une industrie locale forte afin de réduire la dépendance aux importations.",
      "Maîtriser les ressources naturelles.",
      "Créer une raffinerie d’or à l’Est pour garantir la réserve monétaire.",
      "Offrir aux agents économiques le meilleur climat d’investissement et l’environnement microéconomique le plus favorable pour plus de production, de croissance économique, de création d’emplois et donc de prospérité. Ce rôle de l’Etat se traduit entre autres par la qualité des institutions publiques, la construction des infrastructures, la qualité du service public, la régulation du marché, la fourniture des infrastructures d’équipement, la sécurité des droits des propriétés, les choix d’orientation en matière de règlementation et de fiscalité, le fonctionnement des marchés financiers et des marchés de travail, la qualité de la gouvernance générale.",
      "Développer un cadre plus incitatif à la diaspora comme acteur de la vie économique.",
      "Financer à travers quatre grandes sources à savoir les capacités de financement, les épargnes des ménages, les banques d’investissements et la création monétaire.",
      "Créer les conditions propices à l’attractivité de la destination Cameroun.",
      "Intensifier l’industrie manufacturée qui produira des biens intermédiaires (sidérurgie, métallurgie, chimie, verre, papier, matière plastique) ; l’industrie des biens d’équipement des entreprises (machines-outils, matériel électronique, construction navale et aéronautique) ; l’industrie des biens de consommation courante (pharmacie, textile, ameublement, parachimie, presse et édition notamment).",
      "Développer la carte industrielle du Cameroun.",
      "Améliorer la compétitivité des entreprises à travers des programmes et études endogènes.",
      "Mettre en place un fonds de garanti de souveraineté de 300 Milliards de Franc CFA chaque année pour le développement et la création d’un million d’entreprises (PME/PMI) pour au moins 5 millions d’emploi directs en 5 ans."
    ],
    "summary": "Atteindre la souveraineté économique passe par la sortie du Franc CFA et la création d'une monnaie nationale. La politique mise sur une industrialisation forte, la maîtrise des ressources naturelles, et un climat d'investissement favorable. Un fonds de garantie de 300 milliards de FCFA soutiendra la création d'un million de PME/PMI en 5 ans."
  },
  {
    "id": "souverainete_energetique",
    "title": "Souveraineté énergétique et écologique : Énergies renouvelables, lutte contre la pollution, agriculture durable",
    "description": "",
    "list": [
      "Réalisation du projet de modernisation de la SONARA afin de lui permettre de disposer de la technologie nécessaire pour raffiner le pétrole produit au Cameroun.",
      "Création de deux nouvelles raffineries à l’extrême-nord et dans le Sud-Ouest afin de réduire le coût du pétrole et du carburant puis produire le bitume pour goudronner les routes.",
      "Offre énergétique à partir des énergies renouvelables : thermique ; solaire ; photovoltaïque ; énergie éolienne ; énergie géothermique ; énergie d’origine marine ; énergie biomasse et eau (énergie hydraulique transformée en énergie mécanique puis en énergie électrique).",
      "Développement de grandes centrales hydroélectriques qui seront réservées à la production industrielle.",
      "Développement des petites centrales pour la consommation domestique et la petite activité industrielle au niveau local.",
      "Offre de l’eau potable à chaque Camerounaise et Camerounais.",
      "Construction de nouvelles stations de traitement des eaux, renouvellement des équipements, des conduites, des branchements existant en vue de sécuriser l’alimentation en eau potable.",
      "Décentralisation de la gestion de l’eau désormais placée sous la responsabilité des communes.",
      "Protection et surveillance des ressources en eau."
    ],
    "summary": "Pour la souveraineté énergétique et écologique, le pays mise sur la modernisation de la SONARA et la construction de nouvelles raffineries. On développe des énergies renouvelables (solaire, éolienne, hydroélectrique) et on décentralise la gestion de l'eau. Ces actions visent à garantir l'accès à l'eau potable pour tous et à réduire la dépendance énergétique."
  },
  {
    "id": "souverainete_sanitaire",
    "title": "Souveraineté sanitaire et médicinale: Soins accessibles, hôpitaux rénovés, prévention renforcée",
    "description": "",
    "list": [
      "Créer la caisse maladie où chaque citoyen cotisera 1000 fcfa par mois pour l’assurance maladie. Cette caisse servira à la gratuité des soins de santé.",
      "Améliorer le plateau technique, mettre en place un fonds spécial pour la recherche sur les plantes médicinales et la valorisation de la pharmacopée locale.",
      "Revoir les accords avec l’OMS sur l’usage de notre pharmacopée locale.",
      "Pratiquer la médecine de la santé et non de la maladie.",
      "Développer la sécurité alimentaire.",
      "Maintenir les Camerounais dans un état meilleur de fonctionnement et donner la possibilité d’évoluer.",
      "Renforcer les budgets des unités de recherche dans les universités et instituts.",
      "Systématiser la disponibilité des statistiques médicales et épidémiologiques. Toute une direction en charge de la statistique médicale sera créée au ministère en charge de la statistique.",
      "Lutter contre l’alcoolisme et l’ivresse publique par des actions d’éducation, de réglementation, de limitation et de contrôle des débits de boisson, par une fiscalité rude sur la production et la vente des boissons alcoolisées, etc.",
      "Renforcer et développer la médecine communautaire à savoir scolaire, universitaire, militaire, agricole, forestière, minière, industrielle, culturelle ; créer des mutuelles de santé, etc.",
      "Institutionnaliser la médecine traditionnelle.",
      "Créer les conditions d’accès à l’égalité d’accès aux soins des Camerounais et Camerounaises sur toute l’étendue du territoire.",
      "Créer des laboratoires d’analyse médicale performants et capables d’adresser toutes les situations."
    ],
    "summary": "La souveraineté sanitaire est une priorité, avec la création d'une caisse maladie nationale pour rendre les soins gratuits. On améliore le plateau technique, on renforce la recherche sur les plantes médicinales et on institutionnalise la médecine traditionnelle. L'objectif est d'assurer un accès équitable aux soins pour tous les Camerounais."
  },
  {
    "id": "renforcement_securite",
    "title": "Renforcement de la sécurité : Lutte contre l’insécurité, réforme des forces de défense et de sécurité",
    "description": "",
    "list": [
      "Viabiliser les frontières à travers le développement économique et social des frontières du Cameroun.",
      "Créer un institut de recherche sur la sécurité.",
      "Faire de chaque citoyen un policier.",
      "Améliorer les conditions de vie et de travail des agents publics de sécurité et de défense.",
      "Agriculture et sécurité alimentaire :",
      "1000 milliards d’investissement dans l’agriculture les deux premières années."
    ],
    "summary": "Le pays renforce sa sécurité en viabilisant ses frontières et en réformant ses forces de défense et de sécurité. Un institut de recherche sur la sécurité est créé et les conditions des agents publics sont améliorées. Un investissement massif de 1000 milliards de FCFA est aussi prévu pour l'agriculture, pilier de la sécurité alimentaire."
  },
  {
    "id": "diplomatie_diaspora",
    "title": "Diplomatie et diaspora comme leviers de souveraineté: deux entités incontournables de la réussite du programme",
    "description": "",
    "list": [
      "La nationalité camerounaise sera inaliénable.",
      "La politique économique induit la politique de l’emploi, accorde une part importante à l’investissement étranger. Une implication qui n’est possible que par un dynamisme offensif de la politique diplomatique.",
      "Ouverture des ambassades dans tous les pays s’inscrivant dans le développement de la société. Les ambassades seront dotées d’un personnel particulier appelé les agents économiques et lobbyistes qui auront pour mission de servir d’intelligence économique. Leurs missions seront de scruter, prospecter, convaincre les investisseurs étrangers à venir investir au Cameroun dans les secteurs de production identifiés et nouveaux.",
      "Des consulats pour un meilleur encadrement des Camerounais, seront ouverts. L’idée est de sécuriser tous les Camerounais partout où ils décident d’aller faire fortune à travers les études, les activités économiques et culturelles ou la filiation.",
      "La diplomatie camerounaise sera conduite par le Chef de l’Etat mais avec un ministère des affaires étrangères qui dispose des marges de manœuvre.",
      "Une conférence des ambassadeurs se tiendra tous les deux ans pour offrir aux acteurs des institutions diplomatiques du Cameroun à l’étranger et sur le territoire capables de procéder à l’évaluation de la diplomatie camerounaise.",
      "La gestion de la politique étrangère du Cameroun sous le PURS intègre aussi la diplomatie des villes ou des CTD. La réalisation de la politique de décentralisation du PURS nécessite des CTD qui s’inscrivent dans une diplomatie offensive.",
      "De nombreuses instances développées pour encadrer, sécuriser, diligenter et opérationnaliser la symbiose entre le gouvernement, les CTD et la diaspora. Un Secrétariat d’Etat en charge de la diaspora sera créé pour mettre en œuvre cette politique.",
      "Une conférence tripartite entre le gouvernement, les CTD et la diaspora se tiendra tous les deux ans au Cameroun.",
      "Dans la banque des PMI/PME rénovée et modulée, une unité spéciale sera réservée au Camerounaises et Camerounais de la Diaspora qui souhaitent investir au Cameroun. Pour mieux accompagner ces initiatives, une agence de la diaspora sera créée pour servir d’interface entre les structures locales et la diaspora."
    ],
    "summary": "La diplomatie et la diaspora sont des leviers de souveraineté incontournables. La nationalité camerounaise est inaliénable et les ambassades sont dotées d'agents économiques pour attirer les investissements. Un Secrétariat d'État et une agence sont créés pour encadrer et soutenir les projets d'investissement de la diaspora au Cameroun."
  }
];


  getPrograms(): Observable<Program[]> {
    return of(this.programs)
  }

  getProgramById(id: string): Program | undefined {
    return this.programs.find(program => program.id === id)
  }
}