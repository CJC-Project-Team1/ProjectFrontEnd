import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from '../shared/notifier.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb:FormBuilder,private router:Router,private notify:NotifierService){}

  loginform:FormGroup

  ngOnInit(){
    this.loginform=this.fb.group({
      username:[],
      password:['',Validators.required]
    })
  }

  onLognin(){
    if(this.loginform.get('username').value==="admin" && this.loginform.get('password').value==="admin"){
      console.log('in Admin');
      sessionStorage.setItem('role', 'ADMIN');
      this.notify.success("Welcome! Admin","Log In Successfully!!");
      this.router.navigate(['reHome','homepage']);
    }
    else if(this.loginform.get('username').value==="re" && this.loginform.get('password').value==="re123"){
      console.log('in Relational Executive');
      sessionStorage.setItem('role', 'RE');
      this.notify.success("Welcome! Relational Executive","Log In Successfully!!");
      this.router.navigate(['reHome','homepage']);
    }
    else if(this.loginform.get('username').value==="oe" && this.loginform.get('password').value==="oe123"){
      console.log('in Operational Executive');
      sessionStorage.setItem('role', 'OE');
      this.notify.success("Welcome! Operational Executive","Log In Successfully!!");
      this.router.navigate(['reHome','homepage']);
    }
    else if(this.loginform.get('username').value==="cm" && this.loginform.get('password').value==="cm123"){
      console.log('in Credit Manager');
      sessionStorage.setItem('role', 'CM');
      this.notify.success("Welcome! Credit Manager","Log In Successfully!!");
      this.router.navigate(['reHome','homepage']);
    }
    else if(this.loginform.get('username').value==="ah" && this.loginform.get('password').value==="ah123"){
      console.log('in Account Head');
      sessionStorage.setItem('role', 'AH');
      this.notify.success("Welcome! Account Head","Log In Successfully!!");
      this.router.navigate(['reHome','homepage']);
    }
    else if(this.loginform.get('username').value==="th" && this.loginform.get('password').value==="th123"){
      console.log('in Tele Head');
      sessionStorage.setItem('role', 'TH');
      this.notify.success("Welcome! Tele Head","Log In Successfully!!");
      this.router.navigate(['reHome','homepage']);
    }
    
    else{
      this.notify.error("Oops! Something Went Wrong","Error Occured!!");
      this.router.navigate(['header','login','loginfailed'])
    }
  }
}