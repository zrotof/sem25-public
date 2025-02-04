import { Injectable } from '@angular/core';
import { CampainTeam } from '../../models/campain-team';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CandidateService {

  campainTeam : CampainTeam[] = [
    {
      sourceImg:"../../../../../assets/img/candidate/team/ideogram (14).jpeg",
      name:"Serge Abemongou Salif",
      position:"Directeur de campagne"
    },
    {
      sourceImg:"../../../../../assets/img/candidate/team/ideogram (9).jpeg",
      name:"Serge Abemongou Salif",
      position:"Directeur de campagne"
    },
    {
      sourceImg:"../../../../../assets/img/candidate/team/ideogram (8).jpeg",
      name:"Serge Abemongou Salif",
      position:"Directeur de campagne"
    },
    {
      sourceImg:"../../../../../assets/img/candidate/team/ideogram (12).jpeg",
      name:"Serge Abemongou Salif",
      position:"Directeur de campagne"
    },
    {
      sourceImg:"../../../../../assets/img/candidate/team/ideogram (10).jpeg",
      name:"Serge Abemongou Salif",
      position:"Directeur de campagne"
    }
  ]

  getCampainTeam(): Observable<CampainTeam[]>{
    return of(this.campainTeam)
  }
}
