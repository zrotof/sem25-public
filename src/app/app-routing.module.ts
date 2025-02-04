import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"articles",
    loadChildren : () => import('./features/article/article.module').then(m =>m.ArticleModule)
  },
  {
    path:"agenda",
    loadChildren : () => import('./features/agenda/agenda.module').then(m =>m.AgendaModule)
  },
  {
    path:"contact",
    loadChildren : () => import('./features/contact/contact.module').then(m =>m.ContactModule)
  },
  {
    path:"devenir-ambassadeur-de-campagne",
    loadChildren : () => import('./features/campain-ambassador/campain-ambassador.module').then(m =>m.CampainAmbassadorModule)
  },
  {
    path:"dons",
    loadChildren : () => import('./features/donation/donation.module').then(m =>m.DonationModule)
  },
  {
    path:"le-candidat",
    loadChildren : () => import('./features/candidate/candidate.module').then(m =>m.CandidateModule)
  },
  {
    path:"le-programme",
    loadChildren : () => import('./features/program/program.module').then(m =>m.ProgramModule)
  },
  {
    path:"lives",
    loadChildren : () => import('./features/live/live.module').then(m =>m.LiveModule)
  },
  {
    path:"",
    loadChildren : () => import('./features/home/home.module').then(m=>m.HomeModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
    scrollPositionRestoration: "enabled"
})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
