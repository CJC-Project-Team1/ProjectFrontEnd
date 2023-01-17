import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReHomeComponent } from '../relationexecutive/re-home/re-home.component';
import { CibilCheckComponent } from './cibil-check/cibil-check.component';
import { CorrespondanceComponent } from './correspondance/correspondance.component';
import { EnquiryApprovalComponent } from './enquiry-approval/enquiry-approval.component';
import { LoanRegistrationComponent } from './loan-registration/loan-registration.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationalexecutiveRoutingModule { }
