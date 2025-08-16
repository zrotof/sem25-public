import { Component, ViewEncapsulation } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
    selector: 'app-program-modal',
    templateUrl: './program-modal.component.html',
    styleUrl: './program-modal.component.scss',
    encapsulation: ViewEncapsulation.None,
    imports: []
})

export class ProgramModalComponent {

  program = this.config.data.program;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig) { }

      closeModal(data : any){
    this.ref.close();
  }
}
