import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Event } from 'src/app/shared/models/Agenda';
import { ArticleVideoPlayerComponent } from 'src/app/shared/components/article-video-player/article-video-player.component';

@Component({
  selector: 'app-event-with-content',
  standalone: true,
  imports: [
    ArticleVideoPlayerComponent
  ],
  templateUrl: './event-with-content.component.html',
  styleUrls: ['./event-with-content.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class EventWithContentComponent {

  @Input() data !: Event;

  months = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];

  getFormatedDate(dateString : string, stringHour : string | undefined) :string | null{
    let fullDate='';
    const date = new Date(dateString);
    const dayOfMonth = date.getDate();
    const monthName = this.months[date.getMonth()];
    const year = date.getFullYear();
    
    fullDate = dayOfMonth+" "+monthName+" "+year

    stringHour ? fullDate+=" à "+stringHour :  fullDate
    return fullDate
  }

  onShareOnSocialMedia( socialMedia : string ) : void {

    const url = `https://amadou-ba.sn/agenda/${this.data.id}`;
    console.log(url);
    
    let shareLink = '';

    switch (socialMedia) {
      case 'facebook':
        
      const messageFacebook = 
        "🇨🇲 Serge Espoir MATOMBA - Campagne Présidentielle 2025"
        +"\n\n"+
        `Nous avons le plaisir de vous inviter à découvrir un moment spécial de la campagne électorale présidentielle du candidat Serge Espoir MATOMBA du : ${this.getFormatedDate(this.data.date, this.data.hour)}`
        +"\n"+
        `Thème : ${this.data.title}`
        +"\n"+
        "Restez informés et impliqués dans notre campagne pour l'avenir du CAMEROUN."
        +"\n"+
        "#MATOMBA2025 #Présidentielle2025 #CAMEROUN"
        
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://demo.matomba2025.com/articles')}&quote=${encodeURIComponent(messageFacebook)}`;
        
        break;

      case 'whatsapp':
        const messageWhatsapp = 
        "🇨🇲 *Campagne Électorale Présidentielle 2024 du CAMEROUN*"
        +"\n\n"+
        `Nous avons le plaisir de vous inviter à découvrir un moment spécial de la campagne électorale présidentielle du candidat Serge Espoir MATOMBA du : ${this.getFormatedDate(this.data.date, this.data.hour)}`
        +"\n"+
        `Thème: ${this.data.title}`
        +"\n\n"+
        `${url}`

        shareLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(messageWhatsapp)}`;
        break;

      case 'x':
        const message2 = 
        "🇨🇲 Serge Espoir MATOMBA - Campagne Présidentielle 2025"
        +"\n\n"+
        `Découvrez l'évènement du ${this.getFormatedDate(this.data.date, this.data.hour)}`
        +"\n"+
        `Thème : ${this.data.title}`
        +"\n\n"
        shareLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message2)}&url=${url}`;
        break;

      default:
        return;
    }

    window.open(shareLink, '_blank');

  }
}
