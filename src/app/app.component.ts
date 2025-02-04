import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { FooterComponent } from './core/components/footer/footer.component';
import { HeaderComponent } from './core/components/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone : true,
  imports : [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ]
})
export class AppComponent implements OnInit {

  title="sem-2025"

  ngOnInit(): void {
    AOS.init();
  }
}
