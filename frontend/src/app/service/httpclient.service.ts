// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class HttpclientService {

//   constructor() { }
// }

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, Observable } from "rxjs";

export class User {
  constructor(
    public username: string,
    public password: string,
    public role: string = "user",
  ) {}
}

// export class Video {
//   constructor(
//     public title: string,
//   ) {}
// }

@Injectable({
  providedIn: "root"
})
export class HttpClientService {
  private videosUrl: string;

  constructor(private httpClient: HttpClient) {
    this.videosUrl = 'http://localhost:8080/videos/get';
  }

  getUsers():  Observable<User[]> {
    return this.httpClient.get<User[]>("http://localhost:8080/users/get");
  }

  // getVideos(): Observable<Video[]> {
  //   return this.httpClient.get<Video[]>(this.videosUrl);
  // }

  // getVideoById(id: string): Observable<Video> {
  //   return this.httpClient.get<Video>(this.videosUrl + '/id?id=' + `${id}`).pipe(
  //   map(video => video) // JSON
  //   );
  // }
  
  // public createVideo(video: any) {
  //   return this.httpClient.post<Video>(
  //     "http://localhost:8080/videos/post",
  //     video
  //   );
  // }

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

  // public getUserName() {
  //   console.log(sessionStorage.getItem("username"));    
  // }



}
