import { DatePipe, Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {
  constructor(private fb:FormBuilder, private es:EmployeeService, private dp:DatePipe, private sanitizer:DomSanitizer, private loc:Location, private router:Router){}
  addEmpForm:FormGroup;
  emp:Employee;
  ngOnInit()
  {
    this.getState();
    this.addEmpForm = this.fb.group({
      employeeName : new FormControl(this.emp.employeeName, Validators.required),
      designation : new FormControl(this.emp.designation, Validators.required),
	    contactNo : new FormControl(this.emp.contactNo, Validators.required),
	    emailId : new FormControl(this.emp.emailId, Validators.required),
	    dob : new FormControl(this.emp.dob, Validators.required),
	    gender  : new FormControl(this.emp.gender, Validators.required),
	    appointmentDate : new FormControl(this.emp.appointmentDate, Validators.required),
	    address : new FormControl(this.emp.address, Validators.required),
	    username  : new FormControl(this.emp.username, Validators.required),
	    password  : new FormControl(this.emp.password, Validators.required),
      empStatus : new FormControl(this.emp.empStatus, Validators.required),
    })
  }
  
  getState()
  {
    let e:any = this.loc.getState();
    this.emp = e;
  }

  send()
  {
    const empdata = JSON.stringify(this.addEmpForm.value);
    const data = new FormData();
    data.append("empdetails", empdata);
    this.es.updateEmp(data, this.emp.employeeId).subscribe();
    this.router.navigate(['reHome/viewEmp']);
    //alert("Employee record saved");
    //window.location.reload();
  }

  route()
  {
    this.router.navigate(['reHome/viewEmp']);
  }
}
