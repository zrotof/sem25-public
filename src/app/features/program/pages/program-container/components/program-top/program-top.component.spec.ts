import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramTopComponent } from './program-top.component';

describe('ProgramTopComponent', () => {
  let component: ProgramTopComponent;
  let fixture: ComponentFixture<ProgramTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramTopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
