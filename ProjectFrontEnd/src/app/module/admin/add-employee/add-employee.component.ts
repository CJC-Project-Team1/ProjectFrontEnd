import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { EmployeeService } from 'src/app/shared/employee.service';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  constructor(private fb:FormBuilder, private es:EmployeeService, private dp:DatePipe){}
  addEmpForm:FormGroup;
  photo:any;
  ngOnInit()
  {
    this.addEmpForm = this.fb.group({
      employeeName : new FormControl('', Validators.required),
      designation : new FormControl('', Validators.required),
	    contactNo : new FormControl('', Validators.required),
	    emailId : new FormControl('', Validators.required),
	    dob : new FormControl('', Validators.required),
	    gender  : new FormControl('', Validators.required),
	    appointmentDate : new FormControl('', Validators.required),
	    address : new FormControl('', Validators.required),
	    username  : new FormControl('', Validators.required),
	    password  : new FormControl('', Validators.required),
      empStatus : new FormControl('', Validators.required),
    })
  }

  onselectphoto(event)
  {
    this.photo = event.target.files[0];
  }

  send()
  {
    this.addEmpForm.controls['dob'].setValue(this.dp.transform(this.addEmpForm.controls['dob'].value,'dd-MM-yyyy'));
    const empdata = JSON.stringify(this.addEmpForm.value);
    const data = new FormData();
    data.append("empdetails", empdata);
    data.append("photo",this.photo);
    //console.log(this.addEmpForm.controls['dob'].value);
    this.es.saveEmp(data).subscribe();
    //alert("Employee record saved");
    window.location.reload();
  }

  getErrorMessage() {
    if (this.addEmpForm.controls['employeeName'].value.hasError('required')) {
      return 'Field cannot be empty';
    }

    return this.addEmpForm.controls['employeeName'].value.hasError('email') ? 'Not a valid email' : '';
  }
}
