import { AUTO_STYLE } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-viewer',
  // template: '<youtube-player></youtube-player>',
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

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.videoParam = this.route.snapshot.paramMap.get('videoId');

    const tag = document.createElement('script');

    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }
}
