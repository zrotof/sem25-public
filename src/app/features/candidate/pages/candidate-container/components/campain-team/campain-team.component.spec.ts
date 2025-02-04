import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampainTeamComponent } from './campain-team.component';

describe('CampainTeamComponent', () => {
  let component: CampainTeamComponent;
  let fixture: ComponentFixture<CampainTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CampainTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampainTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
