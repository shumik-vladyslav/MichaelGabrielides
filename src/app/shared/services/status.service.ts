import { Injectable } from '@angular/core';
import {HttpWrap} from "./http-wrap.service";

@Injectable()
export class StatusService {

  constructor(private http: HttpWrap) { }

  status(obj) {
    return this.http.post('https://api.amalyze.com/0.0.12/system.user.status', obj);
  }
}
