import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  emp:Employee={
    employeeId: 0,
    employeeName: '',
    designation: '',
    contactNo: '',
    emailId: '',
    dob: '',
    gender: '',
    appointmentDate: '',
    address: '',
    username: '',
    password: '',
    empStatus: '',
    photo: undefined
  }

  url:string="http://localhost:9080/empApi";
  constructor(private http:HttpClient) { }

  saveEmp(em:Employee)
  {
    return this.http.post(this.url+"/saveEmp",em,{responseType:'text' as 'json'});
  }

  updateEmp(em:Employee)
  {
    return this.http.put(this.url+"/updateEmp/"+em.employeeId,em,{responseType:'text' as 'json'});
  }

  getAllEmp()
  {
    return this.http.get<Employee[]>(this.url+"/getAllEmp");
  }

  getActiveEmp()
  {
    return this.http.get<Employee[]>(this.url+"/getAllActiveEmp");
  }

  getInactiveEmp()
  {
    return this.http.get<Employee[]>(this.url+"/getAllInactiveEmp");
  }
  
  getEmpById(id:number)
  {
    return this.http.get<Employee>(this.url+"/getEmp/"+id);
  }

  deleteEmp(id:number)
  {
    return this.http.delete(this.url+"/deleteEmp/"+id);
  }
}
