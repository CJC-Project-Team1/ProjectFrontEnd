import { Component } from '@angular/core';
import { Borrower } from 'src/app/model/borrower';
import { BorrowerService } from 'src/app/shared/borrower.service';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.css']
})
export class LoanListComponent {

  brwr:Borrower[];

   //pagination
   page: number = 1;
   count: number = 0;
   tableItems: number = 5;
   tableSizes: any = [2, 4, 6, 8];

  constructor(private bs:BorrowerService){}

  ngOnInit()
  {
    this.getData();
  }

  getData()
  {
    this.bs.getBrwr().subscribe((bList:Borrower[])=>{
      this.brwr=bList;
    })
  }


  onTableData(event:any)
  {
    this.page=event;
    this.getData();
  }

  onTableSize(event:any)
  {
    this.tableItems=event.target.value;
    this.page=1;
    this.getData();
  }


}
