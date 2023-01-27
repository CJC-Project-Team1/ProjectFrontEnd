import { Location } from '@angular/common';
import { Component, ElementRef, ViewChild, } from '@angular/core';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import { SanctionedLoanDetails } from 'src/app/model/sanctioned-loan-details';
import { SanctionedLoanDetailsService } from 'src/app/shared/sanctioned-loan-details.service';
import { Emi } from 'src/app/model/emi';
import { Borrower } from 'src/app/model/borrower';
import { EmiService } from 'src/app/shared/emi.service';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent {
  
 
  loan:SanctionedLoanDetails={
    sanctionedLoanId: 0,
    sanctionedLoanAmount: '',
    sanctionedLoanTenure: '',
    rateOfInterest: '',
    monthlyEmi: 0,
    sanctionLetter: undefined,
    borrower: new Borrower,
    emilist: []
  };

  date:any=new Date();
  bal:number;
  @ViewChild('content',{static:false}) el!:ElementRef;
  constructor(private ss:SanctionedLoanDetailsService,private loctn:Location,private emiS:EmiService){}

  ngOnInit()
  {
    this.getData();
  }

  getData()
  {
    let sLoan:any=this.loctn.getState();
    this.ss.getSanlaonById(sLoan.sanctionedLoanId).subscribe((sanL:SanctionedLoanDetails)=>{
      this.loan=sanL;
    })    
   
  }


  onPaid(e:Emi,i:number)
  {
    console.log("eni id===="+e.emiId);
   // e.emiAmount=0;
    console.log('in onpaid')
    let status:string='paid';
    e.emiStatus=status;
    console.log(status)
    this.bal=Number(this.loan.sanctionedLoanAmount)-(e.emiAmount*(i+1));
    console.log(this.bal);
    console.log("value of i=="+i);
    e.loanBal=this.bal;
    let datee=new Date();
    e.date=datee;
    this.emiS.updateEmi(e).subscribe();
  }


  makePDF()
  {
    console.log("in make PDF")
    let pdf =new jsPDF('p','pt','a2');
      pdf.html(this.el.nativeElement,{
        callback:(pdf)=>{
        pdf.save("Ledger.pdf");
      }
    })     
  }


  makeXLSX()
  {
    let element=document.getElementById('Table');
    const ws:XLSX.WorkSheet=XLSX.utils.table_to_sheet(element);
    const wb:XLSX.WorkBook=XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb,ws,'Ledger');
    XLSX.writeFile(wb,'Ledger.xlsx');
  }
  
 
}
