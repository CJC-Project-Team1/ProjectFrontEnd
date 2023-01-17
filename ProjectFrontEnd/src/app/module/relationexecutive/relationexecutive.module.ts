import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelationexecutiveRoutingModule } from './relationexecutive-routing.module';
import { ReHeaderComponent } from './re-header/re-header.component';
import { ReSidenavComponent } from './re-sidenav/re-sidenav.component';
import { ReHomeComponent } from './re-home/re-home.component';
import { RegisterEnquiryComponent } from './register-enquiry/register-enquiry.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ViewApplicaionComponent } from './view-applicaion/view-applicaion.component';
import { UpdateComponent } from './update/update.component';
import { SanctionedLoanComponent } from './sanctioned-loan/sanctioned-loan.component';


@NgModule({
  declarations: [
    ReHeaderComponent,
    ReSidenavComponent,
    ReHomeComponent,
    RegisterEnquiryComponent,
    HomePageComponent,
    ViewApplicaionComponent,
    UpdateComponent,
    SanctionedLoanComponent
  ],
  imports: [
    CommonModule,
    RelationexecutiveRoutingModule
  ],
  exports:[
    ReHeaderComponent,
    ReSidenavComponent,
    ReHomeComponent
  ]
})
export class RelationexecutiveModule { }
