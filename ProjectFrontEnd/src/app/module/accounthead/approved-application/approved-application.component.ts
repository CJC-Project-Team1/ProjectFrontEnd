import { Component } from '@angular/core';
import { Borrower } from 'src/app/model/borrower';
import { BorrowerService } from 'src/app/shared/borrower.service';

@Component({
  selector: 'app-approved-application',
  templateUrl: './approved-application.component.html',
  styleUrls: ['./approved-application.component.css']
})
export class ApprovedApplicationComponent {

  constructor(private bs:BorrowerService){}
  borrowers:Borrower[];

  ngOnInit()
  {
    this.bs.getBrwr().subscribe((brs:Borrower[])=>this.borrowers = brs);
  }
}
