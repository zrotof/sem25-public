import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeVideoPlayerModalComponent } from './youtube-video-player-modal.component';

describe('YoutubeVideoPlayerModalComponent', () => {
  let component: YoutubeVideoPlayerModalComponent;
  let fixture: ComponentFixture<YoutubeVideoPlayerModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [YoutubeVideoPlayerModalComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeVideoPlayerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
