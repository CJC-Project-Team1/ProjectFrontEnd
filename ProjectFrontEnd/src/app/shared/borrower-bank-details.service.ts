import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BorrowerBankDetails } from '../model/borrower-bank-details';

@Injectable({
  providedIn: 'root'
})
export class BorrowerBankDetailsService {

  bankDetails:BorrowerBankDetails={
    bankDetailsId: 0,
    bankAccountNo: 0,
    ifscCode: '',
    bankName: '',
    bankBranch: ''
  }

  url:string="http://localhost:9080/bankdetailsApi/";

  constructor(private http:HttpClient) { }

  saveBankD(bankD:BorrowerBankDetails)
  {
    return this.http.post(this.url+"bankdetail",bankD,{responseType:'text' as 'json'});
  }

  getBankD()
  {
    return this.http.get<BorrowerBankDetails[]>(this.url+"bankdetails");
  }

  updateBnakD(bankD:BorrowerBankDetails)
  {
    return this.http.put(this.url+"bankdetail/"+bankD.bankDetailsId,bankD,{responseType:'text' as 'json'});
  }

  deleteBankD(id:number)
  {
    return this.http.delete(this.url+"bankdetail/"+id);
  }
}
