import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReHomeComponent } from './re-home/re-home.component';

const routes: Routes = [
  {
    path:'reHome',component:ReHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelationexecutiveRoutingModule { }
