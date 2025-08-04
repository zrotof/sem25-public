import { Component, Input } from '@angular/core';
import { Event } from 'src/app/shared/models/Agenda';

@Component({
  selector: 'app-event-without-content',
  standalone: true,
  templateUrl: './event-without-content.component.html',
  styleUrls: ['./event-without-content.component.scss']
})
export class EventWithoutContentComponent {

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

    const url = `https://demo.matomba2025.com/agenda/${this.data.id}`;
    
    let shareLink = '';

    switch (socialMedia) {
      case 'facebook':
        
      const messageFacebook = 
        "🇨🇲 Serge Espoir MATOMBA - Campagne Présidentielle 2025"
        +"\n\n"+
        "Nous avons le plaisir de vous informer que nous tiendrons prochainement un événement de notre campagne électorale dont les informations sont les suivantes :"
        +"\n"+
        `Thème : ${this.data.title}`
        +"\n"+
        +`Date : ${this.getFormatedDate(this.data.date, this.data.hour)}`
        +"\n"+
        "Vous pourrez accéder aux détails de l'événement une fois qu'il aura eu lieu."
        "Retrouvez aussi d'autres éléments clés de notre campagne sur notre site web : https://demo.matomba2025.com/articles"
        +"\n\n"+
        "Restez informés et impliqués dans notre campagne pour l'avenir du CAMEROUN."
        +"\n"+
        "#MATOMBA2025 #Présidentielle2025 #Cameroun"
        
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://demo.matomba2025.com/articles')}&t=ok`;
        
        break;

      case 'whatsapp':
        const messageWhatsapp = 
        "🇨🇲 *Évènement À Venir*"
        +"\n\n"+
        `Date: ${this.getFormatedDate(this.data.date, this.data.hour)}`
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
        `Ne manquez pas le prochain évènement du ${this.getFormatedDate(this.data.date, this.data.hour)}`
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
