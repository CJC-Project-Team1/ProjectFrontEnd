import { Component } from '@angular/core';
import { Enquiry } from 'src/app/model/enquiry';
import { EnquiryService } from 'src/app/shared/enquiry.service';

@Component({
  selector: 'app-oe-notification',
  templateUrl: './oe-notification.component.html',
  styleUrls: ['./oe-notification.component.css']
})
export class OeNotificationComponent {
  enq: Enquiry[];
  page: number = 1;
  count: number = 0;
  tableItems: number = 6;
  tableSizes: any = [2, 4, 6, 8];

  constructor(private es: EnquiryService) { }

  ngOnInit() {
    this.getData();

  }


  getData() {
    this.es.getByStatusOp().subscribe(enqList => {
      this.enq = enqList;
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
