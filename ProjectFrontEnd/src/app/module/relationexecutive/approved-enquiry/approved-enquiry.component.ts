import { Component ,ViewChild,ElementRef} from '@angular/core';
import jsPDF from 'jspdf';
import { Enquiry } from 'src/app/model/enquiry';
import { EnquiryService } from 'src/app/shared/enquiry.service';

@Component({
  selector: 'app-approved-enquiry',
  templateUrl: './approved-enquiry.component.html',
  styleUrls: ['./approved-enquiry.component.css']
})
export class ApprovedEnquiryComponent {

  enq: Enquiry[];

  @ViewChild('content',{static:false}) el!:ElementRef
  constructor(private es: EnquiryService) { }

  
  ngOnInit() 
    {
      this.es.getByStatus().subscribe((enqLsit:Enquiry[])=>{
        this.enq=enqLsit;      
      })
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
  }

