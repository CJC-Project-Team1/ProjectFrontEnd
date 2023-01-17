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
      this.router.navigate(['reHome'])
    }
    else if(this.loginform.get('username').value==="oe" && this.loginform.get('password').value==="oe123"){
      this.router.navigate(['oeHome'])
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
