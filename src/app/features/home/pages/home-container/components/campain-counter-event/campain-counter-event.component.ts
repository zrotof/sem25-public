import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-campain-counter-event',
    templateUrl: './campain-counter-event.component.html',
    styleUrls: ['./campain-counter-event.component.scss'],
    imports: [
        RouterLink,
        NgOptimizedImage
    ]
})
export class CampainCounterEventComponent implements OnInit{

  countdown: any = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  targetDate: Date = new Date('2025-10-12T00:00:00');

  constructor() { }

  ngOnInit(): void {
    interval(1000).subscribe(() => {
      this.updateCountdown();
    });
  }

  updateCountdown(): void {
    const currentDate: Date = new Date();
    const timeDifference: number = this.targetDate.getTime() - currentDate.getTime();
  
    if (timeDifference > 0) {
      this.countdown.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      this.countdown.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.countdown.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      this.countdown.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
      // Formatez les nombres pour avoir au moins deux chiffres
      this.countdown.hours = this.countdown.hours.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
      this.countdown.minutes = this.countdown.minutes.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
      this.countdown.seconds = this.countdown.seconds.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
    } else {
      // La date cible est passée, vous pouvez gérer cette condition comme vous le souhaitez
      this.countdown.days = 0;
      this.countdown.hours = '00';
      this.countdown.minutes = '00';
      this.countdown.seconds = '00';
    }
  }
}
