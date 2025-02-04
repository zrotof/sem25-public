import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramBlocComponent } from './program-bloc.component';

describe('ProgramBlocComponent', () => {
  let component: ProgramBlocComponent;
  let fixture: ComponentFixture<ProgramBlocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ProgramBlocComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(ProgramBlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
