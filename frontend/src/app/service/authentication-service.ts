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
          this.saveUserRole();
          return userData;
        })
      );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("username");
    // console.log(!(user === null));
    return !(user === null);
  }
  
  // isUserAdmin() {
  //   let username = sessionStorage.getItem("username");
  //   if (username) {
  //     this.httpClientService.getUserByUserName(username).pipe(
  //       map((userData: { role: string; }) => {
  //         if (sessionStorage.getItem(userData.role) === "admin") {
  //           return true
  //         }
  //         else {
  //           return false
  //         }
  //       })
  //     );
  //   }
  // }

  // isUserAdmin() {
  //   let userRole = sessionStorage.getItem("role")
  //   if (userRole === "admin") {
  //     return true;
  //   }
  //   else {
  //     return false;
  //   }    
  // }

  saveUserRole() {
    let currentuser: string | null = sessionStorage.getItem("username")
    if (currentuser) {
      this.httpClientService.getUserByUserName(currentuser).subscribe (      
        user => sessionStorage.setItem('role', user.role)      
      );  
    } 
  }

  isUserAdmin() {
    let userRole = sessionStorage.getItem("role");
    if (userRole === "admin") {
      return true;
    }
    else {
      return false;
    }
  }

  logOut() {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("user");
  }
}

