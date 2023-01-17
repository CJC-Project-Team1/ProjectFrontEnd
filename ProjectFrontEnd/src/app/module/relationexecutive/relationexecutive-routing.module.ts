import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
      path:'approved',component:ApprovedEnquiryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelationexecutiveRoutingModule { }
