import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmailSenderService } from 'src/app/shared/email-sender.service';
import { NotifierService } from 'src/app/shared/notifier.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {

  mailForm: FormGroup;
  attchmnt: any;
  constructor(private fb: FormBuilder, private es: EmailSenderService, private loctn: Location,private notify:NotifierService) { }

  ngOnInit() {
    this.mailForm = this.fb.group({
      to: [''],
      subject: ['Congratulations! Loan Approved.'],
      text: [''],
      borrowerName: [''],
      applicationNo: [''],
      loanAmount: [''],
      tenure: [''],
      intRate: ['']
    })
    this.set();
  }

set()
{
  let sloan:any=this.loctn.getState();
  console.log(sloan.borrower.borrowerName)
  this.mailForm.get('to').setValue(sloan.borrower.emailId);
  this.mailForm.get('borrowerName').setValue(sloan.borrower.borrowerName);
  this.mailForm.get('applicationNo').setValue(sloan.borrower.borrowerId);
  this.mailForm.get('loanAmount').setValue(sloan.sanctionedLoanAmount);
  this.mailForm.get('tenure').setValue(sloan.sanctionedLoanTenure);
  this.mailForm.get('intRate').setValue(sloan.rateOfInterest);

}
  onSend() {
    console.log(this.mailForm.value);
    

    let frmdata = new FormData();
    let email = JSON.stringify(this.mailForm.value);

    frmdata.append("attachment", this.attchmnt);
    frmdata.append("Email", email);

    this.es.postAttachment(frmdata).subscribe(res => { console.log(res); });
    this.notify.success("To:"+this.mailForm.get('to').value,"Mail Sent");
  }

  attachment(event) {
    console.log("attachment event");
    this.attchmnt = event.target.files[0];
  }

  onBack()
  {
    this.loctn.back();
  }
}