import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Borrower } from 'src/app/model/borrower';
import { BorrowerService } from 'src/app/shared/borrower.service';
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.css']
})
export class LoanListComponent {

  brwr:Borrower[];
  @ViewChild('content',{static:false}) el!:ElementRef

   //pagination
   page: number = 1;
   count: number = 0;
   tableItems: number = 5;
   tableSizes: any = [2, 4, 6, 8];
   searchText:any;
   
  constructor(private bs:BorrowerService, private router:Router){}

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

  showdetails(b){
    console.log(b)
    this.bs.brwr=Object.assign({},b)
    this.router.navigate(['reHome','details'])
  }

  makeXLSX()
  {
    let element=document.getElementById('Table');
    const ws:XLSX.WorkSheet=XLSX.utils.table_to_sheet(element);
    const wb:XLSX.WorkBook=XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb,ws,'Approved Enquiry');
    XLSX.writeFile(wb,'ApprovedEnquiry.xlsx');
  }

  makePDF()
  {
    let pdf =new jsPDF('p','pt','a2');
    pdf.html(this.el.nativeElement,{
      callback:(pdf)=>{
        pdf.save("ApprovedEnquryList.pdf");
      }
    })     
  }

}
