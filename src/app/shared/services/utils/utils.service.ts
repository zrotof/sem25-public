import { Injectable } from '@angular/core';
import { Network } from '../../models/network';
@Injectable({
  providedIn: 'root'
})

export class UtilsService {


  getSocialMediaNetWorks() : Network[]{
    const networks : Network[] = [
      {
        sourceImg : "../../../assets/img/social-medias/facebook.png",
        link : "https://www.facebook.com/amadoubalofficiel",
        name : "Facebook",
        icon: "faFacebookF"
      },
      {
        sourceImg : "../../../assets/img/social-medias/instagram.png",
        link : "https://www.instagram.com/amadouba_officiel/",
        name : "Instagram",
        icon: "faInstagram"
      },
      {
        sourceImg : "../../../assets/img/social-medias/twitter.png",
        link : "https://twitter.com/amadou_ba_",
        name : "Twitter",
        icon: "faXTwitter"
      },
      {
        sourceImg : "../../../assets/img/social-medias/youtube.png",
        link : "https://www.youtube.com/@AmadouBa-sn",
        name : "Youtube",
        icon: "faYoutube"
      }
    ]
    
    return networks
  }
}
