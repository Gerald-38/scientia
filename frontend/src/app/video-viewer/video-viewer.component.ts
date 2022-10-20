import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-viewer',
  templateUrl: './video-viewer.component.html',
  styleUrls: ['./video-viewer.component.scss']
})
export class VideoViewerComponent implements OnInit {  
  @Input() videoParam: any;
  playerConfig = {
    controls: 1,
    mute: 0,
    autoplay: 1,     
  };
  screenW!: number;
  @Input() videoWidth: any;
  @Input() videoHeight: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.videoParam = this.route.snapshot.paramMap.get('videoId');

    const tag = document.createElement('script');

    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    this.screenW=screen.width;   

    if (this.screenW < 1300) {
      this.videoWidth = 320;
      this.videoHeight = 160;
    }
    else {
      this.videoWidth = 640;
      this.videoHeight = 320;
    }
  }
}
