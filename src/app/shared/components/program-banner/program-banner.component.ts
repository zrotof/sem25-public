import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-program-banner',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './program-banner.component.html',
  styleUrls: ['./program-banner.component.scss']
})
export class ProgramBannerComponent {

}
