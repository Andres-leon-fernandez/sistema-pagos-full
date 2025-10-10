import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServices {
    public users: any={
    admin: {password:'1234', roles:['ESTUDIANTE','ADMIN']},
    user1: {password:'1234', roles:['ESTUDIANTE']}
  }

  public username:any;

  public isAuthenticate:boolean=false;

  public roles: String[]=[];

  constructor(private router:Router){}

  public login(username:string,password:string):boolean{
    if(this.users[username]&&this.users[username]['password']==password){
      this.username=username;
      this.isAuthenticate=true;
      this.roles=this.users[username]["roles"];
      return true;
    }
    else{
      return false;
    }
  }


  logout(){
    this.isAuthenticate=false;
    this.roles=[];
    this.username=undefined;
    this.router.navigateByUrl("/login")
  }
}
