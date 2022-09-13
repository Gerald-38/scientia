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


  constructor(private httpClient: HttpClient) {

  }

  getUsers():  Observable<User[]> {
    return this.httpClient.get<User[]>("http://localhost:8080/users/get");
  }


  public getUser(username: string): Observable<User> {
    return this.httpClient.get<User>("http://localhost:8080/users/user?username=" + username);           
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
