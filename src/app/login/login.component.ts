import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { response } from 'express';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private userAuthService: UserAuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(loginForm: NgForm){
    this.userService.login(loginForm.value).subscribe(
      (response: any)=>{
        console.log(response.jwtToken);
        console.log(response.user.role);

        //this.userAuthService.setRoles(response.user.role);
        //this.userAuthService.setToken(response.jwtToken);

        const role = response.user.role[0].roleName;
        if(role === 'Admin') {
          this.router.navigate(['/admin']);
        } else{
          this.router.navigate(['/user']);
        }
        
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  public isLoggedIn(){
    return this.userAuthService.isLoggedIn();
  }

  public logout(){
    this.userAuthService.clear();
    this.router.navigate(['/home']);
  }
}
