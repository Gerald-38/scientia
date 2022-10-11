import { Component, EventEmitter, OnInit, Output } from "@angular/core";
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
  

  constructor(private userService: UserService,
    private router: Router) {}

  ngOnInit() {
    
  }

  createUser(): void {
    if (this.user.password === this.passwordConfirm) {
      this.userService.createUser(this.user).subscribe(data => {
      alert("Votre compte est créé ! Connectez vous dès à présent !");
      this.router.navigate([''])
      });
    }
    else {
      this.message = "Veuillez vérifier le mot de passe : il doit être identique dans les deux champs de saisie"
    }
  }
}
