import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {StatusService} from "../shared/services/status.service";

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.sass']
})
export class StatusComponent implements OnInit {
  user;
  constructor(private router: Router, private statusService: StatusService) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.statusService.status({}).subscribe((res:any) =>{
        this.user = res.user;
        console.log(this.user)
      });
    }, 600)

  }
}
