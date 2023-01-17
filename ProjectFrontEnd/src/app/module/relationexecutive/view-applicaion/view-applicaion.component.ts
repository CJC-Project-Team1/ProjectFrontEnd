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

  enq:Enquiry[];

  constructor(private es:EnquiryService,private route:Router){}

  ngOnInit(){
    this.es.get().subscribe((enqList:Enquiry[])=>{
      this.enq=enqList;
    })
  }

  delEnq(id: number) {
    
    }
    
  onUpdate()
  {
    this.route.navigate(['reHome','updateEnq']);
  }
}
