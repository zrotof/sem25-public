import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaContainerComponent } from './agenda-container.component';

describe('AgendaContainerComponent', () => {
  let component: AgendaContainerComponent;
  let fixture: ComponentFixture<AgendaContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [AgendaContainerComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(AgendaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
