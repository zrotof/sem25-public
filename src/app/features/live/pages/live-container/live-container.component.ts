import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LiveVideoPlayerComponent } from './components/live-video-player/live-video-player.component';
import { ReplayMenuListComponent } from './components/replay-menu-list/replay-menu-list.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { ReplayMenu, YoutuveVideoItem } from 'src/app/shared/models/replay';
import { Observable } from 'rxjs';
import { ReplayService } from 'src/app/shared/services/replay/replay.service';
import { AsyncPipe } from '@angular/common';
import { AmbassadorBannerComponent } from 'src/app/shared/components/ambassador-banner/ambassador-banner.component';
import { AmbassadorBanner } from 'src/app/shared/models/ambassador-banner';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { YoutubeVideoPlayerModalComponent } from 'src/app/shared/components/youtube-video-player-modal/youtube-video-player-modal.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-live-container',
  standalone: true,
  imports: [
    AsyncPipe,
    LiveVideoPlayerComponent,
    ReplayMenuListComponent,
    VideoListComponent,
    AmbassadorBannerComponent,
    YoutubeVideoPlayerModalComponent,
    DynamicDialogModule
  ],
  templateUrl: './live-container.component.html',
  styleUrls: ['./live-container.component.scss'],
  providers:[MessageService, DialogService]
})

export class LiveContainerComponent implements OnInit{

  liveStreamingLink = environment.streamingLink;
  menusList$ !: Observable<ReplayMenu[]>;
  videoList$ !:Observable<YoutuveVideoItem[]>
  ambassadorBanner !: AmbassadorBanner;

  ref !: DynamicDialogRef;

  constructor(
    public dialogService: DialogService,
    private replayService : ReplayService
  ){}

  ngOnInit(): void {
    this.getMenuList();
    this.initAmbassadorBanner();
  }

  getMenuList() : void{
    this.menusList$ = this.replayService.getReplayMenuList();
  }

  getYoutubeVideoListByReplayId($event : string) : void{
    const playlistId = $event;
    this.videoList$ = this.replayService.getYoutubeVideoListByPlaylistId(playlistId)
  }

  onOpenYoutubeVideo($event : any): void{
    this.ref = this.dialogService.open(YoutubeVideoPlayerModalComponent, {
      data: {
        youtubeVideo: $event
      },
      baseZIndex: 10000,
      showHeader: false,
      maskStyleClass : "youtube-video-dialog-mask"
    });
  }

  initAmbassadorBanner() : void {
    this.ambassadorBanner = {
      text : "Passez à l'action et devenez un Ambassadeur de Campagne. Rejoignez notre communauté passionnée, partagez notre vision, soyez le moteur du changement.",
      image : "../../../../assets/img/campain-ambassador/crowd-celebrate-women.jpeg",
      alt : ''
    }
  }

}
