import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Borrower } from '../model/borrower';
import { Emi } from '../model/emi';
import { SanctionedLoanDetails } from '../model/sanctioned-loan-details';

@Injectable({
  providedIn: 'root'
})
export class SanctionedLoanDetailsService {

  sLoan:SanctionedLoanDetails={
    sanctionedLoanId: 0,
    sanctionedLoanAmount: '',
    sanctionedLoanTenure: '',
    monthlyEmi: 0,
    sanctionLetter: undefined,
    rateOfInterest: '',
    borrower: new Borrower,
    emilist: [],
  }
  url:string="http://localhost:9080/sanLoanApi/";

  constructor(private http:HttpClient) { }

  saveSanLoan(sLoan)
  {
    return this.http.post(this.url+"saveSanLoan",sLoan,{responseType:'text' as 'json'});
  }

  getAllSanLoan()
  {
    return this.http.get<SanctionedLoanDetails[]>(this.url+"getAllSanLoan");
  }
  

  getSanlaonById(id:number)
  {
    return this.http.get<SanctionedLoanDetails>(this.url+"getSanLoanById/"+id);
  }

  updateSanLoan(sLoan:SanctionedLoanDetails)
  {
    return this.http.put(this.url+"updateSanLoan/"+sLoan.sanctionedLoanId,sLoan,{responseType:'text' as 'json'});
  }

}
