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
  message!: string;
  
  @Input() error: string | null | undefined;

  constructor(private router: Router,
    private loginservice: AuthenticationService, private userService: UserService) { }

  ngOnInit() {
  }

  checkLogin() {
    (this.loginservice.authenticate(this.username, this.password).subscribe(
      data => {
        this.router.navigate(['videos'])      
      },
      error => {
        this.error = error.message;
        this.message = "Erreur dans la saisie de l'identifiant ou du mot de passe. Veuillez réessayer"

      }      
    )
    );
  }
}
