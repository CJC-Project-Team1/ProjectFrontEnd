import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BusinessDetails } from '../model/business-details';

@Injectable({
  providedIn: 'root'
})
export class BusinessDetailsService {

  bsnsD:BusinessDetails={
    businessId: 0,
    companyName: '',
    revenue: '',
    businesstype: ''
  }

  url:string="http://localhost:9080/businessdetailApi/";

  constructor(private http:HttpClient) { }

  saveBsnsD(bsnsD:BusinessDetails)
  {
    return this.http.post(this.url+"businessdetail",bsnsD,{responseType:'text' as 'json'});
  }

  getBsnsD()
  {
    return this.http.get<BusinessDetails[]>(this.url+"businessdetails");
  }

  updateBsnsD(bsnsD:BusinessDetails)
  {
    return this.http.put(this.url+"businessdetail/"+bsnsD.businessId,bsnsD,{responseType:'text' as 'json'});
  }

  deleteBsnsD(id:number)
  {
    return this.http.delete(this.url+"businessdetail/"+id);
  }
}
