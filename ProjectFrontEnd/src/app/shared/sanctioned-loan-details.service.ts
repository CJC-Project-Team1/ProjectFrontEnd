import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SanctionedLoanDetails } from '../model/sanctioned-loan-details';

@Injectable({
  providedIn: 'root'
})
export class SanctionedLoanDetailsService {

  sLoan:SanctionedLoanDetails={
    sanctionedLoanId: 0,
    sanctionedLoanAmount: '',
    sanctionedLoanTenure: '',
    customerName: '',
    customerId: '',
    monthlyEmi: 0,
    emi:{
      emiId:0,
      emiStatus:'',
      emiTenure:'',
      emiAmount:0,
      emiPaid:'',
      emiRemaining:'',
      defautlerCount:0
    }
  }
  url:string="http://localhost:9080/sanLoanApi/";

  constructor(private http:HttpClient) { }

  saveSanLoan(sLoan:SanctionedLoanDetails)
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
