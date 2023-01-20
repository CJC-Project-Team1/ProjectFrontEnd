import { Location } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BorrowerService } from 'src/app/shared/borrower.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-sanction-letter',
  templateUrl: './sanction-letter.component.html',
  styleUrls: ['./sanction-letter.component.css']
})
export class SanctionLetterComponent {

  sanctionForm:FormGroup;
  constructor(private fb:FormBuilder, public bs:BorrowerService, private route:Router, private loc:Location) { }
  date: number = Date.now();
 

  ngOnInit(): void {
    this.sanctionForm=this.fb.group({
      borrowerId: [],
      borrowerName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      emailId: ['', Validators.required],
      contactNo: ['', Validators.required],
      adharNo: ['', Validators.required],
      panNo: ['', Validators.required],
      address: ['', Validators.required],
      documentStatus: ['', Validators.required],
      gstNo: ['', Validators.required],
      bankDetails: this.fb.group({
        bankDetailsId: [],
        bankAccountNo: ['', Validators.required],
        ifscCode: ['', Validators.required],
        bankName: ['', Validators.required],
        bankBranch: ['',Validators.required]
      }),
      businessDetails: this.fb.group({
        businessId: [],
        companyName: ['', Validators.required],
        revenue: ['', Validators.required],
        businesstype: ['',Validators.required]
      }),
      appliedLoan: this.fb.group({
        appliedLoanId: [],
        expectedAmount: ['', Validators.required],
        loanType: ['', Validators.required],
        emiCount: ['', Validators.required],
        tenure: ['', Validators.required],
        loanStatus: ['', Validators.required],
        rateOfInterest: ['', Validators.required],
      })
    })
    this.editData();
  }
   
  editData(){
    let prodObj:any=this.loc.getState();
    console.log("getState()"+prodObj.id);
    if(prodObj.id!=0)
    {
      this.sanctionForm.get('customerId').setValue(prodObj.customerId);
      this.sanctionForm.get('customerName').setValue(prodObj.customerName);
      this.sanctionForm.get('customerGender').setValue(prodObj.customerGender);
      this.sanctionForm.get('customerAge').setValue(prodObj.customerAge);
      this.sanctionForm.get('customerMobNo').setValue(prodObj.customerMobNo);
      this.sanctionForm.get('customerProfession').setValue(prodObj.customerProfession);
      this.sanctionForm.get('customerEmail').setValue(prodObj.customerEmail);
      this.sanctionForm.get('customerPancard').setValue(prodObj.customerPancard);
      this.sanctionForm.get('customerAadharcard').setValue(prodObj.customerAadharcard);
      this.sanctionForm.get('quotationAmount').setValue(prodObj.quotationAmount);
      this.sanctionForm.get('cibilScore').setValue(prodObj.cibilScore);
      this.sanctionForm.get('status').setValue(prodObj.status);

      this.sanctionForm.get('address.addrId').setValue(prodObj.address.addrId);
      this.sanctionForm.get('address.streetName').setValue(prodObj.address.streetName);
      this.sanctionForm.get('address.areaName').setValue(prodObj.address.areaName);
      this.sanctionForm.get('address.cityName').setValue(prodObj.address.cityName);
      this.sanctionForm.get('address.district').setValue(prodObj.address.district);
      this.sanctionForm.get('address.state').setValue(prodObj.address.state);
      this.sanctionForm.get('address.pincode').setValue(prodObj.address.pincode);

      this.sanctionForm.get('bank.accountId').setValue(prodObj.bank.accountId);
      this.sanctionForm.get('bank.accountNumber').setValue(prodObj.bank.accountNumber);
      this.sanctionForm.get('bank.accountType').setValue(prodObj.bank.accountType);
      this.sanctionForm.get('bank.bankName').setValue(prodObj.bank.bankName);
      this.sanctionForm.get('bank.accountHolderName').setValue(prodObj.bank.accountHolderName);
      this.sanctionForm.get('bank.accountIFSC').setValue(prodObj.bank.accountIFSC);
      this.sanctionForm.get('bank.cifNumber').setValue(prodObj.bank.cifNumber);

      this.sanctionForm.get('loanDetails.loanId').setValue(prodObj.loanDetails.loanId);
      this.sanctionForm.get('loanDetails.loanAmount').setValue(prodObj.loanDetails.loanAmount);
      this.sanctionForm.get('loanDetails.interestRate').setValue(prodObj.loanDetails.interestRate);
      this.sanctionForm.get('loanDetails.loanTenure').setValue(prodObj.loanDetails.loanTenure);
      this.sanctionForm.get('loanDetails.emi').setValue(prodObj.loanDetails.emi);
    }
  }

 
  @ViewChild('content') content: ElementRef;
  SavePDF()
  {
    let DATA: any = document.getElementById('content');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('Sanction Letter.pdf');
    });

  }

  mail()
  {
    this.route.navigateByUrl('role/BM/applicantlist/email');
  }
  back(){
    this.loc.back();
  }
}
function html2canvas(DATA: any) {
  throw new Error('Function not implemented.');
}

