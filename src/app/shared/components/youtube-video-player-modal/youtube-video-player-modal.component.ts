import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-youtube-video-player-modal',
  templateUrl: './youtube-video-player-modal.component.html',
  styleUrls: ['./youtube-video-player-modal.component.scss'],
  standalone: true,
  encapsulation: ViewEncapsulation.None
})

export class YoutubeVideoPlayerModalComponent implements OnInit {

  urlSafe !: SafeResourceUrl;
  displayError = false;

  constructor( 
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getProjectData();
  }

  getProjectData() {
    const videoStringIframe = this.config.data.youtubeVideo;
    const videoDomIframe = new DOMParser().parseFromString(videoStringIframe,'text/html');
    const iframe = videoDomIframe.querySelector('iframe');

    if(iframe){
      const srcAttribute = iframe.getAttribute('src');
      const url = srcAttribute ? srcAttribute :'https:'+srcAttribute;
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    else{
      this.displayError = true;
    }
  }

  closeModal(data : any){
    this.ref.close();
  }
}
