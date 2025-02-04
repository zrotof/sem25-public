import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article, ArticleCategory } from '../../models/blog';
import { Observable, map, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BlogType } from '../../enums/blog-type';
import { Event } from '../../models/Agenda';

@Injectable({
  providedIn: 'root'
})

export class AgendaService {

  EventTypeBaseUrl = environment.apiBaseUrl+"event-types/";
  EventBaseUrl = environment.apiBaseUrl+"events/";

  constructor( private http : HttpClient) { }

  getAgendaEventTypeList() : Observable<any>{
    return this.http.get<any>(`${this.EventTypeBaseUrl}?isActive=true`).pipe(
      map(result => result.data),
      map(result => result.map(
        (result : any) => { 
          return {
            id: result.id,
            name: result.name,
            isActive: false
          }
        }
      ))
    );
  }

  getEvents( queryParams ?: string) : Observable<Event[]> {
    
    console.log(queryParams)

    return this.http.get<any>(`${this.EventBaseUrl}?${queryParams}`).pipe(
      map(res=> res.data),
      map(res => res.map( (item : any) => {
        return{
          id : item.id,
          title : item.title,
          coverImage : item.coverImage,
          date : item.date,
          hour: item.hour,
          eventTypeName : item.EventType.name
        }
      }))
    )
  }

  getEventById( id : string) : Observable<Event> {
    return this.http.get<any>(`${this.EventBaseUrl}${id}`).pipe(
      map(res => res.data),
      map(item => {
        return{
          id : item.id,
          title : item.title,
          coverImage : item.coverImage,
          date : item.date,
          hour: item.hour,
          isArticleAssociated : item.articleId ? true : false,
          hasVideo: item.articleId ? item.Article.hasVideo : null,
          videoLink : item.articleId ? item.Article.videoLink : null,
          content : item.articleId ? item.Article.content : null
        }
      })
    )
  }

}
