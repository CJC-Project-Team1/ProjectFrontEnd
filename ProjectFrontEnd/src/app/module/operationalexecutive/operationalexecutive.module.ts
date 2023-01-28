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
import { OeNotificationComponent } from './oe-notification/oe-notification.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    CibilCheckComponent,
    LoanRegistrationComponent,
    EnquiryApprovalComponent,
    CorrespondanceComponent,
    LoanListComponent,
    ApplicationDetailsComponent,
    OeNotificationComponent,
  ],
  imports: [
    CommonModule,
    OperationalexecutiveRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ]
})
export class OperationalexecutiveModule { }
