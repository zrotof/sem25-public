import { Component, ViewEncapsulation } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from 'src/app/shared/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';
import { HomePactModalComponent } from './home-pact-modal/home-pact-modal.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { YoutubeVideoPlayerModalComponent } from 'src/app/shared/components/youtube-video-player-modal/youtube-video-player-modal.component';

@Component({
  selector: 'app-home-pact',
  standalone: true,
  imports: [
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe,
    HomePactModalComponent,
    YoutubeVideoPlayerModalComponent
  ],
  templateUrl: './home-pact.component.html',
  styleUrls: ['./home-pact.component.scss'],
  providers: [DialogService],
  encapsulation: ViewEncapsulation.None

})
export class HomePactComponent {

  ref !: DynamicDialogRef;

  constructor(private dialogService : DialogService){}

  openPactModal(){
    this.dialogService.open(HomePactModalComponent, {
      width: '100%',
      height: '100%',
      baseZIndex: 99999,
      styleClass : "pact-modal-style-class"
    });
  }

  onOpenYoutubeVideo(): void{
    const link = '<iframe width="560" height="315" src="https://www.youtube.com/embed/DinhQWaf02E?si=43p2WHskFGmcwgwh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'

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
