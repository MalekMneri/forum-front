import { MembersComponent } from './pages/Admin/members/members.component';
import { RecommendationsComponent } from './pages/validator/recommendations/recommendations.component';
import { CurrenciesComponent } from './pages/FA/currencies/currencies.component';
import { MyOrdersComponent } from './pages/TA/my-orders/my-orders.component';
import { CreateOrderComponent } from './pages/TA/create-order/create-order.component';
import { PendingOrdersComponent } from './pages/validator/pending-orders/pending-orders.component';
import { RegisterComponent } from './Auth/register/register.component';
import { LoginComponent } from './Auth/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeGuard } from './guards/home.guard';
import { AccessGuard } from './guards/access.guard';

const routes: Routes = [
  {
    path: 'create-order',
    component: CreateOrderComponent,
    canActivate: [AccessGuard],
  },
  {
    path: 'recommendations',
    component: RecommendationsComponent,
    canActivate: [AccessGuard],
  },
  {
    path: 'members',
    component: MembersComponent,
    canActivate: [AccessGuard],
  },
  {
    path: 'orders',
    component: PendingOrdersComponent,
    canActivate: [AccessGuard],
  },
  {
    path: 'my-orders',
    component: MyOrdersComponent,
    canActivate: [AccessGuard],
  },
  {
    path: 'currencies',
    component: CurrenciesComponent,
    canActivate: [AccessGuard],
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AccessGuard],
  },
  {
    path: '',
    canActivate: [HomeGuard],
    component: MyOrdersComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
