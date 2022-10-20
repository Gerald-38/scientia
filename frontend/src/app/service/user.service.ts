import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { Video } from "./video.service";

export class User {
  constructor(
    public id: string,
    public username: string,
    public password: string,
    public role: string,
    public videos: Array<Video>,
  ) {}
}

@Injectable({
  providedIn: "root"
})

export class UserService {
  private userUrl: string;
  video!: Video | any;

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

  getVideosByUserName(username: string): Observable<Video[]> {
    return this.httpClient.get<Video[]>(this.userUrl + 'get/videos/' + 'user?userName=' + `${username}`).pipe(
      map(videos => {
        let userVideos: any = [];
        videos.forEach((v: Video) => {
          userVideos.push(v.id);
        });
        sessionStorage.setItem('userVideos', JSON.stringify(userVideos))
        return userVideos;
      }),
    )
  }

  public createUser(user: any) {
    return this.httpClient.post<User>(
      "http://localhost:8080/register",
      user
    );
  }

  updateUser(user: User): Observable<void> {
    return this.httpClient.put<void>(this.userUrl + `update/${user.id}`, user);
  }

  public deleteUser(user: any) {
    return this.httpClient.delete<User>(
      "http://localhost:8080/users/delete" + "/" + user.id
    );
  }
}
