import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article, ArticleCategory } from '../../models/blog';
import { Observable, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BlogType } from '../../enums/blog-type';

@Injectable({
  providedIn: 'root'
})

export class BlogService {

  categoryBaseUrl = environment.apiBaseUrl+"rubrics/";
  articleBaseUrl = environment.apiBaseUrl+"articles/";

  constructor( private http : HttpClient) { }

  getBlogCategoryList() : Observable<ArticleCategory[]>{
    return this.http.get<any>(`${this.categoryBaseUrl}?isActive=true`).pipe(
      map(result => result.data),
      map(result => result.map(
        (result : ArticleCategory) => { 
          return {
            id: result.id,
            name: result.name,
            isActive: false
          }
        }
      ))
    );
  }

  getBlogArticlesByRubricId( queryParams ?: string) : Observable<Article[]> {

    return this.http.get<any>(`${this.articleBaseUrl}?${queryParams}`).pipe(
      map(res=> res.data),
      map(res => res.map( (item : any) => {
        return{
          id : item.id,
          title : item.title,
          coverImage : item.coverImage,
          date : item.date,
          hour: item.hour,
          description : item.description,
          content: item.content,
          hasVideo: item.hasVideo,
          videoLink: item.videoLink
        }
      }))
    )
  }

  getArticleById( id : string) : Observable<Article> {
    return this.http.get<any>(`${this.articleBaseUrl}${id}`).pipe(
      map(res => res.data),
      map(data => {
        return{
          id : data.id,
          title : data.title,
          coverImage : data.coverImage,
          date : data.date,
          hour: data.hour,
          description : data.description,
          content: data.content,
          hasVideo: data.hasVideo,
          videoLink: data.videoLink
        }
      })
    )
  }
}