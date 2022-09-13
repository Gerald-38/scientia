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

  user!: User;

  constructor(public loginService:AuthenticationService, private httpClientService: HttpClientService){ }
  ngOnInit() {
    // this.userRole = sessionStorage.getItem("role"); 
    // this.authenticationService.catchUserRole();

    // const username = sessionStorage.getItem("username");
    // console.log("USERNAME ----------->" + username);
    // this.user = (this.httpClientService.getUser(username));
    // console.log("USER ------>" + this.user);
    // if (username) {  
    //   this.httpClientService.getUser(username).subscribe(
    //     user => this.user = user            
    //   )
    //   console.log("USER------>" + this.user)   
    // }
  }

}
