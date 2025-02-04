import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AmbassadorService {

  apiBaseUrlAmbassador = environment.apiBaseUrl+"ambassadors/";
  
  constructor(private http : HttpClient) { }

  addAmbassador(ambassador: any): Observable<any>{
    return this.http.post<any>(this.apiBaseUrlAmbassador, ambassador);
  }
}
