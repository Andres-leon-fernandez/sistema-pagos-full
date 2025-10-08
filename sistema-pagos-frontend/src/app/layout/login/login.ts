import { AuthServices } from './../../services/auth-services';
import { Component, OnInit } from '@angular/core';
import { MatCardModule} from "@angular/material/card";
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [MatCardModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatButtonModule,ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit{
  public loginForm!: FormGroup;

  constructor(private formBuilder:FormBuilder,private authServices:AuthServices, private router:Router){

  }

  ngOnInit():void{
    this.loginForm=this.formBuilder.group({
      username: this.formBuilder.control(''),
      password: this.formBuilder.control('')
    });
  }

  login():void{
    let username= this.loginForm.value.username;
    let password=this.loginForm.value.password;
    let auth:boolean=this.authServices.login(username,password);

    if(auth==true){
      this.router.navigateByUrl("/admin");
    }
  }
}
