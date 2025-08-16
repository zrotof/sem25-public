import { NgClass } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, signal, ViewChild, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ConvertStringLabelToFontawesomeIconPipe } from '../../pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';

@Component({
    selector: 'app-video-player-modal',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './video-player-modal.component.html',
    styleUrl: './video-player-modal.component.scss',
    imports: [
        NgClass,
        FontAwesomeModule,
        ConvertStringLabelToFontawesomeIconPipe
    ]
})

export class VideoPlayerModalComponent implements AfterViewInit, OnDestroy {
  @ViewChild('videoPlayer') videoPlayerRef!: ElementRef<HTMLVideoElement>;
  @ViewChild('progressBar') progressBarRef!: ElementRef<HTMLDivElement>;
  @ViewChild('volumeBar') volumeBarRef!: ElementRef<HTMLInputElement>;

  videoSource!: string;
  video!: HTMLVideoElement;

  isPlaying = false;
  isMuted = signal(true);
  isFullScreen = false;

  volume = 0.7;
  currentTime = '00:00';
  duration = '00:00';
  progress = 0;

  showCenterPlayButton = true;
  private playButtonTimeout: any;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    public sanitizer: DomSanitizer
  ) { }

  ngAfterViewInit(): void {
    this.videoSource = this.config.data.videoSource;
    this.video = this.videoPlayerRef.nativeElement;

    this.video.volume = this.volume;
    this.video.muted = this.isMuted();

    if (this.volumeBarRef) {
      this.volumeBarRef.nativeElement.value = (this.volume * 100).toString();
    }

    this.video.addEventListener('timeupdate', this.updateProgress);
    this.video.addEventListener('loadedmetadata', this.setDuration);
    this.video.addEventListener('ended', this.onVideoEnd);
    this.video.addEventListener('volumechange', this.updateVolumeIcon);
  }

  ngOnDestroy(): void {
    this.video.removeEventListener('timeupdate', this.updateProgress);
    this.video.removeEventListener('loadedmetadata', this.setDuration);
    this.video.removeEventListener('ended', this.onVideoEnd);
    this.video.removeEventListener('volumechange', this.updateVolumeIcon);
    clearTimeout(this.playButtonTimeout);
  }

  togglePlayPause(): void {
    if (this.video.paused || this.video.ended) {
      this.isPlaying = true;
      this.video.play();
      this.hideCenterPlayButtonAfterDelay();
    } else {
      this.isPlaying = false;
      this.video.pause();
      this.showCenterPlayButton = true;
      clearTimeout(this.playButtonTimeout);
    }
  }

  private hideCenterPlayButtonAfterDelay(): void {
    this.showCenterPlayButton = true;
    clearTimeout(this.playButtonTimeout);
    this.playButtonTimeout = setTimeout(() => {
      this.showCenterPlayButton = false;
    }, 2000); // 2 secondes (modifie selon ton besoin)
  }

  onVideoEnd = (): void => {
    this.isPlaying = false;
    this.video.currentTime = 0;
    this.updateProgress();
  };

  updateProgress = (): void => {
    this.progress = (this.video.currentTime / this.video.duration) * 100;
    this.currentTime = this.formatTime(this.video.currentTime);
  };

  setDuration = (): void => {
    this.duration = this.formatTime(this.video.duration);
  };

  seek(event: MouseEvent): void {
    const progressBar = this.progressBarRef.nativeElement;
    const clickX = event.clientX - progressBar.getBoundingClientRect().left;
    const width = progressBar.offsetWidth;
    const seekTime = (clickX / width) * this.video.duration;
    this.video.currentTime = seekTime;
  }

  toggleMute(): void {
    const newMuted = !this.isMuted();
    this.isMuted.set(newMuted);
    this.video.muted = newMuted;

    if (this.volumeBarRef) {
      this.volumeBarRef.nativeElement.value = newMuted
        ? '0'
        : (this.volume * 100).toString();
    }
  }

  changeVolume(event: Event): void {
    const input = event.target as HTMLInputElement;
    const newVolume = parseFloat(input.value) / 100;
    this.volume = newVolume;
    this.video.volume = newVolume;
    const shouldMute = newVolume === 0;
    this.isMuted.set(shouldMute);
    this.video.muted = shouldMute;
  }

  updateVolumeIcon = (): void => {
    this.isMuted.set(this.video.muted || this.video.volume === 0);
  };

  toggleFullScreen(): void {
    if (!document.fullscreenElement) {
      this.video.requestFullscreen().catch(err => {
        console.error(
          `Error attempting to enable full-screen mode: ${err.message}`
        );
      });
      this.isFullScreen = true;
    } else {
      document.exitFullscreen();
      this.isFullScreen = false;
    }
  }

  formatTime(seconds: number): string {
    if (isNaN(seconds)) return '00:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  closeModal(): void {
    this.ref.close();
  }
}
