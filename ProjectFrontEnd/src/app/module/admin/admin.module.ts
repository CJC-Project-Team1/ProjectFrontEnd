import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AdminRoutingModule } from './admin-routing.module';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { LeaveApplicaionsComponent } from './leave-applicaions/leave-applicaions.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ActiveEmployeesComponent } from './active-employees/active-employees.component';
import { InactiveEmployeesComponent } from './inactive-employees/inactive-employees.component';
import { ProfileComponent } from './profile/profile.component';
@NgModule({
  declarations: [
    
  
    ViewEmployeesComponent,
             AddEmployeeComponent,
             LeaveApplicaionsComponent,
             UpdateEmployeeComponent,
             ActiveEmployeesComponent,
             InactiveEmployeesComponent,
             ProfileComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  exports:[
    
  ],
  providers:[
    DatePipe
  ]
})
export class AdminModule { }
