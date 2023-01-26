import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Borrower } from 'src/app/model/borrower';
import { SanctionedLoanDetails } from 'src/app/model/sanctioned-loan-details';
import { SanctionedLoanDetailsService } from 'src/app/shared/sanctioned-loan-details.service';

@Component({
  selector: 'app-aprvd-loan-details',
  templateUrl: './aprvd-loan-details.component.html',
  styleUrls: ['./aprvd-loan-details.component.css']
})
export class AprvdLoanDetailsComponent {
  constructor(private loc:Location, private sls:SanctionedLoanDetailsService){}

  loan:boolean;
  image: any;
  sanLoan:SanctionedLoanDetails = {
    sanctionedLoanId: 0,
    sanctionedLoanAmount: '',
    sanctionedLoanTenure: '',
    rateOfInterest: '',
    monthlyEmi: 0,
    sanctionLetter: undefined,
    borrower: new Borrower,
    emilist: []
  }

  ngOnInit()
  {
    let sl:any = this.loc.getState();
    this.sanLoan = sl;
    this.loanVisible();
  }

  change(img)
  {
    this.image = img;
  }
  
  loanVisible()
  {
    if(this.sanLoan.borrower.loanHistory.bankName == null || this.sanLoan.borrower.loanHistory.bankName == "")
    {
      this.loan = false;
    }
    else
    {
      this.loan = true;
    }
  }

  back()
  {
    this.loc.back();
  }

  




}
