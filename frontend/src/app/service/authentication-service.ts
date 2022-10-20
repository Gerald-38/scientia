import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { UserService, User } from "./user.service";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService  {
  

  constructor(private httpClient: HttpClient, private userService: UserService) {}

//Fournit un nom d'utilisateur et un mot de passe pour l'authentification, et une fois l'authentification réussie, 
//stocke JWT token dans la session
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
    return !(user === null);
  }

  // Récupératin du user par son username et stockage du rôle dans la session (pour ajouter ou non la console d'admin dans le Header Menu)
  saveUserRole() {
    let currentuser: string | null = sessionStorage.getItem("username")
    if (currentuser) {
      this.userService.getUserByUserName(currentuser).subscribe (      
        user => sessionStorage.setItem('role', user.role)      
      );  
    } 
  }

  saveUser() {
    let currentuser: string | null = sessionStorage.getItem("username")
    if (currentuser) {
      this.userService.getUserByUserName(currentuser).subscribe (      
        user => sessionStorage.setItem('user', JSON.stringify(user))      
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

  // A la déconnexion, le session storage est purgé
  logOut() {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("video");
    sessionStorage.removeItem("videos");
    sessionStorage.removeItem("userVideos");
    sessionStorage.removeItem("users");
  }
}

