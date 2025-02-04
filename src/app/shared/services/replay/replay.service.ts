import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article, ArticleCategory } from '../../models/blog';
import { Observable, map, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BlogType } from '../../enums/blog-type';
import { ReplayMenu, YoutuveVideoItem } from '../../models/replay';

@Injectable({
  providedIn: 'root'
})

export class ReplayService {

  replayBaseUrl = environment.apiBaseUrl+"replays/";
  youtubeBaseUrl = environment.apiBaseUrl+"youtube/"

  categoryBaseUrl = environment.apiBaseUrl+"rubrics/";
  articleBaseUrl = environment.apiBaseUrl+"articles/";

  constructor( private http : HttpClient) { }


  getReplayMenuList() : Observable<ReplayMenu[]>{
    return this.http.get<any>(this.replayBaseUrl+"?isActive=true").pipe(
      map(({status, data, message})=> data as ReplayMenu[]),
      map( result => result.map( res => {return {...res, isActive : false}}))
    )
  }

  getYoutubeVideoListByPlaylistId(playlistId: string) : Observable<YoutuveVideoItem[]> {
    return this.http.get<any>(`${this.youtubeBaseUrl}playlists/${playlistId}/videos`).pipe(
      map(({status, data, message})=> data),
      map(result => result.map( (res: YoutuveVideoItem) => { return {...res, isActive : false}}))
    )
  }

}
