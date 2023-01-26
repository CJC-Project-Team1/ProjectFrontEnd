import { Component } from '@angular/core';
import { Borrower } from 'src/app/model/borrower';
import { BorrowerService } from 'src/app/shared/borrower.service';

@Component({
  selector: 'app-cm-notification',
  templateUrl: './cm-notification.component.html',
  styleUrls: ['./cm-notification.component.css']
})
export class CmNotificationComponent {
  brwr:Borrower[];
  page: number = 1;
  count: number = 0;
  tableItems: number = 6;
  tableSizes: any = [2, 4, 6, 8];

  constructor(private bs: BorrowerService) { }

  ngOnInit() {
    this.getData();

  }

    getData() {
      this.bs.getBrwrByStatusN().subscribe(bList=> {
        this.brwr = bList;
      });
    }

  onTableData(event: any) {
    this.page = event;
    this.getData();
  }

  onTableSize(event: any) {
    this.tableItems = event.target.value;
    this.page = 1;
    this.getData();
  }
}
