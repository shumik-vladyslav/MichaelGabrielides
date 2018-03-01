import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class HttpWrap {
  fToken;
  xToken;
  constructor(private http: Http) {}

  createAuthorizationHeader(headers: Headers) {
    headers.append('X-FALCON-TOKEN', this.fToken);
    headers.append('X-XSRF-TOKEN', this.xToken);
  }

  setHeaders(fToken, xToken){
    this.fToken = fToken;
    this.xToken = xToken;
  }


  get(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    });
  }

  post(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: headers
    });
  }
}
