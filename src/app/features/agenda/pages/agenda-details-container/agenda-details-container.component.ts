import { Component, OnInit } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { AgendaService } from 'src/app/shared/services/agenda/agenda.service';
import { Observable } from 'rxjs';
import { Event } from 'src/app/shared/models/Agenda';
import { ActivatedRoute } from '@angular/router';
import { EventWithContentComponent } from './components/event-with-content/event-with-content.component';
import { EventWithoutContentComponent } from './components/event-without-content/event-without-content.component';

@Component({
  selector: 'app-agenda-details-container',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf ,
    EventWithContentComponent,
    EventWithoutContentComponent
  ],
  templateUrl: './agenda-details-container.component.html',
  styleUrls: ['./agenda-details-container.component.scss']
})

export class AgendaDetailsContainerComponent implements OnInit {

  data$ !: Observable<Event>;
  eventId !: string;

  constructor(
    private agendaService : AgendaService,
    private activatedRoute : ActivatedRoute

  ){}

  ngOnInit(): void {
      this.getAgendaData();
  }

  getAgendaData() : void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.eventId = params.get('id') as string;
      this.getEventDataById(this.eventId);
    })
  }

  getEventDataById(eventId : string){
    this.data$ = this.agendaService.getEventById(eventId)
  }

}
