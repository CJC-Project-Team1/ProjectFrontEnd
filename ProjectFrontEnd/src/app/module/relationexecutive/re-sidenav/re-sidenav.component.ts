import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-re-sidenav',
  templateUrl: './re-sidenav.component.html',
  styleUrls: ['./re-sidenav.component.css']
})
export class ReSidenavComponent {

  @Input() sideNavStatus:boolean=false;

  list=[
    {
      number:'1',
      name:'Home',
      icon:'fa fa-home',
      path:'homepage'
    },
    {
      number:'2',
      name:'Register Enquiry',
      icon:'fa fa-pencil-square-o',
      path:'enquiry'
    },
    {
      number:'3',
      name:'View Application',
      icon:'fa fa-eye',
      path:'view'
    },
    {
      number:'4',
      name:'Update Enquiry',
      icon:'fa fa-file-text',
      path:'update'
    },
    {
      number:'5',
      name:'Sanction Letter',
      icon:'fa fa-envelope-open',
      path:'sanction'
    }
  ]
}
