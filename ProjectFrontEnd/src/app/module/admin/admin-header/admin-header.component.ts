import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent {
  @Output() sideNavToggled =new EventEmitter<boolean>();
  menuStatus:boolean = false;

  SideNavToggled(){
    this.menuStatus= !this.menuStatus
    this.sideNavToggled.emit(this.menuStatus)
  }
}
