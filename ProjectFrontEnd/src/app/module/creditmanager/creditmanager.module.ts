import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditmanagerRoutingModule } from './creditmanager-routing.module';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { PreviousLoanCheckComponent } from './previous-loan-check/previous-loan-check.component';


@NgModule({
  declarations: [
    LoanApplicationComponent,
    PreviousLoanCheckComponent
  ],
  imports: [
    CommonModule,
    CreditmanagerRoutingModule
  ]
})
export class CreditmanagerModule { }
