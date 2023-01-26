import { Component } from '@angular/core';
import { Emi } from 'src/app/model/emi';
import { SanctionedLoanDetails } from 'src/app/model/sanctioned-loan-details';
import { EmiService } from 'src/app/shared/emi.service';
import { SanctionedLoanDetailsService } from 'src/app/shared/sanctioned-loan-details.service';

@Component({
  selector: 'app-view-emi',
  templateUrl: './view-emi.component.html',
  styleUrls: ['./view-emi.component.css']
})
export class ViewEmiComponent {
  loan:SanctionedLoanDetails[];
  emi:Emi[];

  constructor(private ss:SanctionedLoanDetailsService) { }


  ngOnInit()
  {
      this.ss.getAllSanLoan().subscribe((sData:SanctionedLoanDetails[])=>{
        this.loan=sData;
      })

      this
  }

  // paid(e: Emi) {
  //   alert("in emistatuschange")
  //      e.emiStatus='paid';
  //      this.ss.updateEmi(e).subscribe();
  //    }
}
