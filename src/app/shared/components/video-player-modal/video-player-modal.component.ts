import { NgClass } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnDestroy, signal, ViewChild, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ConvertStringLabelToFontawesomeIconPipe } from '../../pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';

@Component({
  selector: 'app-video-player-modal',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './video-player-modal.component.html',
  styleUrl: './video-player-modal.component.scss',
  imports: [
    NgClass,
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe
  ],
})

export class VideoPlayerModalComponent implements AfterViewInit, OnDestroy {
  @ViewChild('videoPlayer') videoPlayerRef!: ElementRef<HTMLVideoElement>;
  @ViewChild('progressBar') progressBarRef!: ElementRef<HTMLDivElement>;
  @ViewChild('volumeBar') volumeBarRef!: ElementRef<HTMLInputElement>;

  videoSource !: string;
  video!: HTMLVideoElement;
  isPlaying: boolean = false;
  isMuted = signal(true);
  volume: number = 0.7; // Initial volume
  currentTime: string = '00:00';
  duration: string = '00:00';
  progress: number = 0; // Percentage of video played
  isFullScreen: boolean = false;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    public sanitizer: DomSanitizer) { }

  ngAfterViewInit(): void {
    this.videoSource = this.config.data.videoSource;
    this.video = this.videoPlayerRef.nativeElement;

    // Set initial volume
    this.video.volume = this.volume;
    if (this.volumeBarRef) {
      this.volumeBarRef.nativeElement.value = (this.volume * 100).toString();
    }

    // Event listeners for video
    this.video.addEventListener('timeupdate', this.updateProgress.bind(this));
    this.video.addEventListener('loadedmetadata', this.setDuration.bind(this));
    this.video.addEventListener('ended', this.onVideoEnd.bind(this));
    this.video.addEventListener('volumechange', this.updateVolumeIcon.bind(this));
  }

  ngOnDestroy(): void {
    // Clean up event listeners to prevent memory leaks
    if (this.video) {
      this.video.removeEventListener('timeupdate', this.updateProgress.bind(this));
      this.video.removeEventListener('loadedmetadata', this.setDuration.bind(this));
      this.video.removeEventListener('ended', this.onVideoEnd.bind(this));
      this.video.removeEventListener('volumechange', this.updateVolumeIcon.bind(this));
    }
  }

  // --- Video Playback Controls ---
  togglePlayPause(): void {
    if (this.video.paused || this.video.ended) {
      this.video.play();
      this.isPlaying = true;
    } else {
      this.video.pause();
      this.isPlaying = false;
    }
  }

  onVideoEnd(): void {
    this.isPlaying = false;
    this.video.currentTime = 0; // Reset video to start
    this.updateProgress(); // Update progress bar to 0
  }

  // --- Progress Bar ---
  updateProgress(): void {
    this.progress = (this.video.currentTime / this.video.duration) * 100;
    this.currentTime = this.formatTime(this.video.currentTime);
  }

  setDuration(): void {
    this.duration = this.formatTime(this.video.duration);
  }

  seek(event: MouseEvent): void {
    const progressBar = this.progressBarRef.nativeElement;
    const clickX = event.clientX - progressBar.getBoundingClientRect().left;
    const width = progressBar.offsetWidth;
    const seekTime = (clickX / width) * this.video.duration;
    this.video.currentTime = seekTime;
  }

  // --- Volume Controls ---
  toggleMute(): void {
    this.isMuted.set(!this.isMuted());
    this.video.muted = this.isMuted();
    if (this.volumeBarRef) {
      this.volumeBarRef.nativeElement.value = this.isMuted() ? '0' : (this.volume * 100).toString();
    }
  }

  changeVolume(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.volume = parseFloat(target.value) / 100;
    this.video.volume = this.volume;
    this.isMuted.set(true); // Mute if volume is 0
    this.volume === 0;
  }

  updateVolumeIcon(): void {
    this.isMuted.set(this.video.muted || this.video.volume === 0);
  }

  // --- Fullscreen ---
  toggleFullScreen(): void {
    if (!document.fullscreenElement) {
      this.video.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
      this.isFullScreen = true;
    } else {
      document.exitFullscreen();
      this.isFullScreen = false;
    }
  }

  // --- Helper Functions ---
  formatTime(seconds: number): string {
    if (isNaN(seconds)) return '00:00';
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  }


  closeModal(){
    this.ref.close();
  }
}
