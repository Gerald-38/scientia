import { Component, OnInit } from '@angular/core';
import { HttpClientService, User } from '../service/httpclient.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})



export class UserProfileComponent implements OnInit {
  users: User[] | any;
  userName: any;
  constructor(private httpClientService: HttpClientService) { }

  

  ngOnInit(): void {    
    this.userName = sessionStorage.getItem("username");
    this.httpClientService.getUsers().subscribe(data => {
      this.users = data;      
    });
  }
  

}
