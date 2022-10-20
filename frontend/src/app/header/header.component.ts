import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication-service';
import { UserService, User } from '../service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userOnline: any;
  currentUser  = sessionStorage.getItem('user');
  user!: User;  
  

  constructor(public loginService:AuthenticationService, private userService: UserService){ }
  ngOnInit() {
    this.userOnline = sessionStorage.getItem('username');
    this.loginService.saveUserRole();    
  }
}
