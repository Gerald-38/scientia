import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { HttpClientService, User } from "./httpclient.service";

// export class User {
//   constructor(public status: string) {}
// }

// user: User;

@Injectable({
  providedIn: "root"
})
export class AuthenticationService  {
  

  constructor(private httpClient: HttpClient, private httpClientService: HttpClientService) {}
// Provide username and password for authentication, and once authentication is successful, 
//store JWT token in session
  authenticate(username: string, password: any) {
    return this.httpClient
      .post<any>("http://localhost:8080/authenticate", { username, password })
      .pipe(
        map(userData => {
          sessionStorage.setItem("username", username);
          let tokenStr = "Bearer " + userData.token;
          sessionStorage.setItem("token", tokenStr);
          return userData;
        })
      );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("username");
    // console.log(!(user === null));
    return !(user === null);
  }  

  logOut() {
    sessionStorage.removeItem("username");
  }
}

