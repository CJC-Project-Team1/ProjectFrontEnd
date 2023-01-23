import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Borrower } from 'src/app/model/borrower';
import { BorrowerService } from 'src/app/shared/borrower.service';

@Component({
  selector: 'app-loan-app-details',
  templateUrl: './loan-app-details.component.html',
  styleUrls: ['./loan-app-details.component.css']
})
export class LoanAppDetailsComponent {
  constructor(private bs: BorrowerService, private loc:Location){}
  brw:Borrower;


  ngOnInit()
  {
    this.getState();
  }

  getState()
  {
    let b:any = this.loc.getState();
    this.brw = b;
  }
}
