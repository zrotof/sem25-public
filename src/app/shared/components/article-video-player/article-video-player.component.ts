import { NgIf } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-article-video-player',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './article-video-player.component.html',
  styleUrls: ['./article-video-player.component.scss']
})
export class ArticleVideoPlayerComponent implements OnInit, OnChanges {

  @Input() link !: string;

  urlSafe !: SafeResourceUrl;
  displayError = false;

  constructor(
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
  }

  getData(){
    const videoStringIframe = this.link;
    const videoDomIframe = new DOMParser().parseFromString(videoStringIframe!,'text/html');
    const iframe = videoDomIframe.querySelector('iframe');

    if(iframe){
      const url = iframe.getAttribute('src') as string;
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    else{
      this.displayError = true;
    }
  }

  ngOnChanges(): void {
    this.getData();
  }
}
