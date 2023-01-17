import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { CibilCheckComponent } from '../operationalexecutive/cibil-check/cibil-check.component';
import { CorrespondanceComponent } from '../operationalexecutive/correspondance/correspondance.component';
import { EnquiryApprovalComponent } from '../operationalexecutive/enquiry-approval/enquiry-approval.component';
import { LoanRegistrationComponent } from '../operationalexecutive/loan-registration/loan-registration.component';
=======
import { ApprovedEnquiryComponent } from './approved-enquiry/approved-enquiry.component';
>>>>>>> 8df724f317fcca903b42b5d54195aef099d85b25
import { HomePageComponent } from './home-page/home-page.component';
import { ReHomeComponent } from './re-home/re-home.component';
import { RegisterEnquiryComponent } from './register-enquiry/register-enquiry.component';
import { UpdateComponent } from './update/update.component';
import { ViewApplicaionComponent } from './view-applicaion/view-applicaion.component';

 const routes: Routes = [
  {
    path:'reHome',component:ReHomeComponent,children:[
      {
        path:'homepage',component:HomePageComponent
      },
      {
        path:'enquiry',component:RegisterEnquiryComponent
      },
      {
        path:'viewEnq',component:ViewApplicaionComponent
      },
      {
        path:'viewEnq/updateEnq',component:UpdateComponent
      },
      {
<<<<<<< HEAD
      path:'sanction',component:SanctionedLoanComponent
      },

      {
        path:'cibil',component:CibilCheckComponent
      },
      {
        path:'mail',component:CorrespondanceComponent
      },
      {
        path:'loanReg',component:LoanRegistrationComponent
      },
      {
        path:'approval',component:EnquiryApprovalComponent
=======
      path:'approved',component:ApprovedEnquiryComponent
>>>>>>> 8df724f317fcca903b42b5d54195aef099d85b25
      }
    ]
  }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
  exports: [RouterModule]
})
export class RelationexecutiveRoutingModule { }
