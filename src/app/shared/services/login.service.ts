import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Http} from "@angular/http";

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  login(obj) {
    return this.http.post('https://api.amalyze.com/0.0.12/system.user.login', obj);
  }

}
