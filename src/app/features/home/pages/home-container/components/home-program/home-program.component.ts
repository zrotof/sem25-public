import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-program',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './home-program.component.html',
  styleUrl: './home-program.component.scss'
})
export class HomeProgramComponent {}
