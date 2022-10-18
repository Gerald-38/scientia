import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { UserService, User } from "../service/user.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.scss"]
})
export class AddUserComponent implements OnInit {
 
  user: User = new User("", "", "", "user", []);
  passwordConfirm!: string;
  message!: string;
  usernameMessage!: string;
  
  @Input() error: string | null | undefined;

  constructor(private userService: UserService,
    private router: Router) {}

  ngOnInit() {
    
  }

  createUser(): void {
    this.message='';
    this.usernameMessage='';
    if(this.user.password.length > 7) {
      if (this.user.password === this.passwordConfirm) {
        this.userService.createUser(this.user).subscribe(data => {
        alert("Votre compte est créé ! Connectez vous dès à présent !");
        this.router.navigate([''])
        },
        error => {
          this.error = error.message;
          this.usernameMessage = "veuillez saisir un identifiant comportant au moins 2 caractères ou utilisateur déjà créé"
        }  );
      }
      else {
        this.message = "Veuillez vérifier le mot de passe : il doit être identique dans les deux champs de saisie"
      }      
    }
    else {
      this.message = "Veuillez veuillez entrer un mot de passe coportant au moins 8 caractères"
    }    
  }
}

