import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { JwtInterceptorProvider } from './Services/jwt.interceptor';
import { PendingOrdersComponent } from './validator/pending-orders/pending-orders.component';
import { CreateOrderComponent } from './TA/create-order/create-order.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    PendingOrdersComponent,
    CreateOrderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [JwtInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
