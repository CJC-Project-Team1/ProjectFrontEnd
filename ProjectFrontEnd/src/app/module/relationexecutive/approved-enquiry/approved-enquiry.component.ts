import { Component ,ViewChild,ElementRef} from '@angular/core';
import jsPDF from 'jspdf';
import { Enquiry } from 'src/app/model/enquiry';
import { EnquiryService } from 'src/app/shared/enquiry.service';
import { NotifierService } from 'src/app/shared/notifier.service';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-approved-enquiry',
  templateUrl: './approved-enquiry.component.html',
  styleUrls: ['./approved-enquiry.component.css']
})
export class ApprovedEnquiryComponent {

  enq: Enquiry[];
  

  @ViewChild('content',{static:false}) el!:ElementRef
  constructor(private es: EnquiryService,private notify:NotifierService) { }

  
  ngOnInit() 
    {
      this.es.getByStatus().subscribe((enqLsit:Enquiry[])=>{
        this.enq=enqLsit;      
      })
      this.notify.info("Approved Enquiry List","TABLE");
      let e=this.enq;
    }

   
   
    makePDF()
    {
      let pdf =new jsPDF('p','pt','a2');
      pdf.html(this.el.nativeElement,{
        callback:(pdf)=>{
          pdf.save("ApprovedLoanList.pdf");
        }
      })     
    }


    makeXLSX()
    {
      let element=document.getElementById('Table');
      const ws:XLSX.WorkSheet=XLSX.utils.table_to_sheet(element);
      const wb:XLSX.WorkBook=XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb,ws,'Approved Loan');
      XLSX.writeFile(wb,'ApprovedLoans.xlsx');
    }
  }

