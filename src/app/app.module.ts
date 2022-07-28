import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { EventsComponent } from './events/events.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { BestpracticesComponent } from './bestpractices/bestpractices.component';
import { BpDetailsComponent } from './bestpractices/bp-details/bp-details.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EventsComponent,
    EventDetailsComponent,
    BestpracticesComponent,
    BpDetailsComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
