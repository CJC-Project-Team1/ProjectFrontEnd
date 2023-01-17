import { CssSelector } from '@angular/compiler';
import { Component } from '@angular/core';
import { Enquiry } from 'src/app/model/enquiry';
import { EnquiryService } from 'src/app/shared/enquiry.service';

@Component({
  selector: 'app-view-enquiry',
  templateUrl: './view-enquiry.component.html',
  styleUrls: ['./view-enquiry.component.css']
})
export class ViewEnquiryComponent {

  constructor(private es:EnquiryService){}
  enq:Enquiry[]
  ngOnInit()
  {
    this.es.get().subscribe(data=>{
      this.enq=data
    })
  }
}
