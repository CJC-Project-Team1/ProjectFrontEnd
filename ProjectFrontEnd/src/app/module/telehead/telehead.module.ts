import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { TeleheadRoutingModule } from './telehead-routing.module';
import { DefaultersComponent } from './defaulters/defaulters.component';
import { ThNotificationComponent } from './th-notification/th-notification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThEmailComponent } from './th-email/th-email.component';

@NgModule({
  declarations: [
    DefaultersComponent,
    ThNotificationComponent,
    ThEmailComponent,
  ],
  imports: [
    CommonModule,
    TeleheadRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
  ]
})
export class TeleheadModule { }
