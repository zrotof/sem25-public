import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from '../../../../../../shared/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';
import { RouterLink } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { YoutubeVideoPlayerModalComponent } from 'src/app/shared/components/youtube-video-player-modal/youtube-video-player-modal.component';

@Component({
  selector: 'app-campain-video',
  standalone: true,
  imports: [
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe,
    RouterLink,
    YoutubeVideoPlayerModalComponent
  ],
  templateUrl: './campain-video.component.html',
  styleUrls: ['./campain-video.component.scss'],
  providers: [DialogService],
})
export class CampainVideoComponent {

  ref !: DynamicDialogRef;

  constructor(private dialogService : DialogService){}


  onOpenYoutubeVideo(): void{
    const link = '<iframe width="560" height="315" src="https://www.youtube.com/embed/hhvh-4Mh59Q?si=fdCrRxtJQ56M97cq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    
    this.ref = this.dialogService.open(YoutubeVideoPlayerModalComponent, {
      data: {
        youtubeVideo: link
      },
      baseZIndex: 10000,
      showHeader: false,
      maskStyleClass : "youtube-video-dialog-mask"
    });
  }
}
