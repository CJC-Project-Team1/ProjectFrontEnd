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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApprovedEnquiryComponent } from './approved-enquiry/approved-enquiry.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProfileEmpComponent } from './profile-emp/profile-emp.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ReHeaderComponent,
    ReSidenavComponent,
    ReHomeComponent,
    RegisterEnquiryComponent,
    HomePageComponent,
    ViewApplicaionComponent,
    UpdateComponent,
    ApprovedEnquiryComponent,
    ProfileEmpComponent
  ],
  imports: [
    CommonModule,
    RelationexecutiveRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    ReHeaderComponent,
    ReSidenavComponent,
    ReHomeComponent,
    ProfileEmpComponent
  ]
})
export class RelationexecutiveModule { }
