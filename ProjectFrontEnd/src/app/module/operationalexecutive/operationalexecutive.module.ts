import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationalexecutiveRoutingModule } from './operationalexecutive-routing.module';
import { OeHeaderComponent } from './oe-header/oe-header.component';
import { OeHomeComponent } from './oe-home/oe-home.component';
import { OeSidenavComponent } from './oe-sidenav/oe-sidenav.component';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { CreateApplicationComponent } from './create-application/create-application.component';


@NgModule({
  declarations: [
    OeHeaderComponent,
    OeHomeComponent,
    OeSidenavComponent,
    ViewEnquiryComponent,
    CreateApplicationComponent
  ],
  imports: [
    CommonModule,
    OperationalexecutiveRoutingModule
  ],
  exports: [
    OeHeaderComponent,
    OeHomeComponent,
    OeSidenavComponent
  ]
})
export class OperationalexecutiveModule { }
