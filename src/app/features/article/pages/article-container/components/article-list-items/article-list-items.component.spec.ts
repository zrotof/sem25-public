import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleListItemsComponent } from './article-list-items.component';

describe('ArticleListItemsComponent', () => {
  let component: ArticleListItemsComponent;
  let fixture: ComponentFixture<ArticleListItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ArticleListItemsComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(ArticleListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
