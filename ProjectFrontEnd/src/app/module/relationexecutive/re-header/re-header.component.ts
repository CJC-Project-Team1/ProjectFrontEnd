import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-re-header',
  templateUrl: './re-header.component.html',
  styleUrls: ['./re-header.component.css']
})
export class ReHeaderComponent {

  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;
  title: string
  e: Employee

  constructor(private router: Router) { }

  SideNavToggled() {
    this.menuStatus = !this.menuStatus
    this.sideNavToggled.emit(this.menuStatus)
  }

  ngOnInit() {
    if (JSON.parse(sessionStorage.getItem("employee")) != null) {
      this.e = JSON.parse(sessionStorage.getItem("employee"))
      this.title = this.e.employeeName
    }
  }

  logout() {
    sessionStorage.clear()
    this.router.navigate(['header', 'login'])
  }

  notify() 
  {
    console.log('on notif')
    if (sessionStorage.getItem('role') === 'OE') {
      this.router.navigate(['reHome', 'oeNotify']);
    }
    else if (sessionStorage.getItem('role') === 'CM') {
      this.router.navigate(['reHome', 'cmNotify']);
    }
    else if (sessionStorage.getItem('role') === 'AH') {
      this.router.navigate(['reHome', 'ahNotify']);
    }
    else if (sessionStorage.getItem('role') === 'TH') {
      this.router.navigate(['reHome', 'thNotify']);
    }

  }


  
}
