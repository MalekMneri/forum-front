import { CreateOrderComponent } from './create-order/create-order.component';
import { PendingOrdersComponent } from './validator/pending-orders/pending-orders.component';
import { EditBpComponent } from './Admin/bestpractices-table/edit-bp/edit-bp.component';
import { DocumentationDetailsComponent } from './documentations/documentation-details/documentation-details.component';
import { DocumentationsComponent } from './documentations/documentations.component';
import { AddDocumentationComponent } from './Admin/documentations-table/add-documentation/add-documentation.component';
import { DocumentationsTableComponent } from './Admin/documentations-table/documentations-table.component';
import { AddBestpracticeComponent } from './Admin/bestpractices-table/add-bestpractice/add-bestpractice.component';
import { BestpracticesTableComponent } from './Admin/bestpractices-table/bestpractices-table.component';
import { EditEventComponent } from './Admin/events-table/edit-event/edit-event.component';
import { AddEventComponent } from './Admin/events-table/add-event/add-event.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { EventsTableComponent } from './Admin/events-table/events-table.component';
import { UsersTableComponent } from './Admin/users-table/users-table.component';
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
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'events',
        children: [
          { path: '', component: EventsTableComponent },
          { path: 'add', component: AddEventComponent },
          { path: 'edit/:id', component: EditEventComponent },
        ],
      },
      {
        path: 'bestPractices',
        children: [
          { path: '', component: BestpracticesTableComponent },
          { path: 'add', component: AddBestpracticeComponent },
          { path: 'edit/:id', component: EditBpComponent },
        ],
      },
      {
        path: 'documentations',
        children: [
          { path: '', component: DocumentationsTableComponent },
          { path: 'add', component: AddDocumentationComponent },
        ],
      },
      { path: 'users', component: UsersTableComponent },
    ],
  },
  { path: 'add-order', component: CreateOrderComponent },
  {
    path: 'pending-orders',
    children: [
      { path: '', component: PendingOrdersComponent },
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
  {
    path: 'documentations',
    children: [
      { path: '', component: DocumentationsComponent },
      { path: ':id', component: DocumentationDetailsComponent },
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
