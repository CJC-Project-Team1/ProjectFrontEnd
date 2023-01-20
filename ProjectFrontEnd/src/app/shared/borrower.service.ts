import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Borrower } from '../model/borrower';

@Injectable({
  providedIn: 'root'
})
export class BorrowerService {
 

  brwr: Borrower = {
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
    bankDetails: {
      bankDetailsId: 0,
      bankAccountNo: 0,
      ifscCode: '',
      bankName: '',
      bankBranch: ''
    },
    businessDetails: {
      businessId: 0,
      companyName: '',
      revenue: '',
      businesstype: ''
    },
    loanHistory: {
      loanDetailId: 0,
      loanType: '',
      loanAmount: 0,
      loanTenure: '',
      paidAmount: 0,
      remainingAmount: 0,
      bankName: '',
      defaulterCount: 0
    },
    borrowerDocuments: {
      documentId: 0,
      adharCard: [],
      panCard: [],
      photo: [],
      bankStatement: [],
      addressProof: [],
      balanceSheet: [],
      gstCertificate: [],
      proprietaryDeed: []
    },
    appliedLoan: {
      appliedLoanId: 0,
      expectedAmount: 0,
      loanType: '',
      emiCount: 0,
      tenure: '',
      loanStatus: '',
      rateOfInterest: 0
    }
  }

  url: string = "http://localhost:9080/borrowerApi/";

  constructor(private http: HttpClient) { }

  saveBrwr(b: any) {
    console.log('IN BRWR SERVICE');
   // console.log(b.documentId.adharCard);
    return this.http.post(this.url + "borrower", b, { responseType: 'text' as 'json' });
  }

  updateBrwr(b: any) {
    return this.http.put(this.url + "borrower/" + b.borrowerId, b, { responseType: 'text' as 'json' });
  }

  getBrwrById(id: number) {
    return this.http.get<Borrower>(this.url + "borrower/"+id);
  }
  getBrwr() {
    return this.http.get<Borrower[]>(this.url + "borrowers");
  }

  delete(id: number) {
    return this.http.delete(this.url + "borrower/" + id);
  }


}
