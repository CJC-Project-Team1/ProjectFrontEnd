import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EnquiryService } from 'src/app/shared/enquiry.service';

@Component({
  selector: 'app-register-enquiry',
  templateUrl: './register-enquiry.component.html',
  styleUrls: ['./register-enquiry.component.css']
})
export class RegisterEnquiryComponent {

  constructor(private enq:EnquiryService, private fb:FormBuilder){}

  enquiryform:FormGroup

  ngOnInit(){
    this.enquiryform=this.fb.group({
      customerName:[],
      panCard:[],
      adharCard:[],
      emailId:[],
      dateOfBirth:[],
      enquiryStatus:['OPEN'],
      contactNo:[]
    })
  }

  saveEnquiry(){
    this.enq.save(this.enquiryform.value).subscribe()
    console.log(this.enquiryform.value)
    alert('register');
   window.location.reload()
  }
}
