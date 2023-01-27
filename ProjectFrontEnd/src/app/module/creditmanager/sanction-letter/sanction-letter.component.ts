import { Location } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import { BorrowerService } from 'src/app/shared/borrower.service';
import { SanctionedLoanDetailsService } from 'src/app/shared/sanctioned-loan-details.service';

import { SanctionedLoanDetails } from 'src/app/model/sanctioned-loan-details';
import { EmailSenderService } from 'src/app/shared/email-sender.service';
import { NotifierService } from 'src/app/shared/notifier.service';

@Component({
  selector: 'app-sanction-letter',
  templateUrl: './sanction-letter.component.html',
  styleUrls: ['./sanction-letter.component.css']
})
export class SanctionLetterComponent {
  sanctionForm: FormGroup;
  mailForm:FormGroup;
  @ViewChild('content',{static:false}) el!:ElementRef

  constructor(private fb: FormBuilder, private bs: BorrowerService, private sL: SanctionedLoanDetailsService,
           private route: Router, private loc: Location, private es:EmailSenderService, private notiy:NotifierService) { }
  date: number = Date.now();
  interestAmount:number;
  totalAmt:number;
  pdfFile:any;
  sanLoan:SanctionedLoanDetails;

  ngOnInit(): void {
    this.mailForm = this.fb.group({
      to: [''],
      subject: [''],
      text: [''],
      borrowerName: [''],
      applicationNo: ['']
    })

    this.sanctionForm = this.fb.group({
      borrowerName: [this.sL.sLoan.borrower.borrowerName, Validators.required],
      contactNo: [this.sL.sLoan.borrower.contactNo, Validators.required],
      emailId: [this.sL.sLoan.borrower.emailId, Validators.required],
      address: [this.sL.sLoan.borrower.address, Validators.required],
      sanctionedLoanAmount: [this.sL.sLoan.sanctionedLoanAmount, Validators.required],
      monthlyEmi: [this.sL.sLoan.monthlyEmi, Validators.required],
      sanctionedLoanTenure: [this.sL.sLoan.sanctionedLoanTenure, Validators.required]
      })
      this.interest();
  }


  interest()
  {
    this.totalAmt = Number(this.sL.sLoan.monthlyEmi)*12*Number(this.sL.sLoan.sanctionedLoanTenure);
    this.totalAmt = Math.round((this.totalAmt + Number.EPSILON) * 100) / 100;
    let pa:number = Number(this.sL.sLoan.sanctionedLoanAmount);
   this.interestAmount = Math.round(((this.totalAmt - pa) + Number.EPSILON) * 100) / 100;
   
  }

  SavePDF()
  {
    let pdf = new jsPDF('p','pt','a2');
      pdf.html(this.el.nativeElement,{
        callback:(pdf)=>{
          pdf.save('Sanction Letter.pdf');
        }
      })
  }

  setMailData()
  {
    this.mailForm.get('to').setValue(this.sL.sLoan.borrower.emailId);
    this.mailForm.get('borrowerName').setValue(this.sL.sLoan.borrower.borrowerName);
    this.mailForm.get('applicationNo').setValue(this.sL.sLoan.borrower.borrowerId);
    this.mailForm.get('subject').setValue("Loan Approval Mail");
  }

  mailSend()
  {
    this.es.sendDynamicMail(this.mailForm.value).subscribe(res => { console.log(res); });
    this.notiy.success("To:"+this.mailForm.get('to').value,"Mail Sent");
  }

  back() {
    this.loc.back();
  }

  onselectfile(event)
  {
    this.pdfFile = event.target.files[0];
  }

  saveData()
  {
    this.sanLoan = this.sL.sLoan;
    this.sanLoan.borrower.applicationStatus = "Approved";
    const loandata = JSON.stringify(this.sanLoan);
    const data = new FormData();
    data.append("loandetails", loandata);
    data.append("sanctionLetter",this.pdfFile);
    this.sL.saveSanLoan(data).subscribe();
    this.setMailData();
    this.mailForm.get('text').setValue("\nDear "+this.sL.sLoan.borrower.borrowerName+"\nLoan Application No: "+this.sL.sLoan.borrower.borrowerId+","
    +"\n We are highly pleased to inform you that your application for a home loan of ₹ "+this.sL.sLoan.sanctionedLoanAmount+" has been approved by the bank."
    +"\n I hereby request you to please come by at our office to meet our Relationship Executive, anytime during working hours from Monday to Friday to complete all the formalities so that the loan amount can be disbursed."
    +"\n\n Looking forward to see you."
    +"\n\n Thank You !"
    +"\n\n Regards,"
    +"\n MSME Loans");
    this.mailSend();
    
  }
}
