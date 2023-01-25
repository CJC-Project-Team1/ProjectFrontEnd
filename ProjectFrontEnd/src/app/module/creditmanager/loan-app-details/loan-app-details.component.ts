import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppliedLoan } from 'src/app/model/applied-loan';
import { Borrower } from 'src/app/model/borrower';
import { BorrowerBankDetails } from 'src/app/model/borrower-bank-details';
import { BorrowerDocuments } from 'src/app/model/borrower-documents';
import { BusinessDetails } from 'src/app/model/business-details';
import { PreviousLoanDetails } from 'src/app/model/previous-loan-details';
import { SanctionedLoanDetails } from 'src/app/model/sanctioned-loan-details';
import { BorrowerService } from 'src/app/shared/borrower.service';
import { EmailSenderService } from 'src/app/shared/email-sender.service';
import { NotifierService } from 'src/app/shared/notifier.service';
import { SanctionedLoanDetailsService } from 'src/app/shared/sanctioned-loan-details.service';

@Component({
  selector: 'app-loan-app-details',
  templateUrl: './loan-app-details.component.html',
  styleUrls: ['./loan-app-details.component.css']
})
export class LoanAppDetailsComponent {
  constructor(private bs: BorrowerService, private loc:Location, private router:Router,
     private fb:FormBuilder, private ss:SanctionedLoanDetailsService,
     private notiy:NotifierService, private es:EmailSenderService)
  {
    
  }
  sanctionForm:FormGroup;
  mailForm:FormGroup;
  brw:Borrower ={
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
    appliedLoan: new AppliedLoan,
    applicationStatus: ''
  } 
  borrower:Borrower ={
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
    appliedLoan: new AppliedLoan,
    applicationStatus: ''
  }
  image:any;
  status:string;
  sanctionloan:SanctionedLoanDetails

  ngOnInit()
  {
    this.mailForm = this.fb.group({
      to: [''],
      subject: [''],
      text: [''],
      borrowerName: [''],
      applicationNo: ['']
    })

    this.getState();
    this.sanctionForm = this.fb.group({
      sanctionedLoanAmount: new FormControl('', Validators.required),
      sanctionedLoanTenure: new FormControl('', Validators.required),
      rateOfInterest: new FormControl('', Validators.required)
    })
  }

  getState()
  {
    let b:any = this.loc.getState();
    this.brw = b;
    this.bs.getBrwrById(this.brw.borrowerId).subscribe((br:Borrower)=>this.borrower = br);

  }

  setMailData()
  {
    this.mailForm.get('to').setValue(this.borrower.emailId);
    this.mailForm.get('borrowerName').setValue(this.borrower.borrowerName);
    this.mailForm.get('applicationNo').setValue(this.borrower.borrowerId);
    this.mailForm.get('subject').setValue("Loan Rejection Mail");
  }

  mailSend()
  {
    this.es.sendDynamicMail(this.mailForm.value).subscribe(res => { console.log(res); });
    this.notiy.success("To:"+this.mailForm.get('to').value,"Mail Sent");
  }

  change(img)
  {
    this.image = img;
  }

  accept()
  {
    this.brw.documentStatus = "Varified";
    this.bs.updateBrwr(this.brw).subscribe((msg:string)=>alert("Document status "+msg));
    window.location.reload();
    
  }

  docReject()
  {
    this.brw.documentStatus = "Rejected";
    this.brw.applicationStatus = "Rejected";
    this.bs.updateBrwr(this.brw).subscribe();
    this.setMailData();
    this.mailForm.get('text').setValue("\nDear "+this.borrower.borrowerName+"\nLoan Application No: "+this.borrower.borrowerId+","
    +"\n We are sorry to inform you that your loan request has been rejected."
    +"\n As your Documents doesn't match our eligiblity criteria."
    + "\n Please visit branch for any Query or contact Branch Manager ."
    + "\n Thank You !"
    + "\n\n\n Regards,"
    + "\n MSME Loans");
    this.mailSend();
    
    this.router.navigate(['reHome/homepage']);
    
    
  }

  reject()
  {
    this.brw.applicationStatus = "Rejected";
    this.bs.updateBrwr(this.brw).subscribe();
    this.setMailData();
    this.mailForm.get('text').setValue("\nDear "+this.borrower.borrowerName+"\nLoan Application No: "+this.borrower.borrowerId+","
    +"\n We are sorry to inform you that your loan request has been rejected."
    +"\n As your previous loans has not been closed and doesn't match our eligibility criteria."
    + "\n Please visit branch for any Query or contact Branch Manager ."
    + "\n Thank You !"
    + "\n\n Regards,"
    + "\n MSME Loans");
    this.mailSend();
    this.router.navigate(['reHome/homepage']);
  }

  calculate(){
    let r=this.sanctionForm.get('rateOfInterest').value/1200
    let p=this.sanctionForm.get('sanctionedLoanAmount').value
    let n=this.sanctionForm.get('sanctionedLoanTenure').value*12

    let num=p*r*Math.pow((1+r),n) 
    let deno=(Math.pow((1+r),n)-1)
    let temp=num/deno
    this.ss.sLoan.monthlyEmi=Math.round(((temp) + Number.EPSILON) * 100) / 100;
  }

  sanctionLoan()
  {
    
    this.ss.sLoan.borrower=this.borrower;
    this.ss.sLoan.sanctionedLoanAmount = this.sanctionForm.controls['sanctionedLoanAmount'].value;
    this.ss.sLoan.sanctionedLoanTenure = this.sanctionForm.controls['sanctionedLoanTenure'].value;
    this.ss.sLoan.rateOfInterest = this.sanctionForm.controls['rateOfInterest'].value;
    this.calculate();
    this.router.navigate(['reHome/application/viewApplication/sanctionLetter']);

  }

}
