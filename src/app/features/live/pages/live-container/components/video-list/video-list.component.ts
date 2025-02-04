import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, DecimalPipe, NgClass, NgFor } from '@angular/common';
import { YoutuveVideoItem } from 'src/app/shared/models/replay';
import { ConvertYoutubeTimePipe } from 'src/app/shared/pipes/ConvertYoutubeTime/convert-youtube-time.pipe';

@Component({
  selector: 'app-video-list',
  standalone: true,
  imports: [
    NgFor,
    NgClass,
    ConvertYoutubeTimePipe,
    DecimalPipe
  ],
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent {
  @Input() videoList !: YoutuveVideoItem[];
  @Output() videoClicked = new EventEmitter<string>();


  emitYoutubeVideoClickedEvent(link: string, index: number){
    this.videoClicked.emit(link);
    this.setActiveVideo(index);
  }

  setActiveVideo(index: number){

    if(this.videoList[index].isActive){
      return ;
    }

    this.videoList.forEach((video: any) => {
      video.isActive = false;
    })

    this.videoList[index].isActive = true;
  }
}
