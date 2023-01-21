import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmailSenderService } from 'src/app/shared/email-sender.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {

  mailForm: FormGroup;
  attchmnt: any;
  constructor(private fb: FormBuilder, private es: EmailSenderService, private loctn: Location) { }

  ngOnInit() {
    this.mailForm = this.fb.group({
      to: [''],
      subject: [''],
      text: [''],
      borrowerName: [''],
      applicationNo: [''],
      loanAmount: [''],
      tenure: [''],
      intRate: ['']
    })
  }

  onSend() {
    console.log(this.mailForm.value);
    alert("to:"+this.mailForm.get('to').value);

    let frmdata = new FormData();
    let email = JSON.stringify(this.mailForm.value);

    frmdata.append("attachment", this.attchmnt);
    frmdata.append("Email", email);

    this.es.postAttachment(frmdata).subscribe(res => { console.log(res); });
    alert("mail sent.");
    // this.loctn.back();
  }

  attachment(event) {
    console.log("attachment event");
    this.attchmnt = event.target.files[0];
  }


}