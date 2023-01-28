import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Emi } from 'src/app/model/emi';
import { SanctionedLoanDetails } from 'src/app/model/sanctioned-loan-details';
import { EmiService } from 'src/app/shared/emi.service';
import { SanctionedLoanDetailsService } from 'src/app/shared/sanctioned-loan-details.service';

@Component({
  selector: 'app-approved-application',
  templateUrl: './approved-application.component.html',
  styleUrls: ['./approved-application.component.css']
})
export class ApprovedApplicationComponent {
  page: number = 1;
  count: number = 0;
  tableItems: number = 5;
  tableSizes: any = [2, 4, 6, 8];
  searchText:any;
  
  emi:Emi={
    emiId: 0,
    emiStatus: 'Unpaid',
    emiTenure: '',
    emiAmount: 0,
    loanBal: 0,
    date: undefined,
    defautlerCount: 0,
    emiCount: 0
  };
  
  constructor(private ss:SanctionedLoanDetailsService,private emis:EmiService){}
  sLoans:SanctionedLoanDetails[];

  ngOnInit()
  {
    this.getData();
  }

  getData()
  {
    this.ss.getAllSanLoan().subscribe((sLoan:SanctionedLoanDetails[])=>this.sLoans = sLoan);
  }

  onDisburse(s:SanctionedLoanDetails)
  {
    this.emi.emiTenure=s.sanctionedLoanTenure;
    this.emi.emiAmount=s.monthlyEmi;
    this.emi.emiCount=Number(s.sanctionedLoanTenure)*12
    this.emi.loanBal=Number(s.sanctionedLoanAmount)
    this.emi.emiStatus = 'Unpaid';
    this.emi.defautlerCount = 0;
    console.log(this.emi.date)
    this.emi.defautlerCount=0
    this.emi.emiId=0
  
    for(let i=1;i<=this.emi.emiCount;i++){
      let emi1 =new Emi();

      emi1.emiTenure=s.sanctionedLoanTenure;
      emi1.emiAmount=s.monthlyEmi;
      // emi1.emiCount=Number(s.sanctionedLoanTenure)*12
      emi1.emiCount=Number(i)
      emi1.loanBal=Number(s.sanctionedLoanAmount)
      emi1.defautlerCount = this.emi.defautlerCount;
      emi1.emiStatus = this.emi.emiStatus;
      //emi1.emiId=i;

      emi1.date = new Date();
      let currentDate = new Date();
      let num = 30*i;
      emi1.date.setDate(currentDate.getDate()+num) 
      console.log(emi1.date)
      
      console.log(emi1.emiId)
      s.emilist.push(emi1);
    }

    //console.log(s)
    console.log(s.emilist)
    this.ss.updateSanLoan(s).subscribe();

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
