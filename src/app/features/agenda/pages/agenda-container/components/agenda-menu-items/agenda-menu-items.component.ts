import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agenda-menu-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './agenda-menu-items.component.html',
  styleUrls: ['./agenda-menu-items.component.scss']
})

export class AgendaMenuItemsComponent {
  @Input() menuList !: any;
  @Output() menuItemClikedEvent = new EventEmitter<string>();

  private isFirstChange = true;

  setActiveMenu( index : number){
    this.menuList.forEach((menu : any) => menu.isActive = false );
    this.menuList[index].isActive = true;
  }

  getEventListByEventTypeId(eventTypeId : string, index: number){
    if(this.menuList[index].isActive === false){
      this.setActiveMenu(index);
      this.menuItemClikedEvent.emit(eventTypeId);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['menuList'].currentValue && this.isFirstChange){
        this.getEventListByEventTypeId(this.menuList[0].id, 0);
        this.isFirstChange = false;
    }
  }
}