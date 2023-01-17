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

  url:string=" http://localhost:9080/enquiryApi";
  constructor(private http:HttpClient) { }

  save(enq:Enquiry)
  {
    return this.http.post(this.url+"/saveEnq",enq);
  }

  get()
  {
    return this.http.get<Enquiry[]>(this.url);
  }

  update(enq:Enquiry)
  {
    return this.http.put(this.url+"/"+enq.enquiryId,enq);
  }

}
