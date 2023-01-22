import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cibil } from 'src/app/model/cibil';
import { Enquiry } from 'src/app/model/enquiry';
import { CibilService } from 'src/app/shared/cibil.service';
import { EnquiryService } from 'src/app/shared/enquiry.service';
import { CibilCheckComponent } from '../cibil-check/cibil-check.component';

@Component({
  selector: 'app-enquiry-approval',
  templateUrl: './enquiry-approval.component.html',
  styleUrls: ['./enquiry-approval.component.css']
})
export class EnquiryApprovalComponent {

  enquiry:Enquiry[]
  //pagination
  page: number = 1;
  count: number = 0;
  tableItems: number = 5;
  tableSizes: any = [2, 4, 6, 8];

  constructor(private es: EnquiryService, private route: Router,private loctn:Location,private cs:CibilService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.es.get().subscribe(enqList => {

      this.enquiry = enqList;
    })

    // console.log(Math.floor(Math.random()*90000000000+10000000000))
  }

  update(enq:Enquiry)
  {
    console.log(enq.enquiryStatus)
    this.es.update(enq).subscribe();
    //window.location.reload();
  }
  
  approved(e:Enquiry){
    e.enquiryStatus='Approved'
  }
  rejected(e:Enquiry)
  {
    e.enquiryStatus='Rejected'
  }

  check(e:Enquiry)
  {
    this.cs.getCibil(e.panCard).subscribe();
    window.location.reload();
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
