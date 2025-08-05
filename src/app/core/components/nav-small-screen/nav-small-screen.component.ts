import { NgFor } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Network } from 'src/app/shared/models/network';
import { ConvertStringLabelToFontawesomeIconPipe } from 'src/app/shared/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';
import { UtilsService } from 'src/app/shared/services/utils/utils.service';

@Component({
  selector: 'app-nav-small-screen',
  templateUrl: './nav-small-screen.component.html',
  styleUrls: ['./nav-small-screen.component.scss'],
  standalone : true,
  imports : [
    RouterLinkActive,
    RouterLink,
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe
  ]
})

export class NavSmallScreenComponent implements OnInit {

  @Output() onNavigationOnSmallScreenEvent = new EventEmitter<boolean>();
  networks !: Network[] ;
  
  constructor( private utilsService: UtilsService) { }

  ngOnInit(): void {
    this.getSocialMediaNetworks();
  }

  getSocialMediaNetworks(){
    this.networks = this.utilsService.getSocialMediaNetWorks();
  }

  onNavigationClicked(){
    this.onNavigationOnSmallScreenEvent.emit(false);
  }

}
