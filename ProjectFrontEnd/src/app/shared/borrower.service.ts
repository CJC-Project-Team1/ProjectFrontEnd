import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Borrower } from '../model/borrower';

@Injectable({
  providedIn: 'root'
})
export class BorrowerService {

  /*brwr:Borrower={
    borrowerId: 0,
    borrowerName: '',
    dateOfBirth: '',
    emailId: '',
    contactNo: 0,
    adharNo: 0,
    panNo: '',
    address: '',
    documentStatus: '',
    gstNo: '',
    bankDetails: new BorrowerBankDetails,
    businessDetails: new BusinessDetails,
    loanHistory: new PreviousLoanDetails,
    borrowerDocuments: new BorrowerDocuments,
    appliedLoan: new AppliedLoan
  }*/
  
  url:string="http://localhost:9080/bapi/";

  constructor(private http:HttpClient) { }

  saveB(b:Borrower)
  {
    return this.http.post(this.url+"borrower",b,{responseType:'text' as 'json'});
  }

  
}
