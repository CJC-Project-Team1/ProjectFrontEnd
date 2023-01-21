import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { OperationalexecutiveRoutingModule } from './operationalexecutive-routing.module';
import { CibilCheckComponent } from './cibil-check/cibil-check.component';
import { LoanRegistrationComponent } from './loan-registration/loan-registration.component';
import { EnquiryApprovalComponent } from './enquiry-approval/enquiry-approval.component';
import { CorrespondanceComponent } from './correspondance/correspondance.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoanListComponent } from './loan-list/loan-list.component';
import { ApplicationDetailsComponent } from './application-details/application-details.component';
import { UpdateLoanComponent } from './update-loan/update-loan.component';


@NgModule({
  declarations: [
    CibilCheckComponent,
    LoanRegistrationComponent,
    EnquiryApprovalComponent,
    CorrespondanceComponent,
    LoanListComponent,
    ApplicationDetailsComponent,
    UpdateLoanComponent
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
