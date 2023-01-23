import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-profile-emp',
  templateUrl: './profile-emp.component.html',
  styleUrls: ['./profile-emp.component.css']
})
export class ProfileEmpComponent {

  photo: any;
  constructor(private es:EmployeeService, private router:Router){}
  emp:Employee;

  ngOnInit()
  {
    console.log("in profile")
    this.getState();
  }

  getState()
  {
    let e:any = JSON.parse(sessionStorage.getItem("employee"))
    this.emp = e;
  }

  route()
  {
    this.router.navigate(['reHome/homepage']);
  }
}
