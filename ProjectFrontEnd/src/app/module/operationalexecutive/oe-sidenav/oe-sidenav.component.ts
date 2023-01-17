import { Component } from '@angular/core';

@Component({
  selector: 'app-oe-sidenav',
  templateUrl: './oe-sidenav.component.html',
  styleUrls: ['./oe-sidenav.component.css']
})
export class OeSidenavComponent {
  list=[
    {
      number:'1',
      name:'Home',
      icon:'fa fa-home'
    },
    {
      number:'2',
      name:'Register Enquiry',
      icon:'fa fa-pencil-square-o' 
    },
    {
      number:'3',
      name:'View Application',
      icon:'fa fa-eye'
    },
    {
      number:'4',
      name:'Update Enquiry',
      icon:'fa fa-file-text' 
    },
    {
      number:'5',
      name:'Sanction Letter',
      icon:'fa fa-envelope-open' 
    }
  ]
}
