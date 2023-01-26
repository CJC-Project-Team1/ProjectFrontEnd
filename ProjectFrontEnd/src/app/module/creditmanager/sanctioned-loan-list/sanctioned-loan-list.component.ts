import { Component } from '@angular/core';
import { Borrower } from 'src/app/model/borrower';
import { SanctionedLoanDetails } from 'src/app/model/sanctioned-loan-details';
import { BorrowerService } from 'src/app/shared/borrower.service';
import { SanctionedLoanDetailsService } from 'src/app/shared/sanctioned-loan-details.service';

@Component({
  selector: 'app-sanctioned-loan-list',
  templateUrl: './sanctioned-loan-list.component.html',
  styleUrls: ['./sanctioned-loan-list.component.css']
})
export class SanctionedLoanListComponent {
  constructor(private sls:SanctionedLoanDetailsService){}
  sanLoans: SanctionedLoanDetails[] = [];
  
  st1:string = "Approved"
  ngOnInit()
  {
    this.sls.getAllSanLoan().subscribe((slist)=>{
      slist.forEach((sl)=>{
        if(sl.borrower.applicationStatus == this.st1)
        {
          this.sanLoans.push(sl);
        }
      })
    })
  }
}
