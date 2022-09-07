import { Component, OnInit } from "@angular/core";
import { HttpClientService, User } from "../service/httpclient.service";
import { MatTableModule } from '@angular/material/table' 
// import { HttpClientService, User } from "../service/httpclient.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] | any;
  displayedColumns: string[] = ["username", "role"];

  constructor(private httpClientService: HttpClientService) {}

  ngOnInit() {
  //   this.httpClientService
  //     .getUsers()
  //     .subscribe(response => this.handleSuccessfulResponse(response));
  // }

  // handleSuccessfulResponse(response: User[]) {
  //   this.users = response;
  // }

  this.httpClientService.getUsers().subscribe(data => {
    this.users = data;      
  });
}

  // deleteUser(user: User): void {
  //   this.httpClientService.deleteUser(user).subscribe(data => {
  //     this.users = this.users.filter((u: User) => u !== user);
  //   });
  // }
}
