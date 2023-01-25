import { Component } from '@angular/core';
import { SanctionedLoanDetails } from 'src/app/model/sanctioned-loan-details';
import { SanctionedLoanDetailsService } from 'src/app/shared/sanctioned-loan-details.service';

@Component({
  selector: 'app-approved-application',
  templateUrl: './approved-application.component.html',
  styleUrls: ['./approved-application.component.css']
})
export class ApprovedApplicationComponent {

  constructor(private ss:SanctionedLoanDetailsService){}
  sLoans:SanctionedLoanDetails[];

  ngOnInit()
  {
    this.ss.getAllSanLoan().subscribe((sLoan:SanctionedLoanDetails[])=>this.sLoans = sLoan);
  }
}
