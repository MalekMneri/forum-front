import { RegisterComponent } from './Auth/register/register.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventsComponent } from './events/events.component';
import { BpDetailsComponent } from './bestpractices/bp-details/bp-details.component';
import { BestpracticesComponent } from './bestpractices/bestpractices.component';
import { LoginComponent } from './Auth/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'events',
    children: [
      { path: '', component: EventsComponent },
      { path: ':id', component: EventDetailsComponent },
    ],
  },
  {
    path: 'bestPractices',
    children: [
      { path: '', component: BestpracticesComponent },
      { path: ':id', component: BpDetailsComponent },
    ],
  },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/bestPractices', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
