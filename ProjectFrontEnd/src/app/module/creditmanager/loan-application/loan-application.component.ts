import { Component } from '@angular/core';
import { Borrower } from 'src/app/model/borrower';
import { BorrowerService } from 'src/app/shared/borrower.service';

@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-application.component.html',
  styleUrls: ['./loan-application.component.css']
})
export class LoanApplicationComponent {
  constructor(private bs:BorrowerService){}
  borrowers:Borrower[]=[];
  st1:string = "Under review"
  ngOnInit()
  {
    this.bs.getBrwr().subscribe((brs:Borrower[])=>{
      brs.forEach((bor)=>{
        if(bor.applicationStatus == this.st1)
        {
          this.borrowers.push(bor)
        }
      })
    });
  }

  
}
