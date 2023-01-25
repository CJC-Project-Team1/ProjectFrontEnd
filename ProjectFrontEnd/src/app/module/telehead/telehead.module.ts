import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeleheadRoutingModule } from './telehead-routing.module';
import { DefaultersComponent } from './defaulters/defaulters.component';
import { ThNotificationComponent } from './th-notification/th-notification.component';


@NgModule({
  declarations: [
    DefaultersComponent,
    ThNotificationComponent,
  ],
  imports: [
    CommonModule,
    TeleheadRoutingModule
  ]
})
export class TeleheadModule { }
