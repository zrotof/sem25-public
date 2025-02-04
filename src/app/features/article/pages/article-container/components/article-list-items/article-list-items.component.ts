import { NgFor } from '@angular/common';
import { Component, Input} from '@angular/core';
import { ArticleItemComponent } from '../article-item/article-item.component';

@Component({
  selector: 'app-article-list-items',
  standalone: true,
  imports: [
    NgFor,
    ArticleItemComponent
  ],
  templateUrl: './article-list-items.component.html',
  styleUrls: ['./article-list-items.component.scss']
})

export class ArticleListItemsComponent{
  @Input() articles : any;
}
