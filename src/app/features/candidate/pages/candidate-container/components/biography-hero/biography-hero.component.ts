import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-biography-hero',
  standalone: true,
  templateUrl: './biography-hero.component.html',
  styleUrl: './biography-hero.component.scss',
  imports: [
    NgOptimizedImage
  ],
})
export class BiographyHeroComponent {

}
