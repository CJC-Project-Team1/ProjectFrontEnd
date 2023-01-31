import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Emi } from 'src/app/model/emi';
import { SanctionedLoanDetails } from 'src/app/model/sanctioned-loan-details';
import { EmailSenderService } from 'src/app/shared/email-sender.service';
import { SanctionedLoanDetailsService } from 'src/app/shared/sanctioned-loan-details.service';

@Component({
  selector: 'app-defaulters',
  templateUrl: './defaulters.component.html',
  styleUrls: ['./defaulters.component.css']
})
export class DefaultersComponent {
  page: number = 1;
  count: number = 0;
  tableItems: number = 6;
  tableSizes: any = [2, 4, 6, 8];
  constructor(private sls: SanctionedLoanDetailsService, private router: Router) { }
  defaulters: SanctionedLoanDetails[] = [];
  missedEmi: Emi[] = [];

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.sls.getAllSanLoan().subscribe((sloandata: SanctionedLoanDetails[]) => {
      console.log(sloandata)
      sloandata.forEach((sloan: SanctionedLoanDetails) => {
        sloan.emilist.forEach((emi: Emi) => {
          if (emi.defautlerCount != 0) {
            this.defaulters.push(sloan)
            this.missedEmi.push(emi)
          }
        })
      })
    })
  }
  mail(d: SanctionedLoanDetails) {
    this.sls.sLoan = Object.assign({}, d)
    this.router.navigate(['reHome', 'mailth'])
  }


  onTableData(event: any) {
    this.page = event;
 //   this.getData();
  }

  onTableSize(event: any) {
    this.tableItems = event.target.value;
    this.page = 1;
    this.getData();
  }
}
