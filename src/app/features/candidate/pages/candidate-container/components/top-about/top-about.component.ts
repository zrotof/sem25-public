import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-top-about',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './top-about.component.html',
  styleUrls: ['./top-about.component.scss']
})
export class TopAboutComponent {

}
