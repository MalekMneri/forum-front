import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { BestpracticesComponent } from './bestpractices/bestpractices.component';
import { BpDetailsComponent } from './bestpractices/bp-details/bp-details.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { UsersTableComponent } from './Admin/users-table/users-table.component';
import { EventsTableComponent } from './Admin/events-table/events-table.component';
import { SidebarComponent } from './Admin/sidebar/sidebar.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { AddEventComponent } from './Admin/events-table/add-event/add-event.component';
import { EditEventComponent } from './Admin/events-table/edit-event/edit-event.component';
import { BestpracticesTableComponent } from './Admin/bestpractices-table/bestpractices-table.component';
import { AddBestpracticeComponent } from './Admin/bestpractices-table/add-bestpractice/add-bestpractice.component';
import { DocumentationsTableComponent } from './Admin/documentations-table/documentations-table.component';
import { AddDocumentationComponent } from './Admin/documentations-table/add-documentation/add-documentation.component';
import { DocumentationsComponent } from './documentations/documentations.component';
import { DocumentationDetailsComponent } from './documentations/documentation-details/documentation-details.component';
import { JwtInterceptorProvider } from './Services/jwt.interceptor';
import { EditBpComponent } from './Admin/bestpractices-table/edit-bp/edit-bp.component';
import { PendingOrdersComponent } from './validator/pending-orders/pending-orders.component';
import { CreateOrderComponent } from './create-order/create-order.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EventDetailsComponent,
    BestpracticesComponent,
    BpDetailsComponent,
    HeaderComponent,
    UsersTableComponent,
    EventsTableComponent,
    SidebarComponent,
    DashboardComponent,
    AddEventComponent,
    EditEventComponent,
    BestpracticesTableComponent,
    AddBestpracticeComponent,
    DocumentationsTableComponent,
    AddDocumentationComponent,
    DocumentationsComponent,
    DocumentationDetailsComponent,
    EditBpComponent,
    PendingOrdersComponent,
    CreateOrderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [JwtInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
