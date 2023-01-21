import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-inactive-employees',
  templateUrl: './inactive-employees.component.html',
  styleUrls: ['./inactive-employees.component.css']
})
export class InactiveEmployeesComponent {
  constructor(private es:EmployeeService, private sanitizer:DomSanitizer, private router:Router){
    
  }
  employees:Employee[];
  photo:any;
  ngOnInit()
  {
    this.es.getInactiveEmp().subscribe((edata:Employee[])=>{
      this.employees=edata
      this.employees.forEach(emp => {
        this.photo = emp.photo;
        let objectURL = 'data:image/jpeg;base64,' + emp.photo;
        emp.photo = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    });
  }); 
  }

  edit(e:Employee)
  {
    e.photo = this.photo;
    this.es.emp = Object.assign({},e);
    this.router.navigate(['reHome/updateEmp']);
  }

  delete(id)
  {
    this.es.deleteEmp(id).subscribe((msg:string)=>alert(msg));
    //window.location.reload();
  }

  getStateColor(status) {
    switch(status) {
      case ('Active'):
        return 'green-svg';
        break;
      
      case ('Inactive'):
        return 'gray-svg';
        break;
        
    }
  }
}
