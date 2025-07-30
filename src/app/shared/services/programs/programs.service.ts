import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProgramsService {

  linkRoot = "/le-programme/";

  programs = [
    {
      title: "Réforme institutionnelle et gouvernance",
      link:`${this.linkRoot}agriculture`,
    },
    {
      title: "Diplomatie et diaspora",
      link:`${this.linkRoot}sante`
    },
    {
      title: "Identité nationale",
      link:`${this.linkRoot}economie`
    },
    {
      title: "Unité nationale",
      link:`${this.linkRoot}education`
    },
    {
      title: "Souveraineté",
      link:`${this.linkRoot}transport`,
    },
    {
      title: "Habitat et logement",
      link:`${this.linkRoot}travail`
    },
    {
      title: "Renforcement de la sécurité",
      link:`${this.linkRoot}technologie`
    },
    {
      title: "Santé pour tous et sport",
      link:`${this.linkRoot}formation`
    },
    {
      title: "Promotion culturelle et artistique",
      link:`${this.linkRoot}formation`
    },
    {
      title: "Inclusion des personnes handicapées",
      link:`${this.linkRoot}formation`
    },
    {
      title: "Réduction des inégalités",
      link:`${this.linkRoot}formation`
    },
    {
      title: "Énergie de transition écologiques",
      link:`${this.linkRoot}formation`
    }
  ]

  getPrograms(): Observable<any>{
    return of(this.programs).pipe(
      map( result => result.map( 
        res => {
          return {
            title : res.title, 
            link: res.link,
          }
        }
        )
      )
    )
  }
}
