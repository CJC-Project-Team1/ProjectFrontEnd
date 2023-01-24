import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Borrower } from 'src/app/model/borrower';
import { BorrowerService } from 'src/app/shared/borrower.service';

@Component({
  selector: 'app-aprvd-loan-details',
  templateUrl: './aprvd-loan-details.component.html',
  styleUrls: ['./aprvd-loan-details.component.css']
})
export class AprvdLoanDetailsComponent {
  constructor(private bs: BorrowerService, private loc: Location) { }
  brw: Borrower;

  ngOnInit() {

    this.getState();
  }

  getState() {
    let b: any = this.loc.getState();
    this.brw = b;
  }


}
