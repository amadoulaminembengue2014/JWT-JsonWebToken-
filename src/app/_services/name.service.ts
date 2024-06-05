import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Name } from '../_model/name.model';

@Injectable({
  providedIn: 'root'
})
export class NameService {

  constructor(public httpClient: HttpClient) { }

  public addName(name: Name){
    return this.httpClient.post<Name>("http://localhost:9090/registerNewUser", name);
  }
}
