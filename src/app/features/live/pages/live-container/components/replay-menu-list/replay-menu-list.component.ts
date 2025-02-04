import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplayMenu } from 'src/app/shared/models/replay';

@Component({
  selector: 'app-replay-menu-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './replay-menu-list.component.html',
  styleUrls: ['./replay-menu-list.component.scss']
})
export class ReplayMenuListComponent implements OnChanges {

  @Input() replayMenuList !: ReplayMenu[];
  @Output() replayMenuItemClikedEvent = new EventEmitter<string>();

  private isFirstChange = true;

  setActiveMenu( index : number){
    this.replayMenuList.forEach(menu => menu.isActive = false );
    this.replayMenuList[index].isActive = true;
  }

  getReplayListByReplayCategoryId(playlistId : string, index: number){
    if(this.replayMenuList[index].isActive === false){
      this.setActiveMenu(index);
      this.replayMenuItemClikedEvent.emit(playlistId);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['replayMenuList'].currentValue && this.isFirstChange){
        this.getReplayListByReplayCategoryId(this.replayMenuList[0].playlistId, 0);
        this.isFirstChange = false;
    }
  }
}
