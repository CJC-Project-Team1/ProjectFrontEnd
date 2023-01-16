import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailSenderService {

  constructor(private http:HttpClient) { }

  url:string=" http://localhost:9080/emailApi";

  postAttachment(data:any)
  {
    console.log("post method with attachment");
    return this.http.post(this.url+"sendMail",data,{responseType:'text' as 'json'});
  }
}
