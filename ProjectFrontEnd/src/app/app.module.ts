import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FaqsComponent } from './faqs/faqs.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RelationexecutiveModule } from './module/relationexecutive/relationexecutive.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginfailedComponent } from './loginfailed/loginfailed.component';
import { AdminPageModule } from './module/admin-page/admin-page.module';
import { AdminComponent } from './module/adminPage/admin/admin.component';
import { OperationExecutiveModule } from './module/operation-executive/operation-executive.module';
import { CreditManagerModule } from './module/credit-manager/credit-manager.module';
import { AccountHeadModule } from './module/account-head/account-head.module';
import { TeleHeadModule } from './module/tele-head/tele-head.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutusComponent,
    ContactusComponent,
    FaqsComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LoginfailedComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RelationexecutiveModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminPageModule,
    OperationExecutiveModule,
    CreditManagerModule,
    AccountHeadModule,
    TeleHeadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
