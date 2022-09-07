// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-user',
//   templateUrl: './user.component.html',
//   styleUrls: ['./user.component.scss']
// })
// export class UserComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from "@angular/core";
import { HttpClientService, User } from "../service/httpclient.service";
import { MatTableModule } from '@angular/material/table' 
// import { HttpClientService, User } from "../service/httpclient.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})

export class UserComponent implements OnInit {
  users: User[] | any;
  displayedColumns: string[] = ["name", "role", "delete"];

  constructor(private httpClientService: HttpClientService) {}

  ngOnInit() {
    this.httpClientService
      .getUsers()
      .subscribe(response => this.handleSuccessfulResponse(response));
  }

  handleSuccessfulResponse(response: User[]) {
    this.users = response;
  }

  deleteUser(user: User): void {
    this.httpClientService.deleteUser(user).subscribe(data => {
      this.users = this.users.filter((u: User) => u !== user);
    });
  }
}
