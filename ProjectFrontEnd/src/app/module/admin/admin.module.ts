import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AdminRoutingModule } from './admin-routing.module';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { LeaveApplicaionsComponent } from './leave-applicaions/leave-applicaions.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    
  
    ViewEmployeesComponent,
             AddEmployeeComponent,
             LeaveApplicaionsComponent,
             UpdateEmployeeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  exports:[
    
  ]
})
export class AdminModule { }
