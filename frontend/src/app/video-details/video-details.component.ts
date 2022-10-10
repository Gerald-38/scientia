import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { HttpClientService, User } from '../service/httpclient.service';
import { VideoService, Video } from '../service/video.service';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent implements OnInit, OnDestroy {
  @Output() onAdd: EventEmitter<Video> = new EventEmitter();
  user!: User | any;
  video!: Video | any;
  message!: string;
  imgRoot: string = "../../assets/images/";
  isAdded: boolean = false;
  currentVideo: Video | any;

  constructor(private route: ActivatedRoute, private videoService: VideoService, private httpClientService: HttpClientService ,private router: Router) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {  
      this.videoService.getVideoById(id).subscribe(
        video => (this.video = video)                
      )
    }

    if (id) {  
      this.videoService.getVideoById(id).subscribe(
        video => sessionStorage.setItem('video', JSON.stringify(video))                
      )
    }   

    this.currentVideo = sessionStorage.getItem('video');
    let currentVideoUsed: Video = JSON.parse(this.currentVideo);
    console.log(currentVideoUsed);
    this.videoService.checkAdded(currentVideoUsed);    
    
  }

  onAddVideo(video: Video) {
    this.onAdd.emit(video)   
    this.videoService.addVideoToProfile(video);
    this.isAdded = true;
  }

  onDeleteVideo(video: Video) {
    if (confirm('Voulez-vous vraiment supprimer ce contenu ?')) {
      // let title: string = video.title;     
      this.videoService.deleteVideo(video).subscribe(
        () => {       
          this.router.navigate(['/videos']); 
          // location.reload();
        }
      )
    }    
  }

  ngOnDestroy(): void {   

  }

}
