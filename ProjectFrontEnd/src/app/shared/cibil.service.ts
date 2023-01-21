import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cibil } from '../model/cibil';

@Injectable({
  providedIn: 'root'
})
export class CibilService {

  constructor(private http:HttpClient) { }

  cibil:Cibil={
    cibilId: 0,
    cibilScore: 0,
    cibilRemark: ''
  }
  url:string="http://localhost:9080/cibilApi";
  getCibil(pan:string)
  {
    console.log(pan)
    return this.http.get(this.url+"/cibil/"+pan);
  }
}
