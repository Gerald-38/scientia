import { Component, OnInit } from "@angular/core";
import { UserService, User } from "../service/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] | any;
  displayedColumns: string[] = ["username", "role"];

  constructor(private userService: UserService) {}

  ngOnInit() {
  this.userService.getUsers().subscribe(data => {
    this.users = data;      
  });
}

}
