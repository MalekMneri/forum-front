import { CurrenciesComponent } from './pages/FA/currencies/currencies.component';
import { MyOrdersComponent } from './pages/TA/my-orders/my-orders.component';
import { CreateOrderComponent } from './pages/TA/create-order/create-order.component';
import { PendingOrdersComponent } from './pages/validator/pending-orders/pending-orders.component';
import { RegisterComponent } from './Auth/register/register.component';
import { LoginComponent } from './Auth/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'create-order', component: CreateOrderComponent },
  { path: 'pending-orders', component: PendingOrdersComponent },
  { path: 'my-orders', component: MyOrdersComponent },
  { path: 'currencies', component: CurrenciesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/pending-orders', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
