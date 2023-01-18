import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PreviousLoanDetails } from '../model/previous-loan-details';

@Injectable({
  providedIn: 'root'
})
export class PreviousLoanDetailsService {

  prvsLoan:PreviousLoanDetails={
    loanDetailId: 0,
    loanType: '',
    loanAmount: 0,
    loanTenure: '',
    paidAmount: 0,
    remainingAmount: 0,
    bankName: '',
    defaulterCount: 0
  }

  url:string="http://localhost:9080/previousLoanDetailsApi/";

  constructor(private http:HttpClient) { }

  savePLoan(ploan:PreviousLoanDetails)
  {
    return this.http.post(this.url+"previousLoanDetail",ploan,{responseType:'text' as 'json'});
  }

  getPLoan()
  {
    return this.http.get<PreviousLoanDetails[]>(this.url+"previousLoanDetails");
  }

  updatePLoan(ploan:PreviousLoanDetails)
  {
    return this.http.put(this.url+"previousLoanDetail/"+ploan.loanDetailId,ploan,{responseType:'text' as 'json'});
  }

  deletePLoan(id:number)
  {
    return this.http.delete(this.url+"previousLoanDetail/"+id);
  }
}
