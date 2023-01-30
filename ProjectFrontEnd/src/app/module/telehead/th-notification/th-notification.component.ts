import { Component } from '@angular/core';
import { Emi } from 'src/app/model/emi';
import { SanctionedLoanDetails } from 'src/app/model/sanctioned-loan-details';
import { EmiService } from 'src/app/shared/emi.service';

@Component({
  selector: 'app-th-notification',
  templateUrl: './th-notification.component.html',
  styleUrls: ['./th-notification.component.css']
})
export class ThNotificationComponent {
  deflt:Emi[];
  page: number = 1;
  count: number = 0;
  tableItems: number = 6;
  tableSizes: any = [2, 4, 6, 8];

  constructor(private emiS:EmiService ) { }

  ngOnInit() {
    this.getData();

  }


  getData() {
    this.emiS.getEmiByDeaulter(1).subscribe(dList => {
      this.deflt = dList;
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
