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
  constructor(private loc:Location, private router:Router, private ss:SanctionedLoanDetailsService)
  {
    
  }

  sLoan:SanctionedLoanDetails;
  sL:SanctionedLoanDetails;
  image:any;
  status:string;
  ngOnInit()
  {
    this.getState();
  }

  getState()
  {
    let s:any = this.loc.getState();
    this.sL = s;
    this.ss.getSanlaonById(this.sL.sanctionedLoanId).subscribe((loan:SanctionedLoanDetails)=>this.sL = loan);

  }
  change(img)
  {
    this.image = img;
  }
 
  onBack()
  {
    this.loc.back();
  }

  




}
