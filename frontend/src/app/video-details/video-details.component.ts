import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClientService, Video } from '../service/httpclient.service';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent implements OnInit {

  video!: Video;

  constructor(private route: ActivatedRoute, private httpClientService: HttpClientService) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {  
      this.httpClientService.getVideoById(id).subscribe(
        video => this.video = video        
      )
    }
  }

}
