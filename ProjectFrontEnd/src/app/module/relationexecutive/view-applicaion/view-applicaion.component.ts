import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Enquiry } from 'src/app/model/enquiry';
import { EnquiryService } from 'src/app/shared/enquiry.service';

@Component({
  selector: 'app-view-applicaion',
  templateUrl: './view-applicaion.component.html',
  styleUrls: ['./view-applicaion.component.css']
})
export class ViewApplicaionComponent {

  enq: Enquiry[];
  //pagination
  page: number = 1;
  count: number = 0;
  tableItems: number = 5;
  tableSizes: any = [2, 4, 6, 8];

  constructor(private es: EnquiryService, private route: Router) { }

  ngOnInit() {
    this.getData();
 
  }

  getData() {
    this.es.get().subscribe((enqList: Enquiry[]) => {
      this.enq = enqList;
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
