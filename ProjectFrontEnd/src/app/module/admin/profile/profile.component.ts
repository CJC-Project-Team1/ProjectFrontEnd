import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private es:EmployeeService, private loc:Location, private sanitizer:DomSanitizer, private router:Router){}
  emp:Employee;

  ngOnInit()
  {
    this.getState();
  }

  getState()
  {
    let e:any = this.loc.getState();
    this.emp = e;
  }

  route()
  {
    this.router.navigate(['reHome/viewEmp']);
  }

}
