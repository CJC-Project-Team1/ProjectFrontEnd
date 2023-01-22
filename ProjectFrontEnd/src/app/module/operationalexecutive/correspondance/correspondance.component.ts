import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EmailSenderService } from 'src/app/shared/email-sender.service';

@Component({
  selector: 'app-correspondance',
  templateUrl: './correspondance.component.html',
  styleUrls: ['./correspondance.component.css']
})
export class CorrespondanceComponent {

  mailForm: FormGroup;
  constructor(private fb: FormBuilder, private es: EmailSenderService, private loctn: Location) { }

  ngOnInit() {
    this.mailForm = this.fb.group({
      to: [''],
      subject: [''],
      text: [''],
      borrowerName: [''],
      applicationNo: ['']
    })
    this.set();
  }

  set()
  {
    let mail:any=this.loctn.getState();
    this.mailForm.get('to').setValue(mail.emailId)
    this.mailForm.get('borrowerName').setValue(mail.customerName)
    this.mailForm.get('applicationNo').setValue(Math.floor(Math.random()*90000000000+10000000000))
  }
  onSend() {
    console.log(this.mailForm.value);
    alert("to:"+this.mailForm.get('to').value);

    this.es.sendMail(this.mailForm.value).subscribe(res => { console.log(res); });
    alert("mail sent.");
    // this.loctn.back();
  }
}
