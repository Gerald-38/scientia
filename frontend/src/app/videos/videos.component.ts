import { Component, OnInit } from '@angular/core';
import { HttpClientService, Video } from '../service/httpclient.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  videos: Video[] | any;
  displayedColumns: string[] = ["title"];

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit(): void {
  this.httpClientService.getVideos().subscribe(data => {
    this.videos = data;      
  });
  }
  

}
