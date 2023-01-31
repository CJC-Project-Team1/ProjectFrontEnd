import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/shared/employee.service';


@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent {

  page: number = 1;
  count: number = 0;
  tableItems: number = 4;
  tableSizes: any = [2, 4, 6, 8];
  constructor(private es:EmployeeService, private sanitizer:DomSanitizer, private router:Router){
    
  }
  employees:Employee[];
  filteredEmps:Employee[];
  _filterText:string = '';
  photo:any;
  ngOnInit()
  {
   this.getData();
  
  }

  getData()
  {
    this.es.getAllEmp().subscribe((edata:Employee[])=>{
      this.employees=edata
      this.employees.forEach(emp => {
        //let objectURL = 'data:image/jpeg;base64,' + emp.photo;
        //emp.photo = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    });
    this.filteredEmps = this.employees;
  }); 
  }
  get filterText()
  {
    return this._filterText;
  }

  set filterText(value:string)
  {
    this._filterText = value;
    this.filteredEmps = this.filterEmpByStatus(value);
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
        return 'red-svg';
        break;
        
    } 
  }

  filterEmpByStatus(filterTerm:string)
  {
    if(this.employees.length === 0 || this.filterText === '')
    {
      return this.employees;
    }
    else
    {
      return this.employees.filter((emp)=>{
        return emp.empStatus.toLowerCase() === filterTerm.toLowerCase();
      });
    }
  }

  onTableData(event: any) {
    this.page = event;
    this.getData();
  }

  onTableSize(event: any) {
    this.tableItems = event.target.value;
    this.page = 1;
    this.getData();
  }
}
