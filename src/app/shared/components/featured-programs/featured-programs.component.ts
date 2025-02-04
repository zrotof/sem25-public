import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-featured-programs',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    RouterLink,
    TooltipModule
  ],
  templateUrl: './featured-programs.component.html',
  styleUrls: ['./featured-programs.component.scss']
})
export class FeaturedProgramsComponent {

  programs = [
    {
      title : "Éducation pour Tous ",
      description : "Nous nous engageons à offrir une éducation de qualité accessible à tous nos citoyens, créant ainsi une société instruite, compétente et innovante.",
      url:""
    },
    {
      title : "Croissance Économique Durable",
      description : "Nous œuvrons pour une économie robuste et durable, favorisant l'investissement, la création d'emplois et la préservation de notre environnement.",
      url:""
    },
    {
      title : "Santé et Bien-Être",
      description : "La santé de nos citoyens est notre priorité. Nous visons à garantir des soins de santé de qualité et à promouvoir le bien-être pour tous.",
      url:""
    },
    {
      title : "Gouvernance Transparente et Inclusive",
      description : "À travers une gouvernance transparente et participative, nous renforçons la confiance du peuple, l'État de droit et la justice sociale.",
      url:""
    }

  ]
}