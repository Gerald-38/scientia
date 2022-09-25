import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, Observable } from "rxjs";

export class User {
  constructor(
    public username: string,
    public password: string,
    public role: string,
  ) {}
}



@Injectable({
  providedIn: "root"
})
export class HttpClientService {
  private userUrl: string;


  constructor(private httpClient: HttpClient) {
    this.userUrl = 'http://localhost:8080/users/';

  }

  getUsers():  Observable<User[]> {
    return this.httpClient.get<User[]>("http://localhost:8080/users/get");
  }
  
  getUserByUserName(username: string): Observable<User> {
    return this.httpClient.get<User>(this.userUrl + 'user?username=' + `${username}`).pipe(
    map(user => user) // JSON
    );
  }

  public deleteUser(user: any) {
    return this.httpClient.delete<User>(
      "http://localhost:8080/users" + "/" + user.userId
    );
  }

  public createUser(user: any) {
    return this.httpClient.post<User>(
      "http://localhost:8080/register",
      user
    );
  }

}
