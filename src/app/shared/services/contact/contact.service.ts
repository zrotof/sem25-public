import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  emailBaseUrl = environment.apiBaseUrl+"mail/";

  constructor( private http : HttpClient) { }

  sendMail(data : any) : Observable<any>{
    return this.http.post<any>(this.emailBaseUrl+"contact", data)
  }

}
