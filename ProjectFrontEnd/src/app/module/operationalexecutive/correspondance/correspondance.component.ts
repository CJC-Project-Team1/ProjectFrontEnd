import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EmailSenderService } from 'src/app/shared/email-sender.service';
import { NotifierService } from 'src/app/shared/notifier.service';

@Component({
  selector: 'app-correspondance',
  templateUrl: './correspondance.component.html',
  styleUrls: ['./correspondance.component.css']
})
export class CorrespondanceComponent {

  mailForm: FormGroup;
  constructor(private fb: FormBuilder, private es: EmailSenderService, private loctn: Location,private notiy:NotifierService) { }

  ngOnInit() {
    this.mailForm = this.fb.group({
      to: [''],
      subject: ['Low cibil score'],
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
    this.mailForm.get('applicationNo').setValue(mail.enquiryId)
  }
  onSend() {
    console.log(this.mailForm.value);
    this.notiy.success("To:"+this.mailForm.get('to').value,"Mail Sent");
    this.es.sendMail(this.mailForm.value).subscribe(res => { console.log(res); });
     this.loctn.back();
  }
}
