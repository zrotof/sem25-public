import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Program } from '../../models/program';

@Injectable({
  providedIn: 'root'
})

export class ProgramsService {

  linkRoot = "/le-programme/";

  programs : Program[] = [
    {
      title: "Agriculture",
      theme: "agrigulture",
      link:`${this.linkRoot}agriculture`,
      sourceImg: "../../../../assets/img/program/agriculture.jpeg",
      texts : [
        {
          text : ""
        }
      ]
    },
    {
      title: "Santé",
      theme: "sante",
      link:`${this.linkRoot}sante`,
      sourceImg: "../../../../assets/img/program/sante.jpeg",
      texts : [
        {
          text : ""
        }
      ]
    },
    {
      title: "Économie",
      theme: "economie",
      link:`${this.linkRoot}economie`,
      sourceImg: "../../../../assets/img/program/economie.jpeg",
      texts : [
        {
          text : ""
        }
      ]
    },
    {
      title: "Éducation",
      theme: "education",
      link:`${this.linkRoot}education`,
      sourceImg: "../../../../assets/img/program/education.jpeg",
      texts : [
        {
          text : ""
        }
      ]
    },
    {
      title: "Transport",
      theme: "transport",
      link:`${this.linkRoot}transport`,
      sourceImg: "../../../../assets/img/program/transport.jpeg",
      texts : [
        {
          text : ""
        }
      ]
    },
    {
      title: "Travail",
      theme: "travail",
      link:`${this.linkRoot}travail`,
      sourceImg: "../../../../assets/img/program/travail.webp",
      texts : [
        {
          text : ""
        }
      ]
    },
    {
      title: "Technologie",
      theme: "technologie",
      link:`${this.linkRoot}technologie`,
      sourceImg: "../../../../assets/img/program/technologie.jpeg",
      texts : [
        {
          text : ""
        }
      ]
    },
    {
      title: "Formation",
      theme: "formation",
      link:`${this.linkRoot}formation`,
      sourceImg: "../../../../assets/img/program/formation.jpeg",
      texts : [
        {
          text : ""
        }
      ]
    }
  ]

  getPrograms(): Observable<Program[]>{
    return of(this.programs).pipe(
      map( result => result.map( 
        res => {
          return {
            title : res.title, 
            sourceImg : res.sourceImg,
            link: res.link,
            theme : res.theme
          }
        }
        )
      )
    )
  }

  getProgramByTheme( theme : string): Observable<Program>{
    const program = this.programs.filter(result => result.theme === theme);
    return of(program[0]);
  }

}
