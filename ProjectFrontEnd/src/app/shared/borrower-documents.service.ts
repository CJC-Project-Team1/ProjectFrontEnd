import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BorrowerDocuments } from '../model/borrower-documents';

@Injectable({
  providedIn: 'root'
})
export class BorrowerDocumentsService {

  doc:BorrowerDocuments={
    documentId: 0,
    adharCard: undefined,
    panCard: undefined,
    photo: undefined,
    bankStatement: undefined,
    addressProof: undefined,
    balanceSheet: undefined,
    gstCertificate: undefined,
    proprietaryDeed: undefined
  }

  url:string="http://localhost:9080/borrowerDocumentsApi/";

  constructor(private http:HttpClient) { }

  saveDoc(bD:BorrowerDocuments)
  {
    return this.http.post(this.url+"borrowerDocument",bD,{responseType:'text' as 'json'});
  }

  getDoc()
  {
    return this.http.get<BorrowerDocuments[]>(this.url+"borrowerDocuments");
  }

  updateDoc(bD:BorrowerDocuments)
  {
    return this.http.put(this.url+"borrowerDocument/"+bD.documentId,bD,{responseType:'text' as 'json'});
  }

  deleteDoc(id:number)
  {
    return this.http.delete(this.url+"borrowerDocument/"+id);
  }
}
