import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EnquiryService } from 'src/app/shared/enquiry.service';
import { NotifierService } from 'src/app/shared/notifier.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  updateEnqform:FormGroup;

  constructor(private es:EnquiryService,private fb:FormBuilder,private loctn:Location,private notify:NotifierService){}

  ngOnInit()
  {
    this.updateEnqform=this.fb.group({
      enquiryId:[],
      customerName:[],
      panCard:[],
      adharCard:[],
      emailId:[],
      dateOfBirth:[],
      enquiryStatus:[],
      contactNo:[]
    })

    let enq:any=this.loctn.getState();
    console.log(enq.customerName);
    if(enq.enquiryId!=0)
    {
      this.updateEnqform.get('enquiryId').setValue(enq.enquiryId);
      this.updateEnqform.get('customerName').setValue(enq.customerName);
      this.updateEnqform.get('panCard').setValue(enq.panCard);
      this.updateEnqform.get('adharCard').setValue(enq.adharCard);
      this.updateEnqform.get('emailId').setValue(enq.emailId);
      this.updateEnqform.get('dateOfBirth').setValue(enq.dateOfBirth);
      this.updateEnqform.get('enquiryStatus').setValue(enq.enquiryStatus);
      this.updateEnqform.get('contactNo').setValue(enq.contactNo);      
    }
  }

 
  updateEnquiry()
  {
    console.log(this.updateEnqform.value);
    this.es.update(this.updateEnqform.value).subscribe();   
    this.loctn.back();
    this.notify.info("Enquiry Updated","UPDATED");
   // window.location.reload();
  }
}
