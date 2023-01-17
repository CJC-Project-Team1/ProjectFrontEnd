import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FaqsComponent } from './faqs/faqs.component';
import { RegistrationComponent } from './registration/registration.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RelationexecutiveModule } from './module/relationexecutive/relationexecutive.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginfailedComponent } from './loginfailed/loginfailed.component';
import { OperationalexecutiveModule } from './module/operationalexecutive/operationalexecutive.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutusComponent,
    ContactusComponent,
    FaqsComponent,
    RegistrationComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LoginfailedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RelationexecutiveModule,
    ReactiveFormsModule,
    HttpClientModule,
    OperationalexecutiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
