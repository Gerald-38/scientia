import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userRole: any;

  constructor(public loginService:AuthenticationService){ }
  ngOnInit() {
    this.userRole = sessionStorage.getItem("role");
    console.log(this.userRole);
  }

}
