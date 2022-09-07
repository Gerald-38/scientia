// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-add-user',
//   templateUrl: './add-user.component.html',
//   styleUrls: ['./add-user.component.scss']
// })
// export class AddUserComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from "@angular/core";
import { HttpClientService, User } from "../service/httpclient.service";
import { Router } from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.scss"]
})
export class AddUserComponent implements OnInit {
  user: User = new User("", "", "user");
  // public showSpinner: boolean = true;

  constructor(private httpClientService: HttpClientService,
    private router: Router) {}

  ngOnInit() {}

  createUser(): void {
    console.debug(this.user);
    this.httpClientService.createUser(this.user).subscribe(data => {
      alert("User created successfully.");
      this.router.navigate([''])
    });
  }
}
