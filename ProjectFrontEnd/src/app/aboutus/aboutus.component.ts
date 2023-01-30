import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormlyGroup } from '@ngx-formly/core/lib/templates/formly.group';
import { EmailSenderService } from '../shared/email-sender.service';
import { NotifierService } from '../shared/notifier.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {

  mailForm: FormGroup;
  constructor(private es: EmailSenderService, private fb: FormBuilder, private notify:NotifierService) { }

  ngOnInit() {

  }

  onTL() {
    this.mailForm = this.fb.group({
      to: ['surunautiyal@gmail.com'],
      subject: ['Contact message from company'],
      text: ['Someone is trying to Contact you From MSME Finance.'],
    });
    this.es.sendDynamicMail(this.mailForm.value).subscribe();
    this.notify.success('to Suruchi Nautiyal','Mail Sent');
  }
  onTM1() {
    this.mailForm = this.fb.group({
      to: ['poojaborse451@gmail.com'],
      subject: ['Contact message from company'],
      text: ['Someone is trying to Contact you From MSME Finance.'],
    });
    this.es.sendDynamicMail(this.mailForm.value).subscribe();
    this.notify.success('to Pooja Borse','Mail Sent');
  }
  onTM2() {
    this.mailForm = this.fb.group({
      to: ['mstambe1996@gmail.com'],
      subject: ['Contact message from company'],
      text: ['Someone is trying to Contact you From MSME Finance.'],
    });
    this.es.sendDynamicMail(this.mailForm.value).subscribe();
    this.notify.success('to Mayur Tambe','Mail Sent');
  }
  onTM3() {
    this.mailForm = this.fb.group({
      to: ['abhilashthakre28@gmail.com'],
      subject: ['Contact message from company'],
      text: ['Someone is trying to Contact you From MSME Finance.'],
    });
    this.es.sendDynamicMail(this.mailForm.value).subscribe();
    this.notify.success('to Abhilash Thakre','Mail Sent');
  }
  onTM4() {
    this.mailForm = this.fb.group({
      to: ['narendrapakhare13@gmail.com'],
      subject: ['Contact message from company'],
      text: ['Someone is trying to Contact you From MSME Finance.'],
    });
    this.es.sendDynamicMail(this.mailForm.value).subscribe();
    this.notify.success('to Narendra Pakhare','Mail Sent');
  }
}
