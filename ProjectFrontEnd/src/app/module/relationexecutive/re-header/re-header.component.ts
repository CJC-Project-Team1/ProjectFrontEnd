import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-re-header',
  templateUrl: './re-header.component.html',
  styleUrls: ['./re-header.component.css']
})
export class ReHeaderComponent {

  @Output() sideNavToggled =new EventEmitter<boolean>();
  menuStatus:boolean = false;

  SideNavToggled(){
    this.menuStatus= !this.menuStatus
    this.sideNavToggled.emit(this.menuStatus)
  }
}
