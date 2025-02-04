import { Injectable } from '@angular/core';
import { SecondaryHeroBanner } from '../../models/secondar-hero-banner';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HeroBannerService {

  heroBannerList : SecondaryHeroBanner[] = [
    {
      id: "agenda",
      image : "../../../../../assets/img/hero-banner/secondary/agenda.jpeg",
      title : "Agenda De Campagne",
      menus : [
        {
          icon : "faHome",
          label : "Accueil",
          url : ""
        },
        {
          label : "Agenda",
          url : ""
        }
      ]
    },
    {
      id: "candidat",
      image : "../../../../../assets/img/hero-banner/secondary/flags.jpeg",
      title : "Biographie",
      menus : [
        {
          icon : "faHome",
          label : "Accueil",
          url : ""
        },
        {
          label : "Le candidat",
          url : ""
        }
      ]
    },
    {
      id: "contact",
      image : "../../../../../assets/img/hero-banner/secondary/flags.jpeg",
      title : "Contactez-Nous",
      menus : [
        {
          icon : "faHome",
          label : "Accueil",
          url : ""
        },
        {
          label : "Contact",
          url : ""
        }
      ]
    },
    {
      id: "actualites",
      image : "../../../../../assets/img/hero-banner/secondary/articles.jpg",
      title : "Dernières Actualités",
      menus : [
        {
          icon : "faHome",
          label : "Accueil",
          url : ""
        },
        {
          label : "Articles",
          url : ""
        }
      ]
    },
    {
      id: "program",
      image : "../../../../../assets/img/hero-banner/secondary/crowd.jpg",
      title : "Mon Programme",
      menus : [
        {
          icon : "faHome",
          label : "Accueil",
          url : ""
        },
        {
          label : "Programme",
          url : ""
        }
      ]
    },
    {
      id: "program-sante",
      image : "../../../../../assets/img/home/main-hero/crowd.jpg",
      title : "Santé",
      menus : [
        {
          icon : "faHome",
          label : "Accueil",
          url : ""
        },
        {
          label : "Programme",
          url : "/le-programme"
        }
      ]
    },
    {
      id: "program-agriculture",
      image : "../../../../../assets/img/home/main-hero/crowd.jpg",
      title : "Agriculture",
      menus : [
        {
          icon : "faHome",
          label : "Accueil",
          url : ""
        },
        {
          label : "Programme",
          url : "/le-programme"
        }
      ]
    },
    {
      id: "program-economie",
      image : "../../../../../assets/img/home/main-hero/crowd.jpg",
      title : "Économie",
      menus : [
        {
          icon : "faHome",
          label : "Accueil",
          url : ""
        },
        {
          label : "Programme",
          url : "/le-programme"
        }
      ]
    },
    {
      id: "program-education",
      image : "../../../../../assets/img/home/main-hero/crowd.jpg",
      title : "Éducation",
      menus : [
        {
          icon : "faHome",
          label : "Accueil",
          url : ""
        },
        {
          label : "Programme",
          url : "/le-programme"
        }
      ]
    },
    {
      id: "program-transport",
      image : "../../../../../assets/img/home/main-hero/crowd.jpg",
      title : "Transport",
      menus : [
        {
          icon : "faHome",
          label : "Accueil",
          url : ""
        },
        {
          label : "Programme",
          url : "/le-programme"
        }
      ]
    },
    {
      id: "program-travail",
      image : "../../../../../assets/img/home/main-hero/crowd.jpg",
      title : "Travail",
      menus : [
        {
          icon : "faHome",
          label : "Accueil",
          url : ""
        },
        {
          label : "Programme",
          url : "/le-programme"
        }
      ]
    },
    {
      id: "program-technologie",
      image : "../../../../../assets/img/home/main-hero/crowd.jpg",
      title : "Technologie",
      menus : [
        {
          icon : "faHome",
          label : "Accueil",
          url : ""
        },
        {
          label : "Programme",
          url : "/le-programme"
        }
      ]
    },
    {
      id: "program-famille",
      image : "../../../../../assets/img/home/main-hero/crowd.jpg",
      title : "Famille",
      menus : [
        {
          icon : "faHome",
          label : "Accueil",
          url : ""
        },
        {
          label : "Programme",
          url : "/le-programme"
        }
      ]
    },
    {
      id: "program-formation",
      image : "../../../../../assets/img/home/main-hero/crowd.jpg",
      title : "Formation",
      menus : [
        {
          icon : "faHome",
          label : "Accueil",
          url : ""
        },
        {
          label : "Programme",
          url : "/le-programme"
        }
      ]
    }
  ]

  getSecondaryHeroData( id: string): Observable<SecondaryHeroBanner>{
    const heroData = this.heroBannerList.filter(result => result.id === id);
    return of(heroData[0]);
  }
}
