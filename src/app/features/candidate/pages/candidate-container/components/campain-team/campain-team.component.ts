import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { CampainTeam } from 'src/app/shared/models/campain-team';

@Component({
  selector: 'app-campain-team',
  standalone: true,
  imports: [
    NgFor,
    NgIf
  ],
  templateUrl: './campain-team.component.html',
  styleUrls: ['./campain-team.component.scss']
})

export class CampainTeamComponent {

  @Input() teamMembers !: CampainTeam[];

}
