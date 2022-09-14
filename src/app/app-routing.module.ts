import { CreateOrderComponent } from './TA/create-order/create-order.component';
import { PendingOrdersComponent } from './validator/pending-orders/pending-orders.component';
import { RegisterComponent } from './Auth/register/register.component';
import { LoginComponent } from './Auth/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'dashboard',
  //   component: DashboardComponent,
  //   children: [
  //     {
  //       path: 'events',
  //       children: [
  //         { path: '', component: EventsTableComponent },
  //         { path: 'add', component: AddEventComponent },
  //         { path: 'edit/:id', component: EditEventComponent },
  //       ],
  //     },
  //     {
  //       path: 'bestPractices',
  //       children: [
  //         { path: '', component: BestpracticesTableComponent },
  //         { path: 'add', component: AddBestpracticeComponent },
  //         { path: 'edit/:id', component: EditBpComponent },
  //       ],
  //     },
  //     {
  //       path: 'documentations',
  //       children: [
  //         { path: '', component: DocumentationsTableComponent },
  //         { path: 'add', component: AddDocumentationComponent },
  //       ],
  //     },
  //     { path: 'users', component: UsersTableComponent },
  //   ],
  // },
  { path: 'add-order', component: CreateOrderComponent },
  { path: 'pending-orders', component: PendingOrdersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/pending-orders', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
