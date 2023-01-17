import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OeHomeComponent } from './oe-home/oe-home.component';

const routes: Routes = [
  {
    path:"oeHome",component:OeHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationalexecutiveRoutingModule { }
