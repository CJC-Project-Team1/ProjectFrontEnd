import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountheadRoutingModule } from './accounthead-routing.module';
import { ApprovedApplicationComponent } from './approved-application/approved-application.component';
import { EmailComponent } from './email/email.component';
import { LedgerComponent } from './ledger/ledger.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AhNotificationComponent } from './ah-notification/ah-notification.component';
import { AprvdLoanDetailsComponent } from './aprvd-loan-details/aprvd-loan-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [  
    ApprovedApplicationComponent, 
    EmailComponent, 
    LedgerComponent, 
    AhNotificationComponent, 
    AprvdLoanDetailsComponent
  ],
  imports: [
    CommonModule,
    AccountheadRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule
  ]
})
export class AccountheadModule { }
