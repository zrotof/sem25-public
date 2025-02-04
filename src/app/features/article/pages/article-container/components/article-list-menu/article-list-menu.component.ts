import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ArticleCategory } from 'src/app/shared/models/blog';

@Component({
  selector: 'app-article-list-menu',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    NgClass
  ],
  templateUrl: './article-list-menu.component.html',
  styleUrls: ['./article-list-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ArticleListMenuComponent implements OnChanges {
  
  @Input() targetMenuId !: string | null;
  @Input() menuList !: ArticleCategory[] ;
  @Output() menuItemClikedEvent = new EventEmitter<string>();

  private isFirstChange = true;

  setActiveMenu( index : number){
    this.menuList.forEach(menu => menu.isActive = false );
    this.menuList[index].isActive = true;
  }

  getBlogsByCategoryId(id: string, index: number){
    if(this.menuList[index].isActive === false){
      this.setActiveMenu(index);
      this.menuItemClikedEvent.emit(id);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['menuList'].currentValue && this.isFirstChange){

      if(this.targetMenuId){

        const targetMenu = this.menuList.find((menu) => menu.id === this.targetMenuId)

        if(targetMenu){

          const index = this.menuList.indexOf(targetMenu);

          this.getBlogsByCategoryId(this.targetMenuId, index)
        }
        else{
          this.getBlogsByCategoryId(this.menuList[0].id, 0);
        }
      }else{

        this.getBlogsByCategoryId(this.menuList[0].id, 0);
      }

      this.isFirstChange = false;
    }
  }

}
