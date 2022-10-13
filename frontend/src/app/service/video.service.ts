import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { Category } from "./category.service";
import { UserService, User } from "./user.service";

export class Video {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public image: string | undefined,
    public duration: number,
    public categories = [{id,name: ''}],
  ) {}
}


@Injectable({
  providedIn: "root"
})
export class VideoService {
  private videosUrl: string;
  user!: User | any;
  video!: Video | any;

  constructor(private httpClient: HttpClient, private userService: UserService) {
    this.videosUrl = 'http://localhost:8080/videos/get';
  }

  getVideos(): Observable<Video[]> {
    return this.httpClient.get<Video[]>(this.videosUrl);
  }

  getVideoById(id: string): Observable<Video> {
    return this.httpClient.get<Video>(this.videosUrl + '/id?id=' + `${id}`).pipe(
    map(video => video) // JSON
    );
  }
  
  public createVideo(video: any) {
    return this.httpClient.post<Video>(
      "http://localhost:8080/videos/post",
      video
    );
  }

  addVideoToProfile(video:Video) {        
    this.user = sessionStorage.getItem('user');
    let currentUser: User = JSON.parse(this.user); 
    let currentuserVideos = currentUser.videos;
    currentuserVideos.push(video);   
    this.userService.updateUser(currentUser).subscribe(user => user);
  }

  updateVideo(video: Video): Observable<void> {
    return this.httpClient.put<void>('http://localhost:8080/videos/' + `update/${video.id}`, video);
  }

  removeVideoFromProfile(video:Video) {        
    this.user = sessionStorage.getItem('user');
    let currentUser: User = JSON.parse(this.user); 
    let currentuserVideos: Video[] | any = currentUser.videos; 
    let  videoIndex = currentuserVideos.findIndex((userVideo: Video) => video.id === userVideo.id)
    currentuserVideos.splice(videoIndex, 1);
    this.userService.updateUser(currentUser).subscribe(user => user);
    sessionStorage.removeItem('userVideos');
  }

  deleteVideo(video:Video): Observable<void> {
    return this.httpClient.delete<void>("http://localhost:8080/videos/delete/" + video.id)
  }
}
