import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private userAuthService: UserAuthService, public router: Router,
    public userService: UserService ) { }

  ngOnInit(): void {
  }

  public isLoggedIn(){
    return this.userAuthService.isLoggedIn();
  }

  public isAdmin(){
    return this.userAuthService.isAdmin();
  }
  
  public isUser(){
    return this.userAuthService.isUser();
  }
  

}
