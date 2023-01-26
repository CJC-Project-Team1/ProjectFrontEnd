import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditmanagerRoutingModule } from './creditmanager-routing.module';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { LoanAppDetailsComponent } from './loan-app-details/loan-app-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SanctionLetterComponent } from './sanction-letter/sanction-letter.component';
import { CmNotificationComponent } from './cm-notification/cm-notification.component';
import { SanctionedLoanDetailsComponent } from './sanctioned-loan-details/sanctioned-loan-details.component';
import { SanctionedLoanListComponent } from './sanctioned-loan-list/sanctioned-loan-list.component';



@NgModule({
  declarations: [
    LoanApplicationComponent,
    LoanAppDetailsComponent,
    SanctionLetterComponent,
    CmNotificationComponent,
    SanctionedLoanDetailsComponent,
    SanctionedLoanListComponent
  ],
  imports: [
    CommonModule,
    CreditmanagerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CreditmanagerModule { }
