import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Borrower } from 'src/app/model/borrower';
import { BorrowerService } from 'src/app/shared/borrower.service';
import { SanctionedLoanDetailsService } from 'src/app/shared/sanctioned-loan-details.service';

@Component({
  selector: 'app-loan-app-details',
  templateUrl: './loan-app-details.component.html',
  styleUrls: ['./loan-app-details.component.css']
})
export class LoanAppDetailsComponent {
  constructor(private bs: BorrowerService, private loc:Location, private router:Router, private fb:FormBuilder, private ss:SanctionedLoanDetailsService)
  {
    
  }
  sanctionForm:FormGroup;
  brw:Borrower;
  borrower:Borrower;
  image:any;
  status:string;

  ngOnInit()
  {
    this.getState();
    this.sanctionForm = this.fb.group({
      sanctionedLoanAmount: new FormControl('', Validators.required),
      sanctionedLoanTenure: new FormControl('', Validators.required),
      rateOfInterest: new FormControl('', Validators.required)
    })
  }

  getState()
  {
    let b:any = this.loc.getState();
    this.brw = b;
    this.bs.getBrwrById(this.brw.borrowerId).subscribe((br:Borrower)=>this.borrower = br);

  }

  change(img)
  {
    this.image = img;
  }

  accept()
  {
    this.brw.documentStatus = "Varified";
    this.bs.updateBrwr(this.brw).subscribe((msg:string)=>alert("Document status "+msg));
    window.location.reload();
    
  }

  reject()
  {
    this.brw.documentStatus = "Rejected";
    this.bs.updateBrwr(this.brw).subscribe((msg:string)=>alert("Document status "+msg));
    window.location.reload();
    
  }

  sanctionLoan()
  {
    this.ss.sLoan.borrower = this.borrower;
    this.ss.sLoan.sanctionedLoanAmount = this.sanctionForm.controls['sanctionedLoanAmount'].value;
    this.ss.sLoan.sanctionedLoanTenure = this.sanctionForm.controls['sanctionedLoanTenure'].value;
    this.ss.sLoan.rateOfInterest = this.sanctionForm.controls['rateOfInterest'].value;
    this.router.navigate(['reHome/application/sanctionLetter']);

  }

}
