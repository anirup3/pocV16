import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { LoanComponent } from './loan/loan/loan.component';

export const routes: Routes = [

  { path: '', component: HomeComponent },

  { path: 'home', component: HomeComponent },
  { path: 'loan', component: LoanComponent },

  // { path: '**', component: HomeComponent }
];
