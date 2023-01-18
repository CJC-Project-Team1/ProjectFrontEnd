import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountheadRoutingModule } from './accounthead-routing.module';
import { ApprovedApplicationComponent } from './approved-application/approved-application.component';


@NgModule({
  declarations: [  
    ApprovedApplicationComponent
  ],
  imports: [
    CommonModule,
    AccountheadRoutingModule
  ]
})
export class AccountheadModule { }
