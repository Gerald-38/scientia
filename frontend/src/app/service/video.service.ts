import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, Observable } from "rxjs";

export class Video {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public image: string,
    public duration: number,
    // public categories: Array<String>,
    public categories: any = []
  ) {}
}


@Injectable({
  providedIn: "root"
})
export class VideoService {
  private videosUrl: string;

  constructor(private httpClient: HttpClient) {
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

  deleteVideo(video:Video): Observable<void> {
    return this.httpClient.delete<void>("http://localhost:8080/videos/delete/" + video.id)
  }
  
}
