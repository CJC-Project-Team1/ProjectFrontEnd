import { Location } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import { BorrowerService } from 'src/app/shared/borrower.service';
import { SanctionedLoanDetailsService } from 'src/app/shared/sanctioned-loan-details.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { SanctionedLoanDetails } from 'src/app/model/sanctioned-loan-details';

@Component({
  selector: 'app-sanction-letter',
  templateUrl: './sanction-letter.component.html',
  styleUrls: ['./sanction-letter.component.css']
})
export class SanctionLetterComponent {
  sanctionForm: FormGroup;

  @ViewChild('content',{static:false}) el!:ElementRef
  constructor(private fb: FormBuilder, private bs: BorrowerService, private sL: SanctionedLoanDetailsService, private route: Router, private loc: Location) { }
  date: number = Date.now();
  interestAmount:number;
  totalAmt:number;
  pdfFile:any;
  sanLoan:SanctionedLoanDetails;

  ngOnInit(): void {
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

  mail() {
    this.route.navigate[''];
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
    //this.sanLoan.borrower.applicationStatus = "Approved";
    console.log(this.sanLoan.borrower);
    console.log(this.sanLoan.monthlyEmi);
    console.log(this.sanLoan.rateOfInterest);

    const loandata = JSON.stringify(this.sanLoan);
    const data = new FormData();
    data.append("loandetails", loandata);
    data.append("sanctionLetter",this.pdfFile);
    this.sL.saveSanLoan(data).subscribe();
    
  }
}
