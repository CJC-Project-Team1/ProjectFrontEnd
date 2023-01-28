import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EmailSenderService } from 'src/app/shared/email-sender.service';
import { NotifierService } from 'src/app/shared/notifier.service';
import {DatePipe, Location} from '@angular/common'

import { SanctionedLoanDetailsService } from 'src/app/shared/sanctioned-loan-details.service';
import { SanctionedLoanDetails } from 'src/app/model/sanctioned-loan-details';
import { Emi } from 'src/app/model/emi';
@Component({
  selector: 'app-th-email',
  templateUrl: './th-email.component.html',
  styleUrls: ['./th-email.component.css']
})
export class ThEmailComponent {
  mailForm: FormGroup;
  constructor(private fb: FormBuilder, private es: EmailSenderService, private loctn: Location,private notiy:NotifierService,private slds:SanctionedLoanDetailsService,private datepipe:DatePipe) { }

  ngOnInit() {
    
    this.mailForm = this.fb.group({
      to: [''],
      subject: [''],
      text: [''],
      borrowerName: [''],
      applicationNo: ['']
    })
  
    this.set(this.slds.sLoan);
  }

  set(s:SanctionedLoanDetails)
  {
    let emidate:string
    s.emilist.forEach((e:Emi)=>{
      if(e.defautlerCount!=0){
        emidate=this.datepipe.transform(e.date,'dd-MM-yyyy')
      }
    })

    this.mailForm.get('to').setValue(s.borrower.emailId)
    this.mailForm.get('borrowerName').setValue(s.borrower.borrowerName)
    this.mailForm.get('applicationNo').setValue(s.borrower.borrowerId)
    this.mailForm.get('subject').setValue("Missed Loan Emi Payment")
    this.mailForm.get('text').setValue("\nDear "+s.borrower.borrowerName+"\nLoan Application No: "+s.borrower.borrowerId+","
    +"\nWe regret to inform you that your EMI for the date "+emidate+" has not been received till date."
    +"\nPlease pay your outstanding EMIs at your earliest to avoid further penalties or legal actions."
    + "\nPlease visit branch for any Query or contact Branch Manager ."
    + "\nThank You !"
    + "\n\nRegards,"
    + "\nMSME Loans");
   // console.log(this.mailForm.value)
  }
  onSend() {
    console.log("send.....")
    console.log(this.mailForm.value);
    this.notiy.success("To:"+this.mailForm.get('to').value,"Mail Sent");
    this.es.sendDynamicMail(this.mailForm.value).subscribe(res => { console.log(res); });
     this.loctn.back();
  }
}
