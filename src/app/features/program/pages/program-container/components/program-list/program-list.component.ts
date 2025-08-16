import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Program } from 'src/app/shared/models/program';

@Component({
    selector: 'app-program-list',
    imports: [
        RouterLink,
        NgFor
    ],
    templateUrl: './program-list.component.html',
    styleUrls: ['./program-list.component.scss']
})

export class ProgramListComponent {
  @Input() programs !: Program[];
  @Output() onProjectSelectedEvent = new EventEmitter<string>();

  onProjectSelected(projectId: string): void {
    this.onProjectSelectedEvent.emit(projectId);
  }
}
