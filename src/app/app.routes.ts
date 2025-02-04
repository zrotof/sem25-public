import { Routes } from '@angular/router';

export const routes: Routes = [
    
    {
        path:"",   
        loadComponent : () => import('./features/home/pages/home-container/home-container.component').then(m => m.HomeContainerComponent)
    },
    {
        path:"agenda",
        data : {
            backgrounded : true
        },
        children : [
            {
                path : "",
                loadComponent : () => import('./features/agenda/pages/agenda-container/agenda-container.component').then(m => m.AgendaContainerComponent)
            },
            {
                path : ":id",
                loadComponent : () => import('./features/agenda/pages/agenda-details-container/agenda-details-container.component').then(m => m.AgendaDetailsContainerComponent)
            }
        ]
    },
    {
        path:"articles",
        data : {
            backgrounded : true
        },
        children : [
            {
                path : "",
                loadComponent : () => import('./features/article/pages/article-container/article-container.component').then(m => m.ArticleContainerComponent)
            },
            {
                path : ":id",
                loadComponent : () => import('./features/article/pages/article-detail-container/article-detail-container.component').then(m => m.ArticleDetailContainerComponent)
            }
        ]
    },
    {
        path:"devenir-ambassadeur-de-campagne",   
        loadComponent : () => import('./features/campain-ambassador/pages/campain-ambassador-container/campain-ambassador-container.component').then(m => m.CampainAmbassadorContainerComponent),
        data : {
            backgrounded : true
        }
    },
    {
        path:"le-candidat",   
        loadComponent : () => import('./features/candidate/pages/candidate-container/candidate-container.component').then(m => m.CandidateContainerComponent),
        data : {
            backgrounded : true
        }
    },
    {
        path:"contact",
        loadComponent : () => import('./features/contact/pages/contact-container/contact-container.component').then(m => m.ContactContainerComponent),
        data : {
          backgrounded : true
        }
    },
    {
        path:"lives",
        loadComponent : () => import('./features/live/pages/live-container/live-container.component').then(m => m.LiveContainerComponent),
        data : {
          backgrounded : true
        }
    },
    {
        path:"le-programme",
        data : {
            backgrounded : true
        },
        children : [
            {
                path : "",
                loadComponent : () => import('./features/program/pages/program-container/program-container.component').then(m => m.ProgramContainerComponent)
            },
            {
                path : ":theme",
                loadComponent : () => import('./features/agenda/pages/agenda-details-container/agenda-details-container.component').then(m => m.AgendaDetailsContainerComponent)
            }
        ]
    }
];