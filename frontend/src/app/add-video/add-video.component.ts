import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideoService, Video } from '../service/video.service';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.scss']
})
export class AddVideoComponent implements OnInit {
  video: Video = new Video("", "", "", "");

  constructor(private videoService: VideoService,
    private router: Router) { }

    createVideo(): void {
      console.debug(this.video);
      this.videoService.createVideo(this.video).subscribe(data => {
        alert("Video AJoutée");
        this.router.navigate(['/videos'])
      });
    }

  ngOnInit(): void {
  }

}
