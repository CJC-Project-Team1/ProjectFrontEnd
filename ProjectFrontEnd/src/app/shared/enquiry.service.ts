import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Enquiry } from '../model/enquiry';
import { Cibil } from '../model/cibil';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  enq:Enquiry={
    enquiryId: 0,
    customerName: '',
    panCard: '',
    adharCard: '',
    emailId: '',
    dateOfBirth: '',
    enquiryStatus: 'pending',
    contactNo: 0,
    cibil: {
      cibilId: 0,
      cibilScore: 0,
      cibilRemark: ''
    }
  }
  
  url:string="http://localhost:9080/enquiryApi";
  constructor(private http:HttpClient) { }

  save(enq:Enquiry)
  {
    console.log("in save enq service.")
    // console.log(enq.panCard)
    // console.log(enq.c.cibilScore)
    // console.log(enq.c.cibilRemark)
    return this.http.post(this.url+"/saveEnq",enq,{responseType:'text' as 'json'});
  }

  get()
  {
    return this.http.get<Enquiry[]>(this.url+"/getAllEnq");
  }

  getByStatus()
  {
    return this.http.get<Enquiry[]>(this.url+"/getEnqByStatus/"+"OPEN");
  }

  
  update(enq:Enquiry)
  {
    return this.http.put(this.url+"/updateEnq/"+enq.enquiryId,enq,{responseType:'text' as 'json'});
  }

}
