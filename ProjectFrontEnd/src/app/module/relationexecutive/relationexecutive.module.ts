import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelationexecutiveRoutingModule } from './relationexecutive-routing.module';
import { ReHeaderComponent } from './re-header/re-header.component';
import { ReSidenavComponent } from './re-sidenav/re-sidenav.component';
import { ReHomeComponent } from './re-home/re-home.component';


@NgModule({
  declarations: [
    ReHeaderComponent,
    ReSidenavComponent,
    ReHomeComponent
  ],
  imports: [
    CommonModule,
    RelationexecutiveRoutingModule
  ],
  exports:[
    ReHeaderComponent,
    ReSidenavComponent,
    ReHomeComponent
  ]
})
export class RelationexecutiveModule { }
