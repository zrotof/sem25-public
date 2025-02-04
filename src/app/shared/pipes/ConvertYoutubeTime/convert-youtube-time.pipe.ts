import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';
import * as duration from 'dayjs/plugin/duration'

dayjs.extend(duration)

@Pipe({
  name: 'convertYoutubeTime',
  standalone : true
})
export class ConvertYoutubeTimePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): any {
    
    let momentTime = dayjs.duration(value);

    let hours : string ='';
    let minutes : string ='';
    let seconds : string ='';

    let stringHour = '/';

    if( momentTime.hours()){
      if(momentTime.hours() < 10 && momentTime.hours() > 0){
        hours = '0' + momentTime.hours(); 
      }

      if(momentTime.hours() > 9){
        hours = '' + momentTime.hours();
      }
    }

    if( momentTime.minutes() ) {

      if(momentTime.minutes() < 10 && momentTime.minutes() > 0){
        minutes = '0' + momentTime.minutes(); 
      }

      if(momentTime.minutes() > 9){
        minutes = '' + momentTime.minutes();
      }
    }
    else{
      minutes = '00'; 
    }

    if( momentTime.seconds()){

      if( momentTime.seconds() < 10 && momentTime.seconds() > 0){
        seconds = '0' + momentTime.seconds(); 
      }

      if( momentTime.seconds() > 9 ){
        seconds = '' + momentTime.seconds(); 
      }
    
    }
    else{
      seconds = '00';
    }

    stringHour  = (hours.length > 0) ? (hours + ':' + minutes + ':' + seconds) : (minutes + ':' + seconds);
   
     return  stringHour ;
  }

}
