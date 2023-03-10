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
import { AccountheadModule } from './module/accounthead/accounthead.module';
import { AdminModule } from './module/admin/admin.module';
import { TeleheadModule } from './module/telehead/telehead.module';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';
import { CreditmanagerModule } from './module/creditmanager/creditmanager.module';
import { OperationalexecutiveModule } from './module/operationalexecutive/operationalexecutive.module';
import { ToastrModule } from 'ngx-toastr';


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
    EmiCalculatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    BrowserAnimationsModule,
    CreditmanagerModule,
    OperationalexecutiveModule,
    RelationexecutiveModule,
    ReactiveFormsModule,
    OperationalexecutiveModule,
    CreditmanagerModule,
    HttpClientModule,
    AccountheadModule,
    TeleheadModule,
    ToastrModule.forRoot({
      timeOut: 5000,
    positionClass: 'toast-top-right',
    preventDuplicates: true,
    easing:'ease-in',
    easeTime:700
    }), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
