import { Component, ViewEncapsulation } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from 'src/app/shared/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';
import { HomePactModalComponent } from './home-pact-modal/home-pact-modal.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { YoutubeVideoPlayerModalComponent } from 'src/app/shared/components/youtube-video-player-modal/youtube-video-player-modal.component';
import { VideoPlayerModalComponent } from 'src/app/shared/components/video-player-modal/video-player-modal.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home-pact',
  standalone: true,
  templateUrl: './home-pact.component.html',
  styleUrls: ['./home-pact.component.scss'],
  providers: [DialogService],
  encapsulation: ViewEncapsulation.None,
  imports: [
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe,
    NgOptimizedImage
  ]
})
export class HomePactComponent {

  ref !: DynamicDialogRef;

  constructor(private dialogService: DialogService) { }

  openPactModal() {
    this.dialogService.open(HomePactModalComponent, {
      width: '100%',
      height: '100%',
      baseZIndex: 99999,
      styleClass: "pact-modal-style-class"
    });
  }

  onOpenYoutubeVideo(): void {
    const link = '../../../../assets/videos/profession-de-foie.mp4';

    this.ref = this.dialogService.open(VideoPlayerModalComponent, {
      data: {
        videoSource: link
      },
      baseZIndex: 10000,
      showHeader: false,
      maskStyleClass: "youtube-video-dialog-mask"
    });
  }
}
