import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../service/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})



export class UserProfileComponent implements OnInit {
  users: User[] | any;
  userName: any;
  constructor(private userService: UserService) { }

  

  ngOnInit(): void {    
    this.userName = sessionStorage.getItem("username");
    this.userService.getUsers().subscribe(data => {
      this.users = data;      
    });
  }
  

}
