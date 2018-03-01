import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StatusComponent} from "./status/status.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule} from "@angular/common/http";
import {RecaptchaModule} from "ng-recaptcha";
import {LoginService} from "./shared/services/login.service";
import {StatusService} from "./shared/services/status.service";
import {HttpModule} from "@angular/http";
import {HttpWrap} from "./shared/services/http-wrap.service";
import {HttpXsrfInterceptor} from "./shared/services/http-xsrf";


@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header'
    }),
    HttpModule,
    RecaptchaModule.forRoot(),
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: HttpXsrfInterceptor, multi: true },HttpWrap, LoginService, StatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
