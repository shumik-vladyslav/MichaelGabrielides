import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../shared/services/login.service";
import {HttpWrap} from "../shared/services/http-wrap.service";
import {StatusService} from "../shared/services/status.service";
declare var md5;
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {
  login = {
    "captcha": "",
    "username": "developertest@amalyze.com",
    "password": "Iilo1ail",
    "password_md5": ""
  };

  constructor(private router: Router, private loginService: LoginService, private httpWrap: HttpWrap, private StatusService: StatusService) {
  }

  ngOnInit() {

  }

  resolved(e){
    console.log(e)
    this.login.captcha = e;
  }

  signIn(){
    if(this.login.captcha){
      this.login.password_md5 = md5(this.login.password);
      this.loginService.login(this.login).subscribe((response: any) => {
        var headers = response.headers;
        var fToken = headers.get('X-FALCON-TOKEN');
        var xToken = headers.get('X-XSRF-TOKEN');
        console.log(fToken, xToken)
        this.httpWrap.setHeaders(fToken, xToken);
        this.router.navigate(['status']);

      });
    }
  }


}
