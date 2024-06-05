import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { error } from 'console';
import { response } from 'express';
import { Name } from '../_model/name.model';
import { NameService } from '../_services/name.service';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddNewUserComponent implements OnInit {

  name: Name = {
    userName: "",
    userFirstName: "",
    userLastName: "",
    userPassword: ""
  }

  constructor(public nameService: NameService) { }

  ngOnInit(): void {
  }

  addName(nameForm: NgForm) {
    this.nameService.addName(this.name).subscribe(
      (response: Name) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

}
