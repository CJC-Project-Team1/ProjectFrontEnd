import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/shared/borrower.service';

@Component({
  selector: 'app-loan-registration',
  templateUrl: './loan-registration.component.html',
  styleUrls: ['./loan-registration.component.css']
})
export class LoanRegistrationComponent {

  regForm: FormGroup;

  steps:any=1;

  selectedadharCard: any;
  selectedpanCard: any;
  selectedphoto: any;
  selectedbankStatement: any;
  selectedaddressProof: any;
  selectedbalanceSheet: any;
  selectedgstCertificate: any;
  selectedproprietaryDeed: any;

  constructor(private fb: FormBuilder, private bs: BorrowerService) { }

  ngOnInit() {
    this.regForm = this.fb.group({

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
      loanHistory: this.fb.group({
        loanDetailId: [],
        loanType: ['', Validators.required],
        loanAmount: ['',Validators.required],
        loanTenure: ['', Validators.required],
        paidAmount: ['', Validators.required],
        remainingAmount: ['', Validators.required],
        bankName: ['', Validators.required],
        defaulterCount: ['', Validators.required],
      }),
      borrowerDocuments: this.fb.group({
        documentId: [],

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
  }


  
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
    
    this.bs.saveBrwr(frmdata).subscribe();
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
