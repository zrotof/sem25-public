import { Pipe, PipeTransform } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { faHandshake } from '@fortawesome/free-regular-svg-icons'
import { faPlay, faPause, faVolumeOff, faVolumeDown, faCalendarDays, faDownload, faPaperPlane, faEnvelope, faExpand, faPhone, faVideo, faHeart, faHome, faHandHoldingDollar, faUser, faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons'

import { faFacebookF, faInstagram, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons';

@Pipe({
  name: 'convertStringLabelToFontawesomeIcon',
  standalone: true,
  pure: false
})

export class ConvertStringLabelToFontawesomeIconPipe implements PipeTransform {

  transform(value: string): IconProp {
    switch (value) {
      case 'faCalendarDays':
        return faCalendarDays
      case 'faDownload':
        return faDownload
      case 'faEnvelope':
        return faEnvelope
      case 'faExpand':
        return faExpand
      case 'faFacebookF':
        return faFacebookF
      case 'faHandshake':
        return faHandshake
      case 'faHandHoldingDollar':
        return faHandHoldingDollar
      case 'faHeart':
        return faHeart
      case 'faHome':
        return faHome
      case 'faInstagram':
        return faInstagram
      case 'faPaperPlane':
        return faPaperPlane
      case 'faPause':
        return faPause
      case 'faPlay':
        return faPlay
      case 'faPhone':
        return faPhone
      case 'faVideo':
        return faVideo
      case 'faVolumeDown':
        return faVolumeDown
      case 'faVolumeMute':
        return faVolumeMute
      case 'faVolumeOff':
        return faVolumeOff
      case 'faVolumeUp':
        return faVolumeUp
      case 'faXTwitter':
        return faXTwitter
      case 'faYoutube':
        return faYoutube
      default:
        return faUser;
    }
  }

}
