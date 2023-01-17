import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb:FormBuilder,private router:Router){}

  loginform:FormGroup

  ngOnInit(){
    this.loginform=this.fb.group({
      username:[],
      password:['',Validators.required]
    })
  }

  onLognin(){
    if(this.loginform.get('username').value==="re" && this.loginform.get('password').value==="re123"){
      console.log('in Relational Executive');
      sessionStorage.setItem('role', 'RE');
      this.router.navigate(['reHome','homepage']);
    }
    else if(this.loginform.get('username').value==="oe" && this.loginform.get('password').value==="oe123"){
      console.log('in Operational Executive');
      sessionStorage.setItem('role', 'OE');
      this.router.navigate(['reHome','homepage']);
    }
    else if(this.loginform.get('username').value==="cm" && this.loginform.get('password').value==="cm123"){
      this.router.navigate(['cmHome'])
    }
    else if(this.loginform.get('username').value==="ah" && this.loginform.get('password').value==="ah123"){
      this.router.navigate(['ahHome'])
    }
    else if(this.loginform.get('username').value==="th" && this.loginform.get('password').value==="th123"){
      this.router.navigate(['thHome'])
    }
    else{
      this.router.navigate(['header','login','loginfailed'])
    }
  }
}