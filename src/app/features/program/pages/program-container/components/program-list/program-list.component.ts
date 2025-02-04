import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Program } from 'src/app/shared/models/program';

@Component({
  selector: 'app-program-list',
  standalone: true,
  imports: [
    RouterLink,
    NgFor
  ],
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.scss']
})

export class ProgramListComponent {
  @Input() programs !: Program[];
}
