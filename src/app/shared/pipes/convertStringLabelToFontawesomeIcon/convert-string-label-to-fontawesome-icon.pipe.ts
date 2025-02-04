import { Pipe, PipeTransform } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { faHandshake } from '@fortawesome/free-regular-svg-icons'
import { faPlay, faCalendarDays, faPaperPlane ,faEnvelope, faPhone,faVideo, faHeart, faHome, faHandHoldingDollar, faUser } from '@fortawesome/free-solid-svg-icons'

@Pipe({
  name: 'convertStringLabelToFontawesomeIcon',
  standalone : true
})
export class ConvertStringLabelToFontawesomeIconPipe implements PipeTransform {

  transform(value: string): IconProp {
    switch (value) {
      case 'faCalendarDays':
        return faCalendarDays
      case 'faEnvelope':
        return faEnvelope
      case 'faHandshake':
        return faHandshake
      case 'faHandHoldingDollar':
        return faHandHoldingDollar
      case 'faHeart':
        return faHeart
      case 'faHome':
        return faHome
      case 'faPaperPlane':
        return faPaperPlane
      case 'faPlay':
        return faPlay
      case 'faPhone':
        return faPhone
      case 'faVideo':
        return faVideo
      default:
        return faUser;
    }
  }

}
