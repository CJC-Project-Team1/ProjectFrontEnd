import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FaqsComponent } from './faqs/faqs.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { LoginfailedComponent } from './loginfailed/loginfailed.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path:'',redirectTo:'header', pathMatch:'full'
  },
  {
    path:'header',component:HeaderComponent,
    children:[

      {
        path:'', redirectTo:'dashboard',pathMatch:'full'
      },
      {
        path:'dashboard',component:DashboardComponent
      },
      {
        path:'registration', component:RegistrationComponent
      },
      {
        path:'faqs', component:FaqsComponent
      },
      {
        path:'aboutus', component:AboutusComponent
      },
      {
        path:'contactus', component:ContactusComponent
      },
      {
        path:'login', component:LoginComponent,
        children:[
          {
            path:'loginfailed',component:LoginfailedComponent
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
