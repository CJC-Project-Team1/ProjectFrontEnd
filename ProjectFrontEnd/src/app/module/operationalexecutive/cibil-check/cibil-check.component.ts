import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cibil } from 'src/app/model/cibil';
import { CibilService } from 'src/app/shared/cibil.service';
import { EnquiryService } from 'src/app/shared/enquiry.service';

@Component({
  selector: 'app-cibil-check',
  templateUrl: './cibil-check.component.html',
  styleUrls: ['./cibil-check.component.css']
})
export class CibilCheckComponent {

  cibilcheck:FormGroup;
  constructor(private es:CibilService,private fb:FormBuilder,private loctn:Location){}
  cb:Cibil
  ngOnInit()
  {
    this.cibilcheck=this.fb.group({
      panCard:['']
    })
  }

 
  check()
  {
    let c:Cibil
    console.log(this.cibilcheck.value);
    let pan:string=this.cibilcheck.controls['panCard'].value
    this.es.getCibil(pan).subscribe();
    this.loctn.back();
   // window.location.reload();
  }
}
