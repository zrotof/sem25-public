import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-agenda-data-list',
  standalone: true,
  imports: [
    RouterLink,
    NgFor
  ],
  templateUrl: './agenda-data-list.component.html',
  styleUrls: ['./agenda-data-list.component.scss']
})
export class AgendaDataListComponent {

  @Input() events: any; 

  months = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];

  getFormatedDate(dateString : string, stringHour : string) :string | null{
    let fullDate='';
    const date = new Date(dateString);
    const dayOfMonth = date.getDate();
    const monthName = this.months[date.getMonth()];
    const year = date.getFullYear();
    
    fullDate = dayOfMonth+" "+monthName+" "+year

    stringHour ? fullDate+=" à "+stringHour :  fullDate
    return fullDate
  }
}
