import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateContainerComponent } from './candidate-container.component';

describe('CandidateContainerComponent', () => {
  let component: CandidateContainerComponent;
  let fixture: ComponentFixture<CandidateContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [CandidateContainerComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(CandidateContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
