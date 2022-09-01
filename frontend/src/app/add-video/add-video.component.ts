import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService, Video } from '../service/httpclient.service';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.scss']
})
export class AddVideoComponent implements OnInit {
  video: Video = new Video("");

  constructor(private httpClientService: HttpClientService,
    private router: Router) { }

    createVideo(): void {
      console.debug(this.video);
      this.httpClientService.createVideo(this.video).subscribe(data => {
        alert("Video AJoutée");
        this.router.navigate(['/videos'])
      });
    }

  ngOnInit(): void {
  }

}
