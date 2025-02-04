import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTimeZoneToDate',
  standalone : true
})
export class ConvertTimeZoneToDatePipe implements PipeTransform {

  months = [
    "Jan", "Fév", "Mars", "Avr", "Mai", "Juin",
    "Juil", "Août", "Sept", "Oct", "Nov", "Déc"
  ];

  transform(value: string, ...args: unknown[]): string {
    const date = new Date(value);

    const day = date.getDate();
    const month = this.months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month}, ${year}`;
  }

}
