import { Location } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import { BorrowerService } from 'src/app/shared/borrower.service';
import { SanctionedLoanDetailsService } from 'src/app/shared/sanctioned-loan-details.service';

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


  ngOnInit(): void {
    this.sanctionForm = this.fb.group({
      borrowerName: ['', Validators.required],
      adharNo: ['', Validators.required],
        SanctionedLoanDetails: this.fb.group({
          sanctionedLoanAmount: ['', Validators.required],
          sanctionedLoanTenure: ['', Validators.required],
          monthlyEmi: [],
        })
      })

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
}
