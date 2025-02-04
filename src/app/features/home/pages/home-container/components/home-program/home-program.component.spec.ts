import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProgramComponent } from './home-program.component';

describe('HomeProgramComponent', () => {
  let component: HomeProgramComponent;
  let fixture: ComponentFixture<HomeProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeProgramComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
