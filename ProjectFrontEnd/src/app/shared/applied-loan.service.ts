import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppliedLoan } from '../model/applied-loan';

@Injectable({
  providedIn: 'root'
})
export class AppliedLoanService {

  apLoan:AppliedLoan={
    appliedLoanId: 0,
    expectedAmount: 0,
    loanType: '',
    emiCount: 0,
    tenure: '',
    loanStatus: '',
    rateOfInterest: 0
  }

  url:string="http://localhost:9080/aplliedloanApi";

  constructor(private http:HttpClient) { }

  saveApLoan(aLoan:AppliedLoan)
  {
    return this.http.post(this.url+"/appliedloan",aLoan,{responseType:'text' as 'json'});
  }

  getAllApLoan()
  {
    return this.http.get<AppliedLoan[]>(this.url+"/appliedloans");
  }

  updateApLoan(aLoan:AppliedLoan)
  {
    return this.http.put(this.url+"/appliedloan/"+aLoan.appliedLoanId,aLoan,{responseType:'text' as 'json'});
  }

  deleteApLoan(id:number)
  {
    return this.http.delete(this.url+"/appliedloan/"+id);
  }
}
