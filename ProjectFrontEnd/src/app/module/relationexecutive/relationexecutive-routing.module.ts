import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprovedApplicationComponent } from '../accounthead/approved-application/approved-application.component';
import { EmailComponent } from '../accounthead/email/email.component';
import { LedgerComponent } from '../accounthead/ledger/ledger.component';
import { SanctionLetterComponent } from '../accounthead/sanction-letter/sanction-letter.component';
import { ActiveEmployeesComponent } from '../admin/active-employees/active-employees.component';
import { AddEmployeeComponent } from '../admin/add-employee/add-employee.component';
import { InactiveEmployeesComponent } from '../admin/inactive-employees/inactive-employees.component';
import { LeaveApplicaionsComponent } from '../admin/leave-applicaions/leave-applicaions.component';
import { ProfileComponent } from '../admin/profile/profile.component';
import { UpdateEmployeeComponent } from '../admin/update-employee/update-employee.component';
import { ViewEmployeesComponent } from '../admin/view-employees/view-employees.component';
import { LoanApplicationComponent } from '../creditmanager/loan-application/loan-application.component';
import { PreviousLoanCheckComponent } from '../creditmanager/previous-loan-check/previous-loan-check.component';
import { ApplicationDetailsComponent } from '../operationalexecutive/application-details/application-details.component';
import { CibilCheckComponent } from '../operationalexecutive/cibil-check/cibil-check.component';
import { CorrespondanceComponent } from '../operationalexecutive/correspondance/correspondance.component';
import { EnquiryApprovalComponent } from '../operationalexecutive/enquiry-approval/enquiry-approval.component';
import { LoanListComponent } from '../operationalexecutive/loan-list/loan-list.component';
import { LoanRegistrationComponent } from '../operationalexecutive/loan-registration/loan-registration.component';
import { UpdateLoanComponent } from '../operationalexecutive/update-loan/update-loan.component';
import { DefaultersComponent } from '../telehead/defaulters/defaulters.component';
import { ApprovedEnquiryComponent } from './approved-enquiry/approved-enquiry.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileEmpComponent } from './profile-emp/profile-emp.component';
import { ReHomeComponent } from './re-home/re-home.component';
import { RegisterEnquiryComponent } from './register-enquiry/register-enquiry.component';
import { UpdateComponent } from './update/update.component';
import { ViewApplicaionComponent } from './view-applicaion/view-applicaion.component';

const routes: Routes = [
  {
    path: 'reHome', component: ReHomeComponent, children: [
      {
        path: 'homepage', component: HomePageComponent
      },
      {
        path: 'profileEmp', component: ProfileEmpComponent
      },
      //RE Components
      {
        path: 'enquiry', component: RegisterEnquiryComponent
      },
      {
        path: 'viewEnq', component: ViewApplicaionComponent
      },
      {
        path: 'viewEnq/updateEnq', component: UpdateComponent
      },
      {
        path: 'sanction', component: ApprovedEnquiryComponent
      },
      //OE Components
      {
        path:'approval/cibil',component:CibilCheckComponent
      },
      {
        path:'cibil',component:CibilCheckComponent
      },
      {
        path: 'approval/mail', component: CorrespondanceComponent
      },
      {
        path: 'mail', component: CorrespondanceComponent
      },
      {
        path: 'approval/loanReg', component: LoanRegistrationComponent
      },
      {
        path:'loanReg',component:LoanRegistrationComponent
      },
      {
        path: 'approval', component: EnquiryApprovalComponent
      },
      {
        path: 'loanlist', component: LoanListComponent
      },
      {
        path: 'loanlist/details/:id', component: ApplicationDetailsComponent
      },
      {
        path: 'details', component: ApplicationDetailsComponent
      },
      {
        path: 'loanlist/update', component: UpdateLoanComponent
      },


      //ADMIN Components
      {
        path: 'addEmp', component: AddEmployeeComponent
      },
      {
        path: 'viewEmp', component: ViewEmployeesComponent,
        children: [
          {
            path: 'activeEmp', component: ActiveEmployeesComponent,
            children: [
              {
                path: 'empProfile', component: ProfileComponent
              }
            ]
          },
          {
            path: 'inactiveEmp', component: InactiveEmployeesComponent
          },

        ]
      },

      {
        path: 'viewEmp/empProfile', component: ProfileComponent
      },
      {
        path: 'viewEmp/empProfile/updateEmp', component: UpdateEmployeeComponent
      },
      {
        path: 'leaveApp', component: LeaveApplicaionsComponent
      },

      //CM Components
      {
        path: 'application', component: LoanApplicationComponent
      },
      {
        path: 'prevLoan', component: PreviousLoanCheckComponent
      },

      //AH Components
      {
        path: 'approvedApp', component: ApprovedApplicationComponent,
      },
      {
        path: 'approvedApp/email', component: EmailComponent
      },
      {
        path: 'approvedApp/sanctionLetter', component: SanctionLetterComponent
      },
      {
        path: 'approvedApp/ledger', component: LedgerComponent
      },
   

  //TH Component
  {
    path: 'defaulter', component: DefaultersComponent
  }

]
  }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class RelationexecutiveRoutingModule { }
