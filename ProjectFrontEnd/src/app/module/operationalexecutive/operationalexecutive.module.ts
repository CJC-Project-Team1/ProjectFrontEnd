import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationalexecutiveRoutingModule } from './operationalexecutive-routing.module';
import { CibilCheckComponent } from './cibil-check/cibil-check.component';
import { LoanRegistrationComponent } from './loan-registration/loan-registration.component';
import { EnquiryApprovalComponent } from './enquiry-approval/enquiry-approval.component';
import { CorrespondanceComponent } from './correspondance/correspondance.component';
import { ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CibilCheckComponent,
    LoanRegistrationComponent,
    EnquiryApprovalComponent,
    CorrespondanceComponent
  ],
  imports: [
    CommonModule,
    OperationalexecutiveRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class OperationalexecutiveModule { }
