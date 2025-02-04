import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Network } from 'src/app/shared/models/network';
import { UtilsService } from 'src/app/shared/services/utils/utils.service';

@Component({
  selector: 'app-about-candidate',
  standalone: true,
  imports: [
    NgFor,
    RouterLink
  ],
  templateUrl: './about-candidate.component.html',
  styleUrls: ['./about-candidate.component.scss']
})

export class AboutCandidateComponent implements OnInit {

  networks !: Network[];

  constructor( private utilsService: UtilsService){}


  ngOnInit(): void {
    this.getSocialMediaNetworks();
  }

  getSocialMediaNetworks(){
    this.networks = this.utilsService.getSocialMediaNetWorks();
  }

}
