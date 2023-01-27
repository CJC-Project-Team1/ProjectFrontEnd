import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Emi } from '../model/emi';

@Injectable({
  providedIn: 'root'
})
export class EmiService {

  emi:Emi={
    emiId: 0,
    emiStatus: '',
    emiTenure: '',
    emiAmount: 0,
    loanBal: 0,
    date: undefined,
    defautlerCount: 0,
    emiCount: 0
  }
  
  url:string="http://localhost:9080/emiApi/";

  constructor(private http:HttpClient) { }

  saveEmi(emi:Emi)
  {
    return this.http.post(this.url+"saveEmi",emi,{responseType:'text' as 'json'});
  }

  getAllEmi()
  {
    return this.http.get<Emi[]>(this.url+"getAllemi");
  }

  getEmiByStatus(status:string)
  {
    return this.http.get<Emi[]>(this.url+"getAllemi/"+status);
  }

  updateEmi(emi:Emi)
  {
    return this.http.put(this.url+"updateEmi/"+emi.emiId,emi,{responseType:'text' as 'json'});
  }
}
