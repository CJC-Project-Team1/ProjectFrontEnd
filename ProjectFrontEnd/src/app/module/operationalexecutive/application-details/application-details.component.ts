import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Borrower } from 'src/app/model/borrower';
import { BorrowerService } from 'src/app/shared/borrower.service';
import { NotifierService } from 'src/app/shared/notifier.service';

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.css']
})
export class ApplicationDetailsComponent {

  diplay:any
  brwr:Borrower
  steps:any=1;
  selectedadharCard: any;
  selectedpanCard: any;
  selectedphoto: any;
  selectedbankStatement: any;
  selectedaddressProof: any;
  selectedbalanceSheet: any;
  selectedgstCertificate: any;
  selectedproprietaryDeed: any;

  constructor(private bs:BorrowerService,private actvRout:ActivatedRoute,private loctn:Location,private fb:FormBuilder,private notify:NotifierService){}

  regForm:FormGroup

  ngOnInit()
  {
    this.getData()
    this.regForm=this.fb.group({
      borrowerId: [this.brwr.borrowerId],
      borrowerName: [this.brwr.borrowerName],
      dateOfBirth: [this.brwr.dateOfBirth],
      emailId: [this.brwr.emailId],
      contactNo: [this.brwr.contactNo],
      adharNo: [this.brwr.adharNo],
      panNo: [this.brwr.panNo],
      address: [this.brwr.address],
      documentStatus: [this.brwr.documentStatus],
      applicationStatus: [this.brwr.applicationStatus],
      gstNo: [this.brwr.gstNo],
      bankDetails: this.fb.group({
        bankDetailsId: [this.brwr.bankDetails.bankDetailsId],
        bankAccountNo: [this.brwr.bankDetails.bankAccountNo],
        ifscCode: [this.brwr.bankDetails.ifscCode],
        bankName: [this.brwr.bankDetails.bankName],
        bankBranch: [this.brwr.bankDetails.bankBranch]
      }),
      businessDetails: this.fb.group({
        businessId: [this.brwr.businessDetails.businessId],
        companyName: [this.brwr.businessDetails.companyName],
        revenue: [this.brwr.businessDetails.revenue],
        businesstype: [this.brwr.businessDetails.businesstype]
      }),
      loanHistory: this.fb.group({
        loanDetailId: [this.brwr.loanHistory.loanDetailId],
        loanType: [this.brwr.loanHistory.loanType],
        loanAmount: [this.brwr.loanHistory.loanAmount],
        loanTenure: [this.brwr.loanHistory.loanTenure],
        paidAmount: [this.brwr.loanHistory.paidAmount],
        bankName: [this.brwr.loanHistory.bankName],
        defaulterCount: [this.brwr.loanHistory.defaulterCount],
      }),
      borrowerDocuments: this.fb.group({
        documentId: [this.brwr.borrowerDocuments.documentId],
          adharCard: [this.brwr.borrowerDocuments.adharCard],
          panCard: [this.brwr.borrowerDocuments.panCard],
          photo: [this.brwr.borrowerDocuments.photo],
          bankStatement: [this.brwr.borrowerDocuments.bankStatement],
          addressProof: [this.brwr.borrowerDocuments.addressProof],
          balanceSheet: [this.brwr.borrowerDocuments.balanceSheet],
          gstCertificate: [this.brwr.borrowerDocuments.gstCertificate],
          proprietaryDeed: [this.brwr.borrowerDocuments.proprietaryDeed]
      }),
      appliedLoan: this.fb.group({
        appliedLoanId: [this.brwr.appliedLoan.appliedLoanId],
        expectedAmount: [this.brwr.appliedLoan.expectedAmount],
        loanType: [this.brwr.appliedLoan.loanType],
        emiCount: [this.brwr.appliedLoan.emiCount],
        tenure: [this.brwr.appliedLoan.tenure],
        loanStatus: [this.brwr.appliedLoan.loanStatus],
        rateOfInterest: [this.brwr.appliedLoan.rateOfInterest],
      })
    })
    //console.log(this.regForm.value)

    this.selectedadharCard=this.brwr.borrowerDocuments.adharCard
    this.selectedpanCard=this.brwr.borrowerDocuments.panCard
    this.selectedphoto=this.brwr.borrowerDocuments.photo
    this.selectedbankStatement=this.brwr.borrowerDocuments.bankStatement
    this.selectedaddressProof=this.brwr.borrowerDocuments.addressProof
    this.selectedbalanceSheet=this.brwr.borrowerDocuments.balanceSheet
    this.selectedgstCertificate=this.brwr.borrowerDocuments.gstCertificate
    this.selectedproprietaryDeed=this.brwr.borrowerDocuments.proprietaryDeed
  }

  getData()
  {
    this.brwr=this.bs.brwr
  }

  onReg() {
    
    console.log(this.regForm.value);
    // this.regForm.controls['borrowerDocuments'].value['adharCard']==this.selectedadharCard
    // let brwrData=JSON.stringify(this.regForm.value);
    // let frmdata=new FormData();
    // frmdata.append("adharCard",this.selectedadharCard);
    // frmdata.append("panCard",this.selectedpanCard);
    // frmdata.append("photo",this.selectedphoto);
    // frmdata.append("bankStatement",this.selectedbankStatement);
    // frmdata.append("addressProof",this.selectedaddressProof);
    // frmdata.append("balanceSheet",this.selectedbalanceSheet);
    // frmdata.append("gstCertificate",this.selectedgstCertificate);
    // frmdata.append("proprietaryDeed",this.selectedproprietaryDeed);
   // frmdata.append("borrower",brwrData);
    
    this.bs.updateBrwr(this.regForm.value).subscribe();
   this.notify.info("Borrower Updated","UPDATE"); 
    window.location.reload();
  }

  adharCard(event)
  {
    this.selectedadharCard=event.target.files[0];
  }
  panCard(event)
  {
    this.selectedpanCard=event.target.files[0];
  }
  photo(event)
  {
    this.selectedphoto=event.target.files[0];
  }
  bankStatement(event)
  {
    this.selectedbankStatement=event.target.files[0];
  }
  addressProof(event)
  {
    this.selectedaddressProof=event.target.files[0];
  }
  balanceSheet(event)
  {
    this.selectedbalanceSheet=event.target.files[0];
  }
  gstCertificate(event)
  {
    this.selectedgstCertificate=event.target.files[0];
  }
  proprietaryDeed(event)
  {
    this.selectedproprietaryDeed=event.target.files[0];
    //this.regForm.get('borrowerDocuments').get('proprietaryDeed')
  }
  reset() {
    this.regForm.reset();
  }


  next()
  {
    // this.bs.saveBrwr(this.regForm.value).subscribe();
    // console.log(this.regForm.value);
    this.steps=this.steps+1;
  }
  previous()
  {
    this.steps=this.steps-1;
  }
}
