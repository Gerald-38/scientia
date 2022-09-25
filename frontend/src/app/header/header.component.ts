import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication-service';
import { HttpClientService, User } from '../service/httpclient.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userRole: any;
  userOnline: any;

  user!: User;

  constructor(public loginService:AuthenticationService, private httpClientService: HttpClientService){ }
  ngOnInit() {
    this.userOnline = sessionStorage.getItem('username');
    console.log(this.userOnline);

    this.httpClientService.getUserByUserName(this.userOnline).subscribe (
      user => this.user = user, 
    );
  }

}
