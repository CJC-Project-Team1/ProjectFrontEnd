import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FaqsComponent } from './faqs/faqs.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { LoginfailedComponent } from './loginfailed/loginfailed.component';
import { AccountHeadModule } from './module/account-head/account-head.module';
import { AdminComponent } from './module/admin-page/admin/admin.component';
import { CreditManagerModule } from './module/credit-manager/credit-manager.module';
import { OperationExecutiveModule } from './module/operation-executive/operation-executive.module';
import { RelationexecutiveModule } from './module/relationexecutive/relationexecutive.module';
import { TeleHeadModule } from './module/tele-head/tele-head.module';

const routes: Routes = [
  {
    path: '', redirectTo: 'header', pathMatch: 'full'
  },
  {
    path: 'header', component: HeaderComponent,
    children: [

      {
        path: '', redirectTo: 'dashboard', pathMatch: 'full'
      },
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: 'faqs', component: FaqsComponent
      },
      {
        path: 'aboutus', component: AboutusComponent
      },
      {
        path: 'contactus', component: ContactusComponent
      },
      {
        path: 'login', component: LoginComponent,
        children: [
          {
            path: 'loginfailed', component: LoginfailedComponent
          }
        ]
      },
      {
        path: "role", component: AdminComponent,
        children: [
          {
            path: "RE", loadChildren: () => RelationexecutiveModule
          },
          {
            path: "OE", loadChildren: () => OperationExecutiveModule
          },
          {
            path: "CM", loadChildren: () => CreditManagerModule
          },
          {
            path: "AH", loadChildren: () => AccountHeadModule
          },
          {
            path: "TH", loadChildren: () => TeleHeadModule
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
