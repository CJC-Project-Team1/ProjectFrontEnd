import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from '../admin/add-employee/add-employee.component';
import { LeaveApplicaionsComponent } from '../admin/leave-applicaions/leave-applicaions.component';
import { UpdateEmployeeComponent } from '../admin/update-employee/update-employee.component';
import { ViewEmployeesComponent } from '../admin/view-employees/view-employees.component';
import { ApprovedApplicationComponent } from '../accounthead/approved-application/approved-application.component';
import { LoanApplicationComponent } from '../creditmanager/loan-application/loan-application.component';
import { PreviousLoanCheckComponent } from '../creditmanager/previous-loan-check/previous-loan-check.component';
import { CibilCheckComponent } from '../operationalexecutive/cibil-check/cibil-check.component';
import { CorrespondanceComponent } from '../operationalexecutive/correspondance/correspondance.component';
import { EnquiryApprovalComponent } from '../operationalexecutive/enquiry-approval/enquiry-approval.component';
import { LoanRegistrationComponent } from '../operationalexecutive/loan-registration/loan-registration.component';
import { DefaultersComponent } from '../telehead/defaulters/defaulters.component';
import { ApprovedEnquiryComponent } from './approved-enquiry/approved-enquiry.component';
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
      //RE Components
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
      path:'sanction',component:ApprovedEnquiryComponent
      },
      //OE Components
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
      }

    ]
  }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
  exports: [RouterModule]
})
export class RelationexecutiveRoutingModule { }
