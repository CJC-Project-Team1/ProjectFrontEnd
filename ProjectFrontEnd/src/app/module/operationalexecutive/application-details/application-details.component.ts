import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Borrower } from 'src/app/model/borrower';
import { BorrowerService } from 'src/app/shared/borrower.service';

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

    // //pagination
    // page: number = 1;
    // count: number = 0;
    // tableItems: number = 5;
    // tableSizes: any = [2, 4, 6, 8];

  constructor(private bs:BorrowerService,private actvRout:ActivatedRoute,private loctn:Location,private fb:FormBuilder){}

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
        remainingAmount: [this.brwr.loanHistory.remainingAmount],
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
  }

  getData()
  {
    // this.actvRout.paramMap.subscribe(brwrData=>{
    //   this.bs.getBrwrById(parseInt(brwrData.get('id'))).subscribe(data=>{
    //     this.brwr=data;
    //   })
    // })
    this.brwr=this.bs.brwr
   // console.log("in details.....")
   // console.log(this.brwr)
  }

  // getBack()
  // {
  //   this.loctn.back();
  // }


  // onTableData(event:any)
  // {
  //   this.page=event;
  //   this.getData();
  // }

  // onTableSize(event:any)
  // {
  //   this.tableItems=event.target.value;
  //   this.page=1;
  //   this.getData();
  // }

  onReg() {
    
    console.log(this.regForm.value);
    let brwrData=JSON.stringify(this.regForm.value);
    let frmdata=new FormData();
    frmdata.append("adharCard",this.selectedadharCard);
    frmdata.append("panCard",this.selectedpanCard);
    frmdata.append("photo",this.selectedphoto);
    frmdata.append("bankStatement",this.selectedbankStatement);
    frmdata.append("addressProof",this.selectedaddressProof);
    frmdata.append("balanceSheet",this.selectedbalanceSheet);
    frmdata.append("gstCertificate",this.selectedgstCertificate);
    frmdata.append("proprietaryDeed",this.selectedproprietaryDeed);
    frmdata.append("borrower",brwrData);
    
    this.bs.updateBrwr(frmdata).subscribe();
    alert("Registered.");
   //  window.location.reload();
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
