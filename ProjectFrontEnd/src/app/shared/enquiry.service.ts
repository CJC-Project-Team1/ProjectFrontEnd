import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Enquiry } from '../model/enquiry';

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
    contactNo: 0
  }

  url:string="http://localhost:9080/enquiryApi";
  constructor(private http:HttpClient) { }

  save(enq:Enquiry)
  {
    console.log("in save enq service.")
    console.log(enq.panCard)
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
