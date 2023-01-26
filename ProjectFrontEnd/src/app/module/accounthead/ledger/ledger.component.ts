import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Emi } from 'src/app/model/emi';
import { SanctionedLoanDetails } from 'src/app/model/sanctioned-loan-details';
import { SanctionedLoanDetailsService } from 'src/app/shared/sanctioned-loan-details.service';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent {

  loan:SanctionedLoanDetails;
  date:any=new Date();
  bal:number;
  constructor(private ss:SanctionedLoanDetailsService,private loctn:Location){}

  ngOnInit()
  {
    this.get();
  }

  get()
  {
    let sLoan:any=this.loctn.getState();
    this.ss.getSanlaonById(sLoan.sanctionedLoanId).subscribe((sanL:SanctionedLoanDetails)=>{
      this.loan=sanL;
    })

    this.bal=sLoan.sanctionedLoanAmount;

    // this.loan.emilist.forEach(e=>
    //   console.log("status",e.emiStatus))
    
     
  }
}
