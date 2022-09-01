import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService, Video } from '../service/video.service';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent implements OnInit {

  video!: Video;

  constructor(private route: ActivatedRoute, private videoService: VideoService) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {  
      this.videoService.getVideoById(id).subscribe(
        video => this.video = video        
      )
    }
  }

}
