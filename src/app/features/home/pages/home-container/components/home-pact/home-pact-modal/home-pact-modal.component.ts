import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-home-pact-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-pact-modal.component.html',
  styleUrls: ['./home-pact-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePactModalComponent {

  constructor(
    public config: DynamicDialogConfig,
    public ref: DynamicDialogRef,
  ){}

  onCancelAddEditEventType(){
    this.ref.close();
  }

}
