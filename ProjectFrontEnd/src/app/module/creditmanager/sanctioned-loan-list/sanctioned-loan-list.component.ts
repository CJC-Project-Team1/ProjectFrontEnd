import { Component } from '@angular/core';
import { SanctionedLoanDetails } from 'src/app/model/sanctioned-loan-details';
import { SanctionedLoanDetailsService } from 'src/app/shared/sanctioned-loan-details.service';

@Component({
  selector: 'app-sanctioned-loan-list',
  templateUrl: './sanctioned-loan-list.component.html',
  styleUrls: ['./sanctioned-loan-list.component.css']
})
export class SanctionedLoanListComponent {
  page: number = 1;
  count: number = 0;
  tableItems: number = 5;
  tableSizes: any = [2, 4, 6, 8];
  constructor(private sls:SanctionedLoanDetailsService){}
  sanLoans: SanctionedLoanDetails[] = [];
  
  st1:string = "Approved"
  ngOnInit()
  {
   this.getData();
  }

  getData()
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
  
  onTableData(event: any) {
    this.page = event;
   // this.getData();
  }

  onTableSize(event: any) {
    this.tableItems = event.target.value;
    this.page = 1;
    this.getData();
  }
}