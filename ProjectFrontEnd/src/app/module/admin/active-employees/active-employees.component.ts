import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-active-employees',
  templateUrl: './active-employees.component.html',
  styleUrls: ['./active-employees.component.css']
})
export class ActiveEmployeesComponent {
  constructor(private es:EmployeeService, private sanitizer:DomSanitizer, private router:Router){}

  employees:Employee[];
  ngOnInit()
  {
    this.es.getActiveEmp().subscribe((edata:Employee[])=>{
      this.employees=edata
      this.employees.forEach(emp => {
        //let objectURL = 'data:image/jpeg;base64,' + emp.photo;
       // emp.photo = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    });
    }); 
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
