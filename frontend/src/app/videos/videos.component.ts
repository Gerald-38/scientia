import { Component, OnInit } from '@angular/core';
import { VideoService, Video } from '../service/video.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  videos: Video[] | any;
  displayedColumns: string[] = ["title"];
  choixCatego: boolean = false;

  constructor(private videoService: VideoService) { }

  onSelectByCategory(): void {
    this.choixCatego = true;
  }

  onReload() {
    window.location.reload()
  }

  ngOnInit(): void {
  this.videoService.getVideos().subscribe(data => {
    this.videos = data;      
  });
  }  

}
