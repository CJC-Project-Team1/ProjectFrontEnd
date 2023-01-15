import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      password:[]
    })
  }

  logincheck(){
    if(this.loginform.get('username').value==="re" && this.loginform.get('password').value==="re123"){
      this.router.navigate(['reHome'])
    }
    else{
      this.router.navigate(['header','login','loginfailed'])
    }
  }
}
