import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoService, Video } from '../service/video.service';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent implements OnInit {

  video!: Video;
  message!: string;

  constructor(private route: ActivatedRoute, private videoService: VideoService, private router: Router) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {  
      this.videoService.getVideoById(id).subscribe(
        video => this.video = video        
      )
    }    
  }

  onDeleteVideo(video: Video) {
    if (confirm('Voulez-vous vraiment supprimer ce contenu ?')) {
      let title: string = video.title;     
      this.videoService.deleteVideo(video).subscribe(
        () => {       
          this.router.navigate(['/videos']); 
          // location.reload();
        }
      )
    }    
  }

}
