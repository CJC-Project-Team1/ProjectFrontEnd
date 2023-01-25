import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountheadRoutingModule } from './accounthead-routing.module';
import { ApprovedApplicationComponent } from './approved-application/approved-application.component';
import { EmailComponent } from './email/email.component';
import { LedgerComponent } from './ledger/ledger.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AprvdLoanDetailsComponent } from './aprvd-loan-details/aprvd-loan-details.component';
import { AhNotificationComponent } from './ah-notification/ah-notification.component';


@NgModule({
  declarations: [  
    ApprovedApplicationComponent, EmailComponent, LedgerComponent, AhNotificationComponent,
  ],
  imports: [
    CommonModule,
    AccountheadRoutingModule,
    ReactiveFormsModule
  ]
})
export class AccountheadModule { }
