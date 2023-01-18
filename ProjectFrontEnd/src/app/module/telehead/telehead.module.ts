import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeleheadRoutingModule } from './telehead-routing.module';
import { DefaultersComponent } from './defaulters/defaulters.component';


@NgModule({
  declarations: [
    DefaultersComponent
  ],
  imports: [
    CommonModule,
    TeleheadRoutingModule
  ]
})
export class TeleheadModule { }
