import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Event } from 'src/app/shared/models/Agenda';

@Component({
  selector: 'app-agenda-data-next',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    RouterLink
  ],
  templateUrl: './agenda-data-next.component.html',
  styleUrls: ['./agenda-data-next.component.scss']
})

export class AgendaDataNextComponent {

  @Input() events !: Event[];

  months = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];

  getDayDate( dateString : string) : number | null {
    const date = new Date(dateString);

    const dayOfMonth = date.getDate();
    return dayOfMonth;
  }

  getMonthDate( dateString : string) : string | null {
    const date = new Date(dateString);

    const monthName = this.months[date.getMonth()];
    return monthName;
  }

}
