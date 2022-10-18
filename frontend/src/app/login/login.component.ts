// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication-service';
import { UserService, User } from '../service/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user!: User;
  username = ''
  password = ''
  invalidLogin = false
  message!: string;
  // public showSpinner: boolean = true;
  
  @Input() error: string | null | undefined;

  constructor(private router: Router,
    private loginservice: AuthenticationService, private userService: UserService) { }

  ngOnInit() {
  }

  checkLogin() {
    (this.loginservice.authenticate(this.username, this.password).subscribe(
      data => {
        this.router.navigate(['videos'])               
        this.invalidLogin = false        
      },
      error => {
        this.invalidLogin = true
        this.error = error.message;
        this.message = "Erreur dans la saisie de l'identifiant ou du mot de passe. Veuillez réessayer"

      }      
    )
    );
    // console.log(this.username)
    // console.log("USER --------->" + (this.httpClientService.getUser(this.username))); 
    // if(this.username) {
    //   this.httpClientService.getUser(this.username).subscribe(
    //     (user: User) => this.user = user
    //   );
    //   console.log("USER --->" + this.user)
    // }
     


  }

}