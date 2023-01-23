import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditmanagerRoutingModule } from './creditmanager-routing.module';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { PreviousLoanCheckComponent } from './previous-loan-check/previous-loan-check.component';
import { LoanAppDetailsComponent } from './loan-app-details/loan-app-details.component';


@NgModule({
  declarations: [
    LoanApplicationComponent,
    PreviousLoanCheckComponent,
    LoanAppDetailsComponent
  ],
  imports: [
    CommonModule,
    CreditmanagerRoutingModule
  ]
})
export class CreditmanagerModule { }
